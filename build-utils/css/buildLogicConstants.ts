import { glob } from 'glob';

import { LogicConstant } from './class/LogicConstant';

const build = async () => {
  const dir = glob.sync(
    `${process.cwd()}/build-utils/css/constants/logics/*.ts`
  );
  dir.forEach(async path => {
    /** Lopp through each logic file in `logics` folder and generate logic constant file  */
    const filePath = path.replace(`${process.cwd()}/`, '');
    const logic = new LogicConstant();
    await logic.parse({
      filePath,
    });

    await logic.generateConstantFile();
  });
};

build();
