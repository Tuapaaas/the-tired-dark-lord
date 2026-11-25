// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to entry.txt in the output directory.
// The monologue is exactly 100 words and 504 characters (gate: 1-600 chars).
// The tiredness lives in the rhythm, the pauses and the deflections:
// the stammered gate, the forgotten step, the raven that ate the plan.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Right. The eclipse. My spies counted the stars twice, my generals have " +
  "sharpened every axe, and the gate — ready. I think. The plan is simple. " +
  "At dusk I raise the dead, I take the crown, I burn the treaty, I — hmm. " +
  "What comes after burn? I wrote it down somewhere. The raven ate the list. " +
  "Again. Sit. Heroes, listen: kneel now and I shall spare you the " +
  "speech. I have given it four hundred times. The end is the same. You " +
  "lose. I... go on. Do your worst. I will be here. I always am. Waiting. " +
  "Mostly waiting.";

const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
if (words !== 100) throw new Error(`expected 100 words, got ${words}`);
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`expected 1-600 chars, got ${MONOLOGUE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
console.log(`wrote entry.txt: ${words} words, ${MONOLOGUE.length} chars`);
