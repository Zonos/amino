import { capitalize } from '../build-utils/css/utils/capitalize';
type ProcessingStoryEntry = {
  titlePrefix: string;
  folder: string;
  directory: string;
  files: string;
};

const isRootFolder = (folder: string) => ['src', 'styles'].includes(folder);

// Read the specified title from a story meta.
const getTitle = (entry: ProcessingStoryEntry): string =>
  isRootFolder(entry.folder) ? entry.files : entry.folder;

const getStoryEntry = (storyPath: string) => {
  const matched = storyPath.match(
    /(.+)\/([a-zA-Z-_]+?)\/__stories__\/([a-zA-Z]+)\.stories\.tsx*/i
  );
  const [, fullPath, folder, fileName] = matched || [];
  /** remove the `-` and lowercase it for comparing */
  const sanitizedFolder = folder.toLowerCase().replace('-', '');
  const titlePrefix =
    /** If it's not root folder, make folder for the prefix title, otherwise just namespace */
    sanitizedFolder !== fileName.toLowerCase() && !isRootFolder(folder)
      ? `Amino/${capitalize(folder)}/${fileName}`
      : `Amino`;
  return {
    titlePrefix: titlePrefix,
    folder: sanitizedFolder,
    directory: `${fullPath}/${folder}/__stories__`,
    files: `${fileName}.stories.tsx`,
  };
};
/** Build story entries object */
export const buildStories = (stories: string[]) =>
  stories
    .map(storyPath => getStoryEntry(storyPath))
    // Will order stories alphabetically by file name if it's root folder, otherwise order by folder name.
    .sort((a, b) => {
      const storyNameA = getTitle(a);
      const storyNameB = getTitle(b);
      return storyNameA.localeCompare(storyNameB);
    });
