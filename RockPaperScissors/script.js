const choices = ['rock', 'paper', 'scissors'];
const btnRock = document.querySelector(".rock")
const btnPap = document.querySelector(".paper")
const btnSci = document.querySelector(".scissors")
const score = document.querySelector(".score")
score.textContent = `Score: You 0 - Computer 0`

btnRock.addEventListener("click", () => playGame("rock"));
btnPap.addEventListener("click", () => playGame("paper"));
btnSci.addEventListener("click", () => playGame("scissors"));

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
        return 0;
    } else if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
               (humanSelection === 'paper' && computerSelection === 'rock') ||
               (humanSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        return -1;
    }
    // console.log(`Human Score: ${humanScore}`);
    // console.log(`Computer Score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === 1) {
        humanScore++;
    } else if (result === -1) {
        computerScore++;
    }
    round++;
    score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`
    if (humanScore === 5 || computerScore === 5) {
        btnRock.disabled = true;
        btnPap.disabled = true;
        btnSci.disabled = true;
        
        let para = document.createElement("p")
        if (humanScore > computerScore) {
            para.textContent = "You win the game!"
        } else {
            para.textContent = "Computer wins the game!"
        }
        score.appendChild(para)
    }
}







