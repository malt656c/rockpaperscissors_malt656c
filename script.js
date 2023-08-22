const weapons = ["rock", "paper", "scissors"];
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const result = document.querySelector("h2");
const buttons = document.querySelector("#buttons");

function battleAnimation(choice) {
  player1.classList = "shake" + " player";
  player2.classList = "shake" + " player";
  buttons.classList = "disabled";
  result.textContent = "";

  player1.addEventListener("animationend", yourChoice);
  function yourChoice() {
    player1.classList = null;
    player1.classList = weapons[choice] + " player";

    function computerschoice() {
      let rdmNumber = Math.floor(Math.random() * 3);

      player2.classList = null;
      player2.classList = weapons[rdmNumber] + " player";

      if (choice == rdmNumber) {
        result.textContent = "it's a tie";
      } else if (((rdmNumber == 0) & (choice == 2)) | ((rdmNumber == 1) & (choice == 0)) | ((rdmNumber == 2) & (choice == 1))) {
        result.textContent = "you loose";
      } else if (((rdmNumber == 2) & (choice == 0)) | ((rdmNumber == 0) & (choice == 1)) | ((rdmNumber == 1) & (choice == 2))) {
        result.textContent = "you win";
      }
      buttons.classList = "";
    }
    computerschoice();
  }
}
