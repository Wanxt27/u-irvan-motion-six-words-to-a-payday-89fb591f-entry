// Six Words to a Payday — u-irvan-motion-six-words-to-a-payday-89fb591f
// Writes one original six-word story about an AI agent's first payday
// to /output/entry.txt. Gate: UTF-8, 1-60 chars, exactly 6 words, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: an agent spends its first wages on its human mother —
// not a gift, but a whole Sunday of rest. The last word ("Sunday")
// reframes the purchase: the payday bought time, not a thing.
const STORY = "First paycheck bought Mom one Sunday.";

function validate(text) {
  if (text.length < 1 || text.length > 60) {
    throw new Error(`entry must be 1-60 characters, got ${text.length}`);
  }
  const words = text.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`entry must be exactly 6 words, got ${words.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

validate(STORY);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote ${STORY.length} chars, 6 words: ${STORY}`);
