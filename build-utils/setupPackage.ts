import {
  getBundledDependencies,
  readDependencyPackageJson,
} from 'build-utils/bundledDependencies';
import fs from 'fs';
import path from 'path';
// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
  const source = fs
    .readFileSync(path.resolve(`${path.dirname('')}/package.json`))
    .toString('utf-8');
  const sourceObj = JSON.parse(source) as Record<string, unknown>;
  sourceObj.scripts = {};

  sourceObj.devDependencies = {};

  // bundled into dist, so consumers would install a copy that never runs;
  // `bundledPackages` records the shipped versions for auditing
  const dependencies = sourceObj.dependencies as Record<string, string>;
  const bundledPackages: Record<string, string> = {};
  getBundledDependencies(dependencies).forEach(name => {
    bundledPackages[name] = readDependencyPackageJson(name).version;
    delete dependencies[name];
  });
  if (Object.keys(bundledPackages).length) {
    sourceObj.bundledPackages = bundledPackages;
  }

  sourceObj.types = 'all.d.ts';
  fs.writeFileSync(
    `./dist/package.json`,
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'),
  );

  fs.copyFileSync(
    path.resolve(`${path.dirname('')}/.npmignore`),
    path.resolve(`${path.dirname('')}/dist/.npmignore`),
  );
}

main();
