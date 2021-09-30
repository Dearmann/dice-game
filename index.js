// Score setup
let player1Score = 0;
let player2Score = 0;

document.querySelector("button").onclick = function () {
    // Random number <1,6>
    let player1Dice = Math.ceil(Math.random() * 6);
    let player2Dice = Math.ceil(Math.random() * 6);
    // Dice 1-6 image selection
    document.querySelector(".player1 img").setAttribute("src", `images/dice${player1Dice}.png`);
    document.querySelector(".player2 img").setAttribute("src", `images/dice${player2Dice}.png`);
    // Reset game result message
    document.querySelector(".player1 .game-result").classList.add("invisible");
    document.querySelector(".player2 .game-result").classList.add("invisible");
    document.querySelector(".score-section .game-result").classList.add("invisible");
    // Check who won
    if (player1Dice > player2Dice) {
        player1Score++;
        document.querySelector(".player1 .game-result").classList.remove("invisible");
    }
    else if (player1Dice < player2Dice) {
        player2Score++;
        document.querySelector(".player2 .game-result").classList.remove("invisible");
    }
    else {
        document.querySelector(".score-section .game-result").classList.remove("invisible");
    }
    // Change score display
    document.querySelector(".score-player1").textContent = player1Score;
    document.querySelector(".score-player2").textContent = player2Score;
};