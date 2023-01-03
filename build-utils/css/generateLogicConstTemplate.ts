import { argv } from 'process';

import { LogicConstant } from './class/LogicConstant';

const [, , fileName] = argv;
if (!fileName) {
  throw Error('File name not found');
}

LogicConstant.generateLogicConstantFile(fileName);
