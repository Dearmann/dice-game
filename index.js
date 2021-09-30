let diceBeginningLocation = "images/dice";
let diceEndingLocation = ".png";
let player1Dice = Math.ceil(Math.random() * 6);
let player2Dice = Math.ceil(Math.random() * 6);
let player1DiceLocation = diceBeginningLocation + player1Dice + diceEndingLocation;
let player2DiceLocation = diceBeginningLocation + player2Dice + diceEndingLocation;
let player1Score = 0;
let player2Score = 0;

document.querySelector(".player1 img").setAttribute("src", player1DiceLocation);
document.querySelector(".player2 img").setAttribute("src", player2DiceLocation);

if (player1Dice > player2Dice) {
    player1Score++;
    document.querySelector(".player1 .game-result").classList.toggle("invisible");
}
else if (player1Dice < player2Dice) {
    player2Score++;
    document.querySelector(".player2 .game-result").classList.toggle("invisible");
}
else {
    document.querySelector(".score-section .game-result").classList.toggle("invisible");
}

document.querySelector(".score-player1").textContent = player1Score;
document.querySelector(".score-player2").textContent = player2Score;