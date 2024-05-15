// setInterval(() => {
//   console.log("Steven ");
// }, 1000);
const profileCard = document.querySelector(".profile-card");
const btn = document.querySelector(".btn");
// logout the object behind an html element.
console.dir(profileCard);
console.log(btn);
let count = 0;

// setInterval(() => {
//   console.log(count);
//   if (count % 2 === 0) {
//     profileCard.style.background = "black";
//   } else {
//     profileCard.style.background = "white";
//   }
//   count++;
// }, 2000);

function onClick() {
  //   if (count % 2 === 0) {
  //     profileCard.style.background = "green";
  //   } else {
  //     profileCard.style.background = "red";
  //   }
  //   count++;
  //(event) => {
  //   event.stopPropagation();
  //   event.target.innerHTML = " BOOO YAHHH ";
  //   console.log(event);

  // }

  const colors = ["brown", "magenta", "cornflowerblue", "lime"];
  let choice = colors[Math.floor(Math.random() * colors.length)];
  profileCard.style.background = choice;
}

function spin() {
  let degree = 0;
  setInterval(() => {
    if (degree === 360) degree = 0;
    degree = degree + 20;
    console.log(degree);
    profileCard.style.transform = `rotateZ(${degree}deg)`;
  }, 20);
}

profileCard.addEventListener("click", onClick);
btn.addEventListener("click", spin);
