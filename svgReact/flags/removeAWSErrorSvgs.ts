import { readdirSync, readFileSync, writeFileSync } from 'fs';

export const removeAWSErrorSvgs = ({
  folderPath,
}: {
  /** @desc aws flag folder */
  folderPath: string;
}) => {
  const folder = readdirSync(folderPath);
  folder.forEach(flag => {
    const imgContent = readFileSync(`${folderPath}/${flag}`, {
      encoding: 'utf-8',
    });

    if (!/^<svg/.test(imgContent)) {
      /** @desc empty the file if it's not in svg format */
      writeFileSync(`${folderPath}/${flag}`, '');
    }
  });
};
