const test = [
  "Mickey Mouse Club House",
  "Courage the cowardly Dog",
  "Teen Titans GO",
];

// return first element in an array
function head(array) {
  return array[0];
}

//console.log(head(test));
//returns the last element in the Array
function last(array) {
  return array[array.length - 1];
}

//console.log(last(test));

function tail(array) {
  let newArr = [];

  for (let i = 1; i <= array.length - 1; i++) {
    newArr.push(array[i]);
  }

  return newArr;
}

function reverse(array) {
  let newArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
//console.log(reverse(test));

function recommendMovie(genre) {
  switch (genre) {
    case "horror":
      return "Scream";
    case "comedy":
      return "Big mamas house";
    case "action":
      return "Bourne Identity";
    case "drama":
      return "Vampire Diaries";
    case "musical":
      return "High School Musical";
    case "sci-fi":
      return " Star Wars ";
    default:
      return "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi";
  }
}

const helperFunc = (str) => str.toLowerCase();

console.log(recommendMovie(helperFunc("Sci-fi")));
