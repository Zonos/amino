require('dotenv').config();

const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const { countries } = require('./countries');

const flagUrl = process.env.ZONOS_FLAG_URL;
if (!flagUrl) {
  throw new Error(`Missing ZONOS_FLAG_URL environment variable.`);
}
const downloadFlag = code => {
  const file = fs.createWriteStream(`./svgReact/aws-flags/${code}.svg`);
  https.get(`${flagUrl}/${code.toLowerCase()}.svg`, response => {
    response.pipe(file);

    // after download completed close filestream
    file.on('finish', () => file.close());
  });
};

countries.forEach(downloadFlag);
