const choices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let getHumanChoice = () => {
    const humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!choices.includes(humanChoice)) {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
    return humanChoice;
}


// console.log(`You chose: ${humanSelection}`);
// console.log(`Computer chose: ${computerSelection}`);


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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
        round++;
        console.log(`Round ${round} complete.`);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();




