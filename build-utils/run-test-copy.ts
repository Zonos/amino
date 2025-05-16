import { execSync } from 'child_process';

/**
 * Helper script to run a specific test file and copy the output to clipboard
 * Usage: pnpm test:copy components/Button
 * or: pnpm test:copy src/components/Button/__tests__/Button.test.tsx
 */
function runTest(): void {
  // Get all arguments passed to the script
  const args = process.argv.slice(2);

  // Construct the test pattern
  const testPattern = args.length > 0 ? args.join(' ') : '';

  try {
    // Run vitest with the specified pattern and pipe output to clipboard
    const command = `vitest run ${testPattern} 2>&1 | tee /dev/tty | pbcopy`;
    execSync(command, { stdio: 'inherit' });
  } catch {
    // The error is already displayed via stdio: 'inherit'
    process.exit(1);
  }
}

runTest();
