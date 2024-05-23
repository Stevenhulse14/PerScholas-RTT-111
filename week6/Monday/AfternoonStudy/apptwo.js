// Nested array of Movies

let favShows = [
  ["Punisher", "Invisible", "Spider-man", "Triple X"],
  ["blacklist", "flash", "suits", "Avatar"],
  ["9-1-1", "T E A WOO", "Will Trent", "L Lawyer"],
  ["Fire Country", "BMF", "All American", "Mary & George"],
  ["Spongebob", "Family Guy", "American Guy", "Simpsons"],
];
//Accessing an array

console.log(favShows[0]);
console.log(favShows[0][0]);
console.log(favShows[0][1]);
console.log(favShows[0][2]);
console.log(favShows[2][2]);
console.log(favShows[3][1]);
console.log(favShows[1][3]);
console.log(favShows[1][1]);
console.log(favShows[2][1]);
console.log(favShows[4][2]);
//console.log(favShows[10][10]);
favShows.push("1", "2", "3", 4);
console.log(favShows);
console.log(["steven"].push());
