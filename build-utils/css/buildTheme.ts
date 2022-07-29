import { generateAminoConstants } from './utils/generateAminoContants';
import { generateCSS, generateSnapshots } from './utils/generateCSS';

const build = async () => {
  /** Generate style constants file to folder desitnation */
  await generateAminoConstants('src/styles/constants');

  /** Generate theme css file to  */
  await generateCSS('src/styles');

  /** Generate theme snapshots after checked and current theme.css is overwritten */
  await generateSnapshots();
};

build();
