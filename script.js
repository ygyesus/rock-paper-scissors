const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let display = document.querySelector('#display');

let gameStatus;
let playerSelection;
let computerSelection;
let clicked = false;

let computerScore = 0;
let playerScore = 0;

rock.addEventListener('click', ()=>{
    playerSelection = 'ROCK';
    computerSelection = getComputerChoice();
    gameStatus = playRound(playerSelection, computerSelection);
});
paper.addEventListener('click', ()=>{
    playerSelection = 'PAPER';
    computerSelection = getComputerChoice();
    gameStatus = playRound(playerSelection, computerSelection)
});
scissors.addEventListener('click', ()=>{
    playerSelection = 'SCISSORS';
    computerSelection = getComputerChoice();
    gameStatus = playRound(playerSelection, computerSelection)
});




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
    display.replaceChildren();
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



    displayResult(status, playerSelection, computerSelection, playerScore, computerScore);
    return status;
    
}





// GAME OF FIVE ROUNDS

function reformatSelectionString(selection){

    let reformattedSelection = selection[0].toUpperCase() + 
                                selection.slice(1).toLowerCase();
    return reformattedSelection;
}



function displayResult(status, playerSelection, computerSelection){
    let result;

    playerSelection = reformatSelectionString(playerSelection);
    computerSelection = reformatSelectionString(computerSelection);

    if (status === "win"){
        playerScore++;
        result = 
            "You Win!".concat(" ", playerSelection, " beats ", computerSelection);

    }
    else if (status === "lose"){
        computerScore++;
        result =
            "You Lose!".concat(" ", computerSelection, " beats ", playerSelection);
  
    }


    else{
        computerScore++;
        playerScore++;

        result = 
            "It's a Tie!".concat(" ", 
                reformatSelectionString(playerSelection), " and ", reformatSelectionString(computerSelection));
    }


    const resultElement = document.createElement('div');
    resultElement.textContent = result;
    

    const score = 
        playerScore.toString().concat("-",computerScore.toString());
    const scoreElement = document.createElement('div');
    scoreElement.textContent = score;
    

    display.appendChild(resultElement);
    display.appendChild(scoreElement);




    if (playerScore === 5 || computerScore === 5){
        const finalMessage = document.createElement('div');

        if (playerScore === 5){
            finalMessage.textContent = "Congrats! You've beat the computer!";
        }
        else{
            finalMessage.textContent = "You lose this game! Don't give up yet!";
        }
        playerScore = 0;
        computerScore = 0;
        display.replaceChildren();

        display.appendChild(finalMessage);
        display.appendChild(scoreElement);
    }
}



