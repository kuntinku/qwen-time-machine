// Round 3: eight original time machine warning candidates, scored

const candidates: string[] = [
  // unexpected 7, relatable 9, economy 9 = 8.3 - the alarm outranks every century
  "WARNING: Travel to any century to dodge the morning alarm. Still goes off at 7 AM.",
  // unexpected 8, relatable 8, economy 8 = 8.0 - the date that got away
  "WARNING: Jump back to skip that awkward first date. They still friend-zoned you.",
  // unexpected 7, relatable 9, economy 10 = 8.7 - the sock that got away
  "WARNING: Skip forward to avoid the laundry pile. Still lose one sock in the wash.",
  // unexpected 6, relatable 8, economy 9 = 7.7 - the toy box rule
  "WARNING: Return to kindergarten to share toys. Still had to take turns.",
  // unexpected 7, relatable 9, economy 8 = 8.0 - the parking spot that got away
  "WARNING: Leap ahead to snag that close spot. Still circling for the tenth time.",
  // unexpected 6, relatable 7, economy 8 = 7.0 - the crypto that got away
  "WARNING: Go back to invest in that hot stock. Still missed the sell point.",
  // unexpected 8, relatable 7, economy 9 = 8.0 - the whodunnit across time
  "WARNING: Travel to the future to see the ending. Still don't know who dunnit.",
  // unexpected 7, relatable 8, economy 8 = 7.7 - the queue that got away
  "WARNING: Jump back to pick the fastest line. Still the slowest of the bunch."
];

// Top candidate: #3, tightened for punchiness
const entry = "WARNING: Skip forward to avoid the laundry pile. Still lose one sock in the wash.";

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
