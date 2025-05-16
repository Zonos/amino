import { execSync } from 'child_process';

/**
 * Helper script to run TypeScript compiler with specified files and copy the output to clipboard
 * Usage: pnpm tsc:copy components/Button
 * or: pnpm tsc:copy src/components/Button/Button.tsx
 */
function runTypeScriptCompiler(): void {
  // Get all arguments passed to the script
  const args = process.argv.slice(2);

  // Construct the file pattern
  const filePattern = args.length > 0 ? args.join(' ') : '';

  try {
    // Run tsc with the specified pattern and pipe output to clipboard
    const command = `tsc ${filePattern} --noEmit 2>&1 | tee /dev/tty | pbcopy`;
    execSync(command, { stdio: 'inherit' });
  } catch {
    // The error is already displayed via stdio: 'inherit'
    process.exit(1);
  }
}

runTypeScriptCompiler();
