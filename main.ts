// Joke choice: the printer apologises for eating the quarterly report, then
// airs its own grievances in the same breath — cheap paper that "tastes of
// cardboard" and the office's swearing — before landing the punch: it has no
// union rep. The turn treats the printer as a put-upon office worker rather
// than a broken machine, so the apology is real and the last clause is the
// deadpan complaint that reframes the whole note.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Sorry I ate the quarterly report. Your paper tastes of cardboard, your swearing stings, and I have no union rep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
