let random;
let result;
let computerSelection;
let playerInput;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

let cpuDisplay = document.querySelector("#cpuDisplay");
let playerDisplay = document.querySelector("#playerDisplay");
let displayText = document.querySelector("#displayText"); 

let rockbtn = document.querySelector("#rockbtn")
let paperbtn = document.querySelector("#paperbtn")
let scissorsbtn = document.querySelector("#scissorsbtn")

// clicking the New Game button will reset the game
let startButton = document.querySelector("#startbtn");
startButton.addEventListener("click", function () {
    resetGame();
});


// create three buttons and add event listener that calls playRound with correct playerSelection
rockbtn.addEventListener("click", function () {
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    cpuDisplay.textContent = computerScore;
    playerDisplay.textContent = playerScore;
    displayText.textContent = `You chose ${playerSelection.toUpperCase()}, CPU chose ${computerSelection.toUpperCase()}. ${result.toUpperCase()} `

    checkForWinner();
});

paperbtn.addEventListener("click", function () {
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    cpuDisplay.textContent = computerScore;
    playerDisplay.textContent = playerScore;
    displayText.textContent = `You chose ${playerSelection.toUpperCase()}, CPU chose ${computerSelection.toUpperCase()}. ${result.toUpperCase()} `

    checkForWinner();
});

scissorsbtn.addEventListener("click", function () {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    cpuDisplay.textContent = computerScore;
    playerDisplay.textContent = playerScore;
    displayText.textContent = `You chose ${playerSelection.toUpperCase()}, CPU chose ${computerSelection.toUpperCase()}. ${result.toUpperCase()} `

    checkForWinner();
});



// this function randomly generates rock, paper or scissor for the CPU
function computerPlay() {
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
        return "rock";
    }
    else if (random === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// this function plays one round and stores the result in "result"
function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        result = "Tie!";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        result = "Player wins.";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "CPU wins.";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "CPU wins.";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        result = "Player wins.";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "CPU wins.";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        result = "Player wins.";
    }


    if (result == "Player wins.") {
        playerScore++;
    }
    else if (result == "CPU wins.") {
        computerScore++;
    }
    else if (result == "Tie!") {
        ties++;
    }
}

// this function checks if one of the players reached 5 points and resets the game
function checkForWinner() {
    if (playerScore == 5) {
        displayText.textContent = "PLAYER WINS 5 ROUNDS. CONGRATULATIONS!";
        startButton.textContent = "REPLAY?"
        rockbtn.classList.add("hidebtn")
        paperbtn.classList.add("hidebtn")
        scissorsbtn.classList.add("hidebtn")

    }
    else if (computerScore == 5) {
        displayText.textContent = "CPU WINS 5 ROUNDS. YOU LOSE!";
        startButton.textContent = "REPLAY?"
        rockbtn.classList.add("hidebtn")
        paperbtn.classList.add("hidebtn")
        scissorsbtn.classList.add("hidebtn")
    }

}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    cpuDisplay.textContent = computerScore;
    playerDisplay.textContent = playerScore;
    startButton.textContent = "New Game";
    displayText.textContent = "Click Rock, Paper or Scissors";
    rockbtn.classList.remove("hidebtn");
    paperbtn.classList.remove("hidebtn");
    scissorsbtn.classList.remove("hidebtn");

}