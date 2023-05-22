import { existsSync, readFileSync } from 'fs';
import { glob } from 'glob';

test('Make sure all generated color constants matched previous snapshot', () => {
  const rootFolder = process.cwd();
  const generatedColorFolder = `${rootFolder}/build-utils/css/constants/theme`;

  if (existsSync(generatedColorFolder)) {
    const generatedColors = glob.sync('*.ts', {
      cwd: generatedColorFolder,
    });

    generatedColors.forEach(color => {
      const fileContent = readFileSync(`${generatedColorFolder}/${color}`, {
        encoding: 'utf-8',
      });
      expect(fileContent).toMatchSnapshot(color);
    });
  }
});
