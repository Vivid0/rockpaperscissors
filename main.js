
let rpsChoices = [`rock`, `paper`, `scissors`];

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let newGame = document.querySelector('#newGame');
let playerInput;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerInput = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    if (computerInput == `rock`) {
        document.getElementById("computerSelection").src = "img/rock.png";
        document.getElementById("computerSelection").alt = "Rock";
    } else if (computerInput == `paper`) {
        document.getElementById("computerSelection").src = "img/paper.png";
        document.getElementById("computerSelection").alt = "Paper";
    } else {
        document.getElementById("computerSelection").src = "img/scissors.png";
        document.getElementById("computerSelection").alt = "Scissors";
    }
    return computerInput;
}

function gameOver() {
    let buttons = document.querySelectorAll("#rock, #paper, #scissors");
    let reset = document.querySelector("#newGame");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.add(`hide`);
    }
    reset.classList.remove(`hide`);
}

function resetGame() {
    let buttons = document.querySelectorAll("#rock, #paper, #scissors");
    let reset = document.querySelector("#newGame");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(`hide`);
    }
    reset.classList.add(`hide`);
    //reset scores and update to DOM
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("comparator").innerHTML = "";
    document.getElementById("playerSelection").src = "";
    document.getElementById("playerSelection").alt = "";
    document.getElementById("computerSelection").src = "";
    document.getElementById("computerSelection").alt = "";
    document.getElementById("computerWin").innerHTML = "";
    document.getElementById("playerWin").innerHTML = "";

}

function playRound(computerSelection, playerSelection) {
    //Checks who won the round: computer or player
    if (computerSelection == playerSelection) {
        // result = `tie`;
        document.getElementById("comparator").innerHTML = "=";
        console.log(`Player: ` + playerSelection);
        console.log(`Computer: ` + computerSelection);
        console.log(`It's a tie! Replay the round.`);
        // return result;
    } else if (
        (computerSelection == `rock` && playerSelection == `scissors`) ||
        (computerSelection == `scissors` && playerSelection == `paper`) ||
        (computerSelection == `paper` && playerSelection == `rock`)
    ) {
        computerSelection = computerSelection.substr(0, 1).toUpperCase() + computerSelection.substr(1);
        // result = `computer`;
        document.getElementById("comparator").innerHTML = "<";
        console.log(`Player: ` + playerSelection);
        console.log(`Computer: ` + computerSelection.toLowerCase());
        console.log(`You lost this round.  ` + computerSelection + ` beats ` + playerSelection + `.`);
        computerScore++;
        // return result;
    } else {
        playerSelection = playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1);
        // result = `player`;
        document.getElementById("comparator").innerHTML = ">";
        console.log(`Player: ` + playerSelection.toLowerCase());
        console.log(`Computer: ` + computerSelection);
        console.log(`You won this round.  ` + playerSelection + ` beats ` + computerSelection + `.`);
        playerScore++;
        // return result;
    }

    //Checks if any score is 5, if yes, the game ends and declares a winner
    if (computerScore == 5 && playerScore == 5) {
        console.log(`Game Over! Tie game.`);
        gameOver();
    } else if (computerScore == 5) {
        document.getElementById("computerWin").innerHTML = "⭐️";
        console.log(`You lost!  Computer wins!`)
        console.log(`Computer Score: ` + computerScore);
        console.log(`Player Score: ` + playerScore);
        gameOver();
    } else if (playerScore == 5) {
        document.getElementById("playerWin").innerHTML = "⭐️";
        console.log(`You won!`)
        console.log(`Computer Score: ` + computerScore);
        console.log(`Player Score: ` + playerScore);
        gameOver()
    } else {
        console.log(`Play next round.`);
    }

    //publish updated scores to the DOM
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

rock.addEventListener('click', () => {
    playerInput = `rock`;
    playRound(computerPlay(), playerInput);
    document.getElementById("playerSelection").src = "img/rock.png";
    document.getElementById("playerSelection").alt = "Rock";
});

paper.addEventListener('click', () => {
    playerInput = `paper`;
    playRound(computerPlay(), playerInput);
    document.getElementById("playerSelection").src = "img/paper.png";
    document.getElementById("playerSelection").alt = "Paper";
});

scissors.addEventListener('click', () => {
    playerInput = `scissors`;
    playRound(computerPlay(), playerInput);
    document.getElementById("playerSelection").src = "img/scissors.png";
    document.getElementById("playerSelection").alt = "Scissors";
});

newGame.addEventListener('click', () => {
    resetGame();
});
