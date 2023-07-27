// FUNCTION RETURNING RANDOM CHOICE

function getComputerChoice(){
   
    let array = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.random();            //  [0, ~1]
    randomIndex = randomIndex * 3;              //  [0, ~3]
    randomIndex = Math.floor(randomIndex);      //  [0, 2]

    let computerChoice = array[randomIndex];
    
    return computerChoice.toUpperCase();
}


// FUNCTION FOR SINGLE ROUND

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    
    let status;

    if (playerSelection === computerSelection){
        return "It's a Tie!".concat(" ", 
            reformatSelectionString(playerSelection), " and ", reformatSelectionString(computerSelection));
    }


    // PLAYER SELECTS ROCK
    else if (playerSelection === "ROCK"){
        if (computerSelection === "SCISSORS"){
            status = "win";
        }
        else{
            status = "lose";
        }
    }

    // PLAYER SELECTS PAPER
    else if (playerSelection === "PAPER"){
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

    
    function reformatSelectionString(selection){

        let reformattedSelection = selection[0].toUpperCase() + 
                                    selection.slice(1).toLowerCase();

        return reformattedSelection;
    }


    playerSelection = reformatSelectionString(playerSelection);

    computerSelection = reformatSelectionString(computerSelection);

    if (status === "win"){
        return "You Win!".concat(" ", playerSelection, " beats ", computerSelection);
    }
    else{
        return "You Lose!".concat(" ", computerSelection, " beats ", playerSelection);
    }
}


// GAME OF FIVE ROUNDS

function game(){
    for (let counter = 0; counter < 5; counter++){
        let playerSelection = prompt("Rock, Paper, or Scissor?");
        let computerSelection = getComputerChoice();

        console.log(
            playRound(playerSelection, computerSelection)
        );
    }
}

game();