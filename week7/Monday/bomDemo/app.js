const alertBtn = document.getElementById("alertBtn");
const focusBtn = document.getElementById("focusBtn");
const promptBtn = document.getElementById("promptBtn");
const confirmBtn = document.getElementById("confirmBtn");

console.log(confirmBtn);
// Demo of Alert

alertBtn.addEventListener("click", (event) => {
  //console.log(event, "event");
  alert("AHHHHH HELPPPPP MEEEEE!!!!");
});

// Demo of prompt

promptBtn.addEventListener("click", (event) => {
  const response = prompt("What is your First name ?");

  alert(`Hello ${response}`);
});

// Demo of confirm
confirmBtn.addEventListener("click", (event) => {
  const userConfirm = confirm(" Do you agree with the terms of service ?");

  if (userConfirm) {
    alert("Thank you for agreeing !");
  } else {
    alert(" Thank you for ignoring me ! ");
  }
});

// Demo Focus
focusBtn.addEventListener("click", () => {
  document.getElementById("myInput").focus();
});
