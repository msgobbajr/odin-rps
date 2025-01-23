let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);

function getComputerChoice (){
    let tempNum = Math.floor(Math.random()*3)+1;
    if (tempNum == 1) {
        return "rock";
    }
    else if (tempNum == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice (){
    //Get human choice
    let pChoice = prompt("Enter rock/paper/scissors?");
    //Change to lower case to get around sensitivity
    pChoice=pChoice.toLowerCase();
    //Loop to check if word is valid
    while (pChoice !== "rock" && pChoice !== "paper" && pChoice !== "scissors"){
        pChoice = prompt("Check spelling and enter rock/paper/scissors")
        pChoice=pChoice.toLowerCase();
    }
    return pChoice;
}

function playRound (humanChoice, computerChoice){
    console.log("You picked "+humanChoice+".");
    console.log("They picked "+computerChoice+".");
    if(computerChoice==="rock"){
        if(humanChoice==="rock"){
            console.log("It's a tie!");
        }
        else if(humanChoice==="paper"){
            console.log("You won!");
            humanScore+=1;
        }
        else {
            console.log("You lost!");
            computerScore+=1;
        }
    }
    else if(computerChoice==="paper"){
        if(humanChoice==="rock"){
            console.log("You lost!");
            computerScore+=1;
        }
        else if(humanChoice==="paper"){
            console.log("It's a tie!");
        }
        else {
            console.log("You won!");
            humanScore+=1;
        }
    }
    else {
        if(humanChoice==="rock"){
            console.log("You won!");
            humanScore+=1;
        }
        else if(humanChoice==="paper"){
            console.log("You lost!");
            computerScore+=1;
        }
        else {
            console.log("It's a tie!");
        }
    }
}