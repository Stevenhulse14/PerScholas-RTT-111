// returning nothing not using a keyword called return
function isAdult(age) {
  if (age >= 18) {
    // We are using console.log() to allow use as humans to see what value we current
    // have or are holding
    console.log(`You are ${age} years old which makes you an adult!`);
    console.log("Your are " + age + " Years old which makes you an adult!");
    return true;
  } else {
    console.log(`You are ${age} years old which makes you a chid`);
    return false;
  }
}
// 2 Purposes
/*
- to supply perameters to our machine/function
- start our machine.
*/
// let value = isAdult;
// console.log(value(17));
// value = "x";
// //                 01234 =---->
// const bodyGuard = "Jason";
// console.log(bodyGuard[0]);
// if (value) {
//   console.log(`You are allowed in the Bar`);
// } else {
//   console.log("YOu can not come in !");
// }

//console.log(value);
// function Smoothie(water, fruit, ice) {
//   console.log(`Mixing fruit ${fruit}`);
//   return water + ice + fruit;
// }

// const smoothieOne = Smoothie("water ", " Bananas ", " Honey");
// const smoothieTwo = Smoothie("apple_juice ", "BlueBerries", " brown_sugar");

// console.log(smoothieOne, "|", smoothieTwo);

function didStudentPass(score) {
  console.log(score);
  if (score >= 70) {
    console.log(" Great Job You Have A score Greater than 70");
    return true;
  } else {
    console.log(" You need to see your Professor !");
    return false;
  }
}

const studentA = 83;
const studentB = 68;

console.log(didStudentPass(studentA));
console.log(didStudentPass(studentB));

function gradeCalculator(score) {
  if (score > 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const Jenn = "101";
const Ismail = "92";
const Halima = "86";

console.log(
  gradeCalculator(Jenn),
  gradeCalculator(Ismail),
  gradeCalculator(Halima)
);
