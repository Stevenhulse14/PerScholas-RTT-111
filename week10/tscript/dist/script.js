"use strict";
const str = " I am a String !";
let num = 2109845;
let trueFalse = false;
let arr = [123, "Steven"];
let truple = [12, "Joseph", true];
console.log(arr);
var Colors;
(function (Colors) {
    Colors["White"] = "w";
    Colors["Black"] = "b";
    Colors["Red"] = "r";
})(Colors || (Colors = {}));
let newValue = Colors.White;
console.log(newValue);
function add(x, y) {
    if (typeof x === "string") {
        return +x + y;
    }
    else {
        return x + y;
    }
}
console.log(add(1, 2));
const Alisa = {
    name: "Alisa",
    fav: "Succession",
    bruh: "Brooklyn",
    id: 2,
};
function returnName(obj) {
    return obj;
}
console.log(returnName(Alisa));
