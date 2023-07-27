function getComputerChoice(){
   
    let array = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.random();            //  [0, ~1]
    randomIndex = randomIndex * 3;              //  [0, ~3]
    randomIndex = Math.floor(randomIndex);      //  [0,2]

    let computerChoice = array[randomIndex];
    
    return computerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    let status;

    if (playerSelection === computerSelection){
        return "It's a tie!";
    }


    // PLAYER SELECTS ROCK
    else if (playerSelection === "ROCK"){
        if (computerSelection === "SCISSORS"){
            status = "Win";
        }
        else{
            status = "Lose";
        }
    }

    // PLAYER SELECTS PAPER
    else if (playerSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            status = "Win";
        }
        else{
            status = "Lose";
        }
    }

    // PLAYER SELECTS SCISSORS
    else if (playerSelection === "SCISSORS"){
        if (computerSelection === "PAPER"){
            status = "Win";
        }
        else{
            status = "Lose";
        }
    }
}
