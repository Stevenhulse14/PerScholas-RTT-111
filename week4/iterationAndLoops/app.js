// Declared a Variable
let myLine = "GJJA";

/**
 * Initialize , Condition , Increment
 *
 */
for (let i = 0; i <= 3; i++) {
  const newCharacter = myLine[i];
  console.log(newCharacter);
}

/**
 * Create a for loop and I want you to out put "HI" 7 times
 *
 *
 */

function loopTill(count, name) {
  for (let i = 0; i < count; i++) {
    console.log(`HI ${name}`);
  }
}

loopTill(25, "Tati");

loopTill(2, "Ron");
