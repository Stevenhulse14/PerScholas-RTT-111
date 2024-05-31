im;
console.log(x);
const gameboard = document.querySelector(".gameboard");
let count = 0;
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

gameboard.addEventListener("click", (event) => {
  let cord = event.target.id.split("");
  if (count % 2 === 0 && event.target.innerText === "") {
    event.target.innerText = "X";
    board[+cord[0]][+cord[1]] = "X";

    console.log(event, cord, board);
  } else if (event.target.innerText === "") {
    event.target.innerText = "O";
    board[+cord[0]][+cord[1]] = "O";

    console.log(event, cord, board);
  }
  count++;
});

// Reset , Counter , Players names, Transpose, Dia, Virt, Horz
