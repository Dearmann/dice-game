// Random number <1,6>
let player1Dice = Math.ceil(Math.random() * 6);
let player2Dice = Math.ceil(Math.random() * 6);
// Score setup
let player1Score = 0;
let player2Score = 0;
// Dice 1-6 image selection
document.querySelector(".player1 img").setAttribute("src", `images/dice${player1Dice}.png`);
document.querySelector(".player2 img").setAttribute("src", `images/dice${player2Dice}.png`);

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