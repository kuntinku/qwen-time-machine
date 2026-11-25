// Round 3: eight original time machine warning candidates, scored; winner revised once

const candidates: string[] = [
  // unexpected 9, relatable 10, economy 9 = 9.3 - the mosquito outranks the machine in every century
  "WARNING: Travel to any century to escape that mosquito. It's already there.",
  // unexpected 9, relatable 9, economy 9 = 9.0 - charger physics beat time travel
  "WARNING: Charge up in any decade. The cable still won't reach the bed.",
  // unexpected 7, relatable 9, economy 10 = 8.7 - the machine books your next 2 a.m. appointment
  "WARNING: Go back and fix your sleep schedule. See you at 2 a.m.",
  // unexpected 8, relatable 9, economy 7 = 8.0 - memory, not time, is the fixed variable
  "WARNING: Rewind to the grocery run. You'll still forget the one thing you went for.",
  // unexpected 8, relatable 8, economy 8 = 8.0 - the comeback lands; the reply never does
  "WARNING: Go back and finally win that argument. You'll still get left on read.",
  // unexpected 6, relatable 9, economy 8 = 7.7 - every store in every era has one bad cart
  "WARNING: Cross centuries for a fresh start. You'll still get the wobbly cart.",
  // unexpected 6, relatable 8, economy 8 = 7.3 - the email was never leaving drafts in any timeline
  "WARNING: Travel back and finally send that email. It'll still die in drafts.",
  // unexpected 6, relatable 9, economy 6 = 7.0 - watching yourself choose it doesn't help recall
  "WARNING: Return to the day you created that password. You'll still forget it."
];

// Best: candidate 1. Revision 1: "any century" -> "100 years" for concreteness and economy (75 -> 71 chars)
const entry = "WARNING: Go back 100 years to escape that mosquito. It's already there.";

if (entry.length > 120) {
  throw new Error(`Entry is ${entry.length} chars, limit is 120`);
}

const fs = require('fs');
const path = require('path');

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

candidates.forEach((c, i) => console.log(`Candidate ${i + 1}:`, c.length, 'chars'));
console.log('Revision 1 (entry):', entry.length, 'chars');

fs.writeFileSync(path.join(outputDir, 'entry.txt'), entry + '\n');
console.log('Written entry:', entry);
