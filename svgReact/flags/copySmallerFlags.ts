import { copyFile, existsSync, mkdirSync, statSync } from 'fs';
import { countries } from 'svgReact/flags/countries';

const getFilesizeInBytes = (filename: string) => {
  try {
    const stats = statSync(filename);

    const fileSizeInBytes = stats.size || 1000000;
    return fileSizeInBytes;
  } catch {
    const mb = 1000000;
    return mb;
  }
};

export const copySmallerFlags = async ({
  destFolder,
  firstFolder,
  secondFolder,
}: {
  /** @desc Destination folder to store icon  */
  destFolder: string;
  /** @desc First folder of flags to compare */
  firstFolder: string;
  /** @desc Second folder of flags to compare */
  secondFolder: string;
}) => {
  if (!existsSync(firstFolder) || !existsSync(secondFolder)) {
    throw new Error(
      `Either '${firstFolder}' or '${secondFolder}' doesn't exist`,
    );
  }
  return Promise.all(
    countries.map(
      code =>
        new Promise(resolve => {
          const firstFile = `${firstFolder}/${code}.svg`;
          const secondFile = `${secondFolder}/${code}.svg`;
          const firstFileSize = getFilesizeInBytes(firstFile);
          const secondFileSize = getFilesizeInBytes(secondFile);
          const file = firstFileSize < secondFileSize ? firstFile : secondFile;
          if (!existsSync(destFolder)) {
            mkdirSync(destFolder);
          }

          copyFile(file, `${destFolder}/${code}.svg`, (err: unknown) => {
            if (err) {
              console.log('Error Found:', err);
            } else {
              console.log(`${file} smaller`);
            }
            resolve(1);
          });
        }),
    ),
  );
};
