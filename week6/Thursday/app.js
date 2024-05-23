let arr = [
  ["ramen", "sushi", "pho"],
  ["rasta pasta", "ox tail", "stew chicken"],
  ["pizza", "pasta", "curry chicken"],
];

/* 
    Objective: group dishes by letters s and p, if not throw in others
    input: arr of arrays with strings [[str]]
    output: array of objects [{}] 

    cases:
    input = [['dumplings' ], ['oxtail'], ['pho']]
    output = [
        {
            others: ['dumplings', 'oxtail']
        },
        {
            p: ['pho']
        }
    ]
    case:
    input: null / [] 
    output:[]

    plan:

    initialize a variable to store all sorted dishes
    initalize p object, sobject and otherObject
    iterate through dishes 
        iterate through each dish
            check if letter of dish starts with p
                add it to p object
            check if letter starts with s
                add it to s object
            else 
                throw in other object
    
    add objects to results
*/

function orderDishes(dishes) {
  if (!dishes.length) return [];
  const sortedDishes = [];
  const dishesWithP = {
    startsWithP: [],
  };
  const dishesWithS = {
    startsWithS: [],
  };
  const otherDishes = {
    others: [],
  };

  for (let i = 0; i < dishes.length; i++) {
    //iterate y axis
    for (let j = 0; j < dishes[i].length; j++) {
      //iterate x axis
      //get word, then get letter, check if it equals letter we are looking for =
      const firstLetter = dishes[i][j][0];
      if (firstLetter.toUpperCase() === "S") {
        dishesWithS.startsWithS.push(dishes[i][j]);
      } else if (firstLetter.toUpperCase() === "P") {
        dishesWithP.startsWithP.push(dishes[i][j]);
      } else {
        otherDishes.others.push(dishes[i][j]);
      }
    }
  }

  sortedDishes.push(dishesWithS, dishesWithP, otherDishes);
  return sortedDishes;
}

let sorted = orderDishes(arr);
// console.log(sorted[0]["startsWithS"]);

function sortDishes(dishes) {
  const dishCategories = {};

  for (let row = 0; row < dishes.length; row++) {
    for (let col = 0; col < dishes[row].length; col++) {
      const firstLetter = dishes[row][col][0];
      if (firstLetter in dishCategories) {
        //is the first letter a KEY in my object
        // if it is add value to key
        dishCategories[firstLetter].push(dishes[row][col]);
      } else {
        //create a key with the first letter and add the dish to that key
        dishCategories[firstLetter] = [dishes[row][col]];
      }
    }
  }

  return dishCategories;
}

const allDishes = sortDishes(arr);
console.log(allDishes);
