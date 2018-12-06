

    let random;
    let result;
    let computerSelection;
    let playerInput;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

// clicking the START GAME button will execute one complete game
let startButton = document.querySelector("#startbtn");
startButton.addEventListener("click", function () {
    game();
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
    

        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            result = "Invalid selection";
        }
        else if (result == "Player wins.") {
            playerScore++;
        }
        else if (result == "CPU wins.") {
            computerScore++;
        }
        else if (result == "Tie!") {
            ties++;
        }
    }
    
    
    function game() {
    
        playerInput = prompt("Rock, Paper or Scissors? Choose your weapon:");
        if (playerInput == null) {
            return
        }
        while (playerInput === "") {
            alert("Well, you have to choose something...");
            playerInput = prompt("Rock, Paper or Scissors? Choose your weapon:")
        }
        playerSelection = playerInput.toLowerCase();
        computerSelection = computerPlay();
    
        playRound(computerSelection, playerSelection);
    
        while ((playerScore < 5 || computerScore < 5) && playerInput !== "") {
    
            console.log("Player: " + playerSelection);
            console.log("CPU: " + computerSelection);
            console.log(result);
            console.log("Player Score: " + playerScore);
            console.log("CPU Score: " + computerScore);
            console.log("Ties: " + ties);
            console.log("");
    
            playerInput = prompt("Rock, Paper or Scissors? Choose again:");
    
            while (playerInput == null) {
                playerInput = prompt("You cannot escape! Choose your weapon, coward!:")
            }
    
            while (playerInput === "") {
                alert("Well, you have to choose something...");
                playerInput = prompt("Rock, Paper or Scissors? Choose your weapon:")
            }
    
            playerSelection = playerInput.toLowerCase();
            computerSelection = computerPlay();
            playRound(computerSelection, playerSelection);
    
    
            if (playerScore == 5) {
                console.log("Player: " + playerSelection);
                console.log("CPU: " + computerSelection);
                console.log(result);
                console.log("Player Score: " + playerScore);
                console.log("CPU Score: " + computerScore);
                return "PLAYER WINS 5 ROUNDS. CONGRATULATIONS!"
            }
    
            else if (computerScore == 5) {
                console.log("Player: " + playerSelection);
                console.log("CPU: " + computerSelection);
                console.log(result);
                console.log("Player Score: " + playerScore);
                console.log("CPU Score: " + computerScore);
                return "CPU WINS 5 ROUNDS. YOU LOSE!"
            }
    
            else if (result == "Invalid selection") {
                playerInput = prompt("Rock, Paper or Scissors? Choose again:");
                playerSelection = playerInput.toLowerCase();
                computerSelection = computerPlay();
                playRound(computerSelection, playerSelection);
            }
        }
    
    }
    
   

    