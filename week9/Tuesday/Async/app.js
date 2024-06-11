// const fs = require("fs");
// Call back HELL

//console.log(fs);

//console.log(text);
//settimeout

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {}, 1000);
//   }, 1000);
// }, 1000);

// const text = fs.readFileSync("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//console.log(text);

// Promises

// const newPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// });

//console.log(newPromise);
// demo fs Lib and we want to get content from my text.txt file

// Fs promises

// fs.promises
//   .readFile("./text.txt", "utf-8")
//   .then((res) => console.log(res))
//   .catch((err) => console.log("ERROR", err));

// newPromise.then((res) => console.log(res));

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((data) => data)
//   .catch((err) => console.log(err));

const fetchdata = async () => {
  try {
    // Fetch Data from API
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/2");
    //console.log(response);

    // Turn response in to json readable text
    const { moves } = await response.json();
    console.log(moves);
    // target the html element that I will append elements too
    const moveSet = document.querySelector(".moves");
    console.log(moveSet);

    // loop over a set of data that will create and append an html element
    for (let i = 0; i <= moves.length - 1; i++) {
      const element = document.createElement("h2");
      element.innerHTML = moves[i].move.name;
      //console.log(moves[i].move.name);
      moveSet.appendChild(element);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchdata();

//async function func (){}
