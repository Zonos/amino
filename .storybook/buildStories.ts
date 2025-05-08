import { glob } from 'glob';
import capitalize from 'lodash/capitalize';

// https://storybook.js.org/docs/react/configure/overview#with-a-configuration-object
type StorySpecifier = {
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
  /**
   * When auto-titling, what to prefix all generated titles with (default: '')
   */
  titlePrefix: string;
};

type StoryEntry = StorySpecifier & {
  fileName: string;
};

// We don't want to show these folders in the sidebar
const removedPrefixes = /(components|icons|styles)\//;

// Refactored to avoid named capture groups
const pathRegex =
  /(\.\.\/src(?:\/(.*))?\/(?:__stories__))\/((.*)\.(mdx|stories\.tsx))/i;

// The titlePrefix defines the folder structure in the sidebar
const getTitlePrefix = ({
  fileName,
  folder,
}: {
  fileName: string;
  folder?: string;
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

  if (!matched) {
    return {
      directory: '',
      fileName: '',
      files: '',
      titlePrefix: '',
    };
  }

  // Extracting from indexed capture groups instead of named groups
  const fullFolder = matched[1] || '';
  const folder = matched[2];
  const fullFileName = matched[3] || '';
  const fileName = matched[4] || '';

  const titlePrefix = getTitlePrefix({ fileName, folder });

  return {
    directory: fullFolder,
    fileName,
    files: fullFileName,
    titlePrefix,
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

export const getStories = () => {
  const stories = glob.sync('../src/**/__stories__/*.{stories.tsx,mdx}', {
    cwd: __dirname,
  });
  const storyPaths = buildStories(stories);
  return storyPaths;
};
