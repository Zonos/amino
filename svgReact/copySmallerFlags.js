const fs = require('fs');
const { countries } = require('./countries');

const getFilesizeInBytes = filename => {
  try {
    const stats = fs.statSync(filename);
    const fileSizeInBytes = stats.size;
    return fileSizeInBytes;
  } catch {
    const mb = 1000000;
    return mb;
  }
};

const copySmallerFlag = code => {
  const firstFile = `./svgReact/aws-flags/${code}.svg`;
  const secondFile = `./svgReact/figma-flags/${code}.svg`;
  const firstFileSize = getFilesizeInBytes(firstFile);
  const secondFileSize = getFilesizeInBytes(secondFile);
  const file = firstFileSize < secondFileSize ? firstFile : secondFile;
  fs.copyFile(file, `./svgReact/smaller-flags/${code}.svg`, err => {
    if (err) {
      console.log('Error Found:', err);
    } else {
      console.log(`${file} smaller`);
    }
  });
};

countries.forEach(copySmallerFlag);
