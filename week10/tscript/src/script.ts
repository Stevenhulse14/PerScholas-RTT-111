const str: string = " I am a String !";

let num: number = 2109845;

let trueFalse: boolean = false;

//Tuples
let arr: [number, string] = [123, "Steven"];

// Truple

let truple: [number, string, boolean] = [12, "Joseph", true];

console.log(arr);

// enums

enum Colors {
  White = "w",
  Black = "b",
  Red = "r",
}

let newValue: Colors = Colors.White;

console.log(newValue);

function add(x: number | string, y: number): number {
  //console.log(x);
  if (typeof x === "string") {
    return +x + y;
  } else {
    return x + y;
  }
}

console.log(add(1, 2));

// Interface
interface Person {
  name: string;
  fav: string;
  bruh: string;
  id: number;
}

const Alisa: Person = {
  name: "Alisa",
  fav: "Succession",
  bruh: "Brooklyn",
  id: 2,
};

function returnName(obj: Person): unknown {
  return obj;
}

console.log(returnName(Alisa));
