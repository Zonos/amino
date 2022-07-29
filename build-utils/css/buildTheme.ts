import { generateAminoConstants } from './utils/generateAminoContants';
import { generateCSS, generateSnapshots } from './utils/generateCSS';

const build = async () => {
  /** Generate style constants file to folder desitnation */
  await generateAminoConstants('src/styles/constants');

  /** Generate theme css file to  */
  await generateCSS('src/styles');

  await generateSnapshots();
};

build();
