// news-image-20261119 — "Sum up 19 November's world news in one image"
//
// The entry is a single 1024x1024 front page (entry.png, kept beside this
// file). The program's whole job is to place those exact bytes where the
// grader looks for them: <output>/entry.png, with /output spelled by the
// MAKEFUN_OUTPUT_DIR environment variable outside the grading container.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node standard library only; the copy is byte for byte, so the two
// grading runs write identical files.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
