/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

const diffDir = 'css-compare-results';
const files = fs
  .readdirSync(diffDir)
  .filter(f => f.endsWith('.diff.txt'))
  .sort();

const propCounter = new Map<string, number>();
const patternCounter = new Map<string, number>();

for (const file of files) {
  const content = fs.readFileSync(path.join(diffDir, file), 'utf-8');
  const regex = /\[([^\]]+)\]: (.+?) → (.+?)$/gm;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(content)) !== null) {
    const prop = m[1]!;
    const fromVal = m[2]!.slice(0, 50);
    const toVal = m[3]!.slice(0, 50);
    propCounter.set(prop, (propCounter.get(prop) ?? 0) + 1);
    const key = `${prop}: ${fromVal} → ${toVal}`;
    patternCounter.set(key, (patternCounter.get(key) ?? 0) + 1);
  }
}

console.log('=== Top 30 Property Diffs ===');
const sortedProps = [...propCounter.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30);
for (const [prop, count] of sortedProps) {
  console.log(`  ${String(count).padStart(5)}x  [${prop}]`);
}

console.log('\n=== Top 50 Diff Patterns ===');
const sortedPatterns = [...patternCounter.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 50);
for (const [pattern, count] of sortedPatterns) {
  console.log(`  ${String(count).padStart(5)}x  [${pattern}]`);
}
