import { capitalize } from '../build-utils/css/utils/capitalize';

// https://storybook.js.org/docs/react/configure/overview#with-a-configuration-object
type StorySpecifier = {
  /**
   * When auto-titling, what to prefix all generated titles with (default: '')
   */
  titlePrefix: string;
  /**
   * Where to start looking for story files
   */
  directory: string;
  /**
   * What does the filename of a story file look like?
   * (a glob, relative to directory, no leading `./`)
   * If unset, we use `** / *.@(mdx|stories.@(mdx|tsx|ts|jsx|js))` (no spaces)
   */
  files: string;
};

type StoryEntry = StorySpecifier & {
  fileName: string;
};

// We don't want to show these folders in the sidebar
const removedPrefixes = /(components|icons|styles)\//;

const pathRegex =
  /(?<fullFolder>..\/src(\/(?<folder>.*))?\/__stories__)\/(?<fileName>.*)\.stories\.tsx/i;

// The titlePrefix defines the folder structure in the sidebar
const getTitlePrefix = ({
  folder,
  fileName,
}: {
  folder?: string;
  fileName: string;
}): string => {
  if (!folder) {
    return 'Amino';
  }

  const removedCommonPrefixFolder = folder.replace(removedPrefixes, '');

  const folderParts = removedCommonPrefixFolder.split('/');

  // Just want the immediate parent folder
  const parentFolder = folderParts.pop() || '';

  const sanitizedParentFolder = parentFolder.toLowerCase().replace(/-/g, '');

  // Folder name and file name are the same, so we can remove the folder name from the prefix
  const hoist = sanitizedParentFolder === fileName.toLowerCase();

  return hoist
    ? ['Amino', ...folderParts].join('/')
    : ['Amino', ...folderParts, capitalize(parentFolder)].join('/');
};

const getStoryEntry = (storyPath: string): StoryEntry => {
  const matched = storyPath.match(pathRegex);

  const { fullFolder, folder, fileName } = matched?.groups || {};

  const titlePrefix = getTitlePrefix({ folder, fileName });

  return {
    directory: fullFolder,
    fileName,
    titlePrefix,
    files: `${fileName}.stories.tsx`,
  };
};

const getTitle = (entry: StoryEntry): string =>
  `${entry.titlePrefix}/${entry.fileName}`;

/** Build story entries object */
export const buildStories = (stories: string[]) =>
  stories
    .map(storyPath => getStoryEntry(storyPath))
    // Will order stories alphabetically by full name
    .sort((a, b) => {
      const storyNameA = getTitle(a);
      const storyNameB = getTitle(b);
      return storyNameA.localeCompare(storyNameB);
    });
