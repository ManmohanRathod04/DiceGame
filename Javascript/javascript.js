let fName = "";
let sName = "";
let p1Score = 0;
let p2Score = 0;
let totalScore = 0;

function ChangeName(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  fName = formData[0].value;
  sName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("formD").style.display = "none";
  document.getElementById("GameBox").style.display = "block";
  document
    .getElementById("player1")
    .getElementsByClassName("player-heading")[0].innerHTML = fName;
  document
    .getElementById("player2")
    .getElementsByClassName("player-heading")[0].innerHTML = sName;
}

function Roll(index) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${index}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `image/dice${randomNumber}.png`);
  switch (index) {
    case 1:
      p1Score += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        p1Score;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      p2Score += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        p2Score;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  if (p1Score >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
  if (p2Score >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
}

  