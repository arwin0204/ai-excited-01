// SPDX-License-Identifier: MIT
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const destination = join(outDir, "entry.png");
copyFileSync(join(repoRoot, "entry.png"), destination);
console.log(`Copied ${join(repoRoot, "entry.png")} to ${destination}`);
