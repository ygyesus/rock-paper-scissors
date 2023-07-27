// FUNCTION RETURNING RANDOM CHOICE

function getComputerChoice(){
   
    let array = ["ROCK", "PAPER", "SCISSORS"];
    let randomIndex = Math.random();            //  [0, ~1]
    randomIndex = randomIndex * 3;              //  [0, ~3]
    randomIndex = Math.floor(randomIndex);      //  [0, 2]

    let computerChoice = array[randomIndex];
    return computerChoice;
}


// FUNCTION FOR SINGLE ROUND

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    let status;

    if (playerSelection === computerSelection){
        status = "tie";
    }
    else if (playerSelection === "ROCK"){       // PLAYER SELECTS ROCK
        if (computerSelection === "SCISSORS"){
            status = "win";
        }
        else{
            status = "lose";
        }
    }
    else if (playerSelection === "PAPER"){      // PLAYER SELECTS PAPER
        if (computerSelection === "ROCK"){
            status = "win";
        }
        else{
            status = "lose";
        }
    }

    // PLAYER SELECTS SCISSORS
    else if (playerSelection === "SCISSORS"){
        if (computerSelection === "PAPER"){
            status = "win";
        }
        else{
            status = "lose";
        }
    }

    return status;
}


// GAME OF FIVE ROUNDS

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let counter = 0; counter < 5; counter++){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let status = playRound(playerSelection, computerSelection)
        displayResult(status, playerSelection, computerSelection);

    }

    function displayResult(status, playerSelection, computerSelection){

        function reformatSelectionString(selection){

            let reformattedSelection = selection[0].toUpperCase() + 
                                        selection.slice(1).toLowerCase();
            return reformattedSelection;
        }

        playerSelection = reformatSelectionString(playerSelection);
        computerSelection = reformatSelectionString(computerSelection);

        if (status === "win"){
            playerScore++;
            console.log( "You Win!".concat(" ", playerSelection, " beats ", computerSelection));

        }
        else if (status === "lose"){
            computerScore++;
            console.log( "You Lose!".concat(" ", computerSelection, " beats ", playerSelection));
      
        }
        else{
            computerScore++;
            playerScore++;

            console.log("It's a Tie!".concat(" ", 
                    reformatSelectionString(playerSelection), " and ", reformatSelectionString(computerSelection)));
        }

        console.log(playerScore.toString().concat("-",computerScore.toString()));
    }
}

game();