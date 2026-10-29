import fs from 'fs';
import { createRequire } from 'module';
import path from 'path';

/**
 * ESM-only dependencies we have chosen to bundle into the CJS dist. A bundled
 * copy is a separate instance from the consumer's own, so only stateless
 * packages with no runtime dependencies of their own belong here: the bundle
 * resolves the package itself, and its own bare imports would stay external.
 */
const ALLOWED_BUNDLED = ['uuid'];

/** Resolution errors that mean the package has no `require` entry */
const NO_REQUIRE_ENTRY = new Set([
  'ERR_PACKAGE_PATH_NOT_EXPORTED',
  'ERR_REQUIRE_ESM',
]);

const requireFromRoot = createRequire(
  path.resolve(__dirname, '../package.json'),
);

/**
 * Check whether a CJS `require(dependency)` lands on an ES module, i.e. the
 * package ships no CommonJS build (uuid 12+ for example)
 * @param dependency package name
 * @returns boolean
 */
export const isEsmOnly = (dependency: string): boolean => {
  let entry: string;
  try {
    entry = requireFromRoot.resolve(dependency);
  } catch (error) {
    if (NO_REQUIRE_ENTRY.has((error as NodeJS.ErrnoException).code ?? '')) {
      return true;
    }
    throw error;
  }
  if (entry.endsWith('.mjs')) {
    return true;
  }
  if (entry.endsWith('.cjs')) {
    return false;
  }
  // `.js` follows the `type` of the nearest package.json
  for (let dir = path.dirname(entry); ; dir = path.dirname(dir)) {
    const packageJsonPath = path.join(dir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const { type } = JSON.parse(
        fs.readFileSync(packageJsonPath, 'utf-8'),
      ) as {
        type?: string;
      };
      return type === 'module';
    }
    if (dir === path.dirname(dir)) {
      return false;
    }
  }
};

/**
 * Dependencies that ship only ESM, which the build bundles into dist because
 * dist is CJS and `require()` of an ES module only works on Node 22.12+ and
 * not in CJS Jest. Throws for an ESM-only dependency missing from
 * ALLOWED_BUNDLED, so each newly bundled package is a deliberate change.
 * @param dependencies package.json `dependencies`
 * @returns package names
 */
export const getBundledDependencies = (
  dependencies: Record<string, string>,
): string[] => {
  const bundled = Object.keys(dependencies).filter(isEsmOnly);
  const unexpected = bundled.filter(name => !ALLOWED_BUNDLED.includes(name));
  if (unexpected.length) {
    throw new Error(
      `ESM-only dependencies not in ALLOWED_BUNDLED (build-utils/bundledDependencies.ts): ${unexpected.join(', ')}`,
    );
  }
  return bundled;
};
