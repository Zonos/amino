import { config } from 'dotenv';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import https from 'https'; // or 'https' for https:// URLs

import { countries } from './countries';

config();

export const downloadFlagsAWS = ({
  destFolder,
}: {
  /** @desc Destination folder for downloaded flags from AWS */
  destFolder: string;
}) => {
  const flagUrl = process.env.ZONOS_FLAG_URL;
  if (!flagUrl) {
    throw new Error(`Missing ZONOS_FLAG_URL environment variable.`);
  }

  return Promise.all(
    countries.map(
      code =>
        new Promise(resolve => {
          if (!existsSync(destFolder)) {
            mkdirSync(destFolder);
          }
          const file = createWriteStream(`${destFolder}/${code}.svg`);
          https.get(`${flagUrl}/${code.toLowerCase()}.svg`, response => {
            response.pipe(file);
            // after download completed close filestream
            file.on('finish', () => {
              file.close();
              resolve(1);
            });
          });
        })
    )
  );
};
