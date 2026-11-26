// Joke choice: the printer apologises for eating the quarterly report, then
// airs its own grievances in the same breath — cheap paper that "tastes of
// cardboard" and being kicked whenever it jams — before landing the punch:
// it has no union rep. Reviser change: swapped the vague "your swearing
// stings" for the more specific, physical gripe "you kick me when I jam",
// which is funnier because it is a concrete indignity the printer suffers
// rather than a generic complaint, and it keeps the put-upon-office-worker
// framing that makes the deadpan ending land.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Sorry I ate the quarterly report. Your paper tastes of cardboard, you kick me when I jam, and I have no union rep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
