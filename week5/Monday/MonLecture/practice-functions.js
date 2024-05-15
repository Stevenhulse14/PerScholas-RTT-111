// function addAndMultiply(num1, num2) {
//   return (num1 + num2) * 5;
//   console.log("hello");
//   //5 + 10
//   //15 * 5
//   //75
// }

// console.log(addAndMultiply(5, 10));


if(/*condition goes in here */) {
    //statements goes in here
}
// ashley, abba,
function attendance(students) {
  //write code here
  for (let i = 0; i < students.length; i++) {
    if (
      students[i] === "ashley" ||
      students[i] === "abba" ||
      students[i] === "ron" ||
      students[i] === "fallon"
    ) {
      console.log(`welcome to class ${students[i]}`);
    } else {
      console.log(`you dont belong here`);
    }
  }

  return "class in session";
}

console.log(attendance(["ashley", "abba", "ron", "fallon", "random"]));


for(/*start point; condition; direction*/) {
    
}

const classStudents = ["ashley", "abba", "ron", "fallon", "random"];
let i = 0;
//start
while(/*condition*/ i < classStudents.length) {

    //write statements
    if (
        classStudents[i] === "ashley" ||
        classStudents[i] === "abba" ||
        classStudents[i] === "ron" ||
        classStudents[i] === "fallon"
      ) {
        console.log(`welcome to class ${classStudents[i]}`);
      } else {
        console.log(`you dont belong here`);
      }

    //direction
    i++
}
