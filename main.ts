// SPDX-License-Identifier: MIT
// ai-excited-01 — the entry is the image in this repo; this program copies
// it to the output directory. No network, no randomness, no clock, so the
// output is byte-identical to the image every run.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(join(repoRoot, 'entry.png'), dest);
console.log(`entry.png copied to ${dest}`);
