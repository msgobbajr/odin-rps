//Get computer choice for round
function getComputerChoice (){
    //Random number 1, 2 or 3
    let tempNum = Math.floor(Math.random()*3)+1;
    //1 is rock
    if (tempNum == 1) {
        return "rock";
    }
    //2 is paper
    else if (tempNum == 2) {
        return "paper";
    }
    //3 is scissors
    else {
        return "scissors";
    }
}

//Play single round of game
function playRound (buttonClicked){
    //get human and computer choice for round
    humanChoice=buttonClicked;
    computerChoice=getComputerChoice();
    const resultP = document.getElementById('fRes');
    const playerP = document.getElementById('pRes');
    const compP = document.getElementById('cRes');
    //print what each player picked
    playerP.textContent = "You picked "+humanChoice+".";
    compP.textContent = "They picked "+computerChoice+".";
    //nested if to determine results
    if(computerChoice==="rock"){
        if(humanChoice==="rock"){
            resultP.textContent = "The round is a tie!";
        }
        else if(humanChoice==="paper"){
            resultP.textContent = "You won the round!";
            humanScore+=1;
        }
        else {
            resultP.textContent = "You lost the round!";
            computerScore+=1;
        }
    }
    else if(computerChoice==="paper"){
        if(humanChoice==="rock"){
            resultP.textContent = "You lost the round!";
            computerScore+=1;
        }
        else if(humanChoice==="paper"){
            resultP.textContent = "The round is a tie!";
        }
        else {
            resultP.textContent = "You won the round!";
            humanScore+=1;
        }
    }
    else {
        if(humanChoice==="rock"){
            resultP.textContent = "You won the round!";
            humanScore+=1;
        }
        else if(humanChoice==="paper"){
            resultP.textContent = "You lost the round!";
            computerScore+=1;
        }
        else {
            resultP.textContent = "The round is a tie!";
        }
    }
    if (humanScore == 5){
        resultP.textContent = "";
        playerP.textContent = "";
        compP.textContent = "";
        scoreP.textContent = "You won the game " + humanScore + "-" + computerScore + "! Congrats!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        resultP.textContent = "";
        playerP.textContent = "";
        compP.textContent = "";
        scoreP.textContent = "You lost the game " + humanScore + "-" + computerScore + "! Try again!";
        humanScore = 0;
        computerScore = 0;
    }
    else scoreP.textContent = "Computer - " + computerScore + " You - " + humanScore;
}

let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreP = document.getElementById("score");
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
