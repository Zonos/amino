/**
 * Requires every built file in dist/ the way a CommonJS consumer that can't
 * load ESM would (Jest without transformIgnorePatterns, older Node), so an
 * ESM-only dependency that escapes the bundling in build-utils/build.ts fails
 * the build instead of the consumers' tests.
 *
 * Runs under plain node, not tsx: tsx's loader converts ESM to CJS on the fly
 * and would hide the failure this check exists to catch.
 *
 * Usage:
 *   node --no-experimental-require-module scripts/check-dist.mjs
 */

/* eslint-disable no-console */
import fs from 'fs';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const distDir = path.resolve(import.meta.dirname, '../dist');

const listJsFiles = dir =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listJsFiles(entryPath);
    return entry.name.endsWith('.js') ? [entryPath] : [];
  });

const files = listJsFiles(distDir);
const failures = files.flatMap(file => {
  try {
    require(file);
    return [];
  } catch (error) {
    return [
      `${path.relative(distDir, file)}: ${error.code ?? ''} ${error.message}`,
    ];
  }
});

// A lazy `import()` compiles to a deferred require() that loading the file
// never runs, so also require every package a dist file names
const bareRequire = /require\(['"]([^'"./][^'"]*)['"]\)/g;
const packages = new Set(
  files.flatMap(file =>
    [...fs.readFileSync(file, 'utf-8').matchAll(bareRequire)].map(
      ([, specifier]) => specifier,
    ),
  ),
);
packages.forEach(specifier => {
  try {
    require(specifier);
  } catch (error) {
    failures.push(
      `require("${specifier}"): ${error.code ?? ''} ${error.message}`,
    );
  }
});

if (failures.length) {
  console.error(
    `${failures.length} of ${files.length} dist files and ${packages.size} packages failed to require:`,
  );
  failures.forEach(failure => console.error(`  ${failure}`));
  process.exit(1);
}
console.log(
  `All ${files.length} dist files and ${packages.size} packages they name load with require()`,
);
