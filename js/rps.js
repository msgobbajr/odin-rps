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

//Get player choice for round
function getHumanChoice (){
    //Get human choice
    let pChoice = prompt("Enter rock/paper/scissors?");
    //Change to lower case to get around sensitivity
    pChoice=pChoice.toLowerCase();
    //Loop to check if word is valid
    while (pChoice !== "rock" && pChoice !== "paper" && pChoice !== "scissors"){
        //Get input again if incorrect
        pChoice = prompt("Check spelling and enter rock/paper/scissors")
        //Convert to lower case
        pChoice=pChoice.toLowerCase();
    }
    //Return result of human choice
    return pChoice;
}

//Play single round of game
function playRound (){
    //get human and computer choice for round
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    //print what each player picked
    console.log("You picked "+humanChoice+".");
    console.log("They picked "+computerChoice+".");
    //nested if to determine results
    if(computerChoice==="rock"){
        if(humanChoice==="rock"){
            console.log("The round is a tie!");
        }
        else if(humanChoice==="paper"){
            console.log("You won the round!");
            humanScore+=1;
        }
        else {
            console.log("You lost the round!");
            computerScore+=1;
        }
    }
    else if(computerChoice==="paper"){
        if(humanChoice==="rock"){
            console.log("You lost the round!");
            computerScore+=1;
        }
        else if(humanChoice==="paper"){
            console.log("The round is a tie!");
        }
        else {
            console.log("You won the round!");
            humanScore+=1;
        }
    }
    else {
        if(humanChoice==="rock"){
            console.log("You won the round!");
            humanScore+=1;
        }
        else if(humanChoice==="paper"){
            console.log("You lost the round!");
            computerScore+=1;
        }
        else {
            console.log("The round is a tie!");
        }
    }
    //increment round
    round+=1;
}

function playGame (){
    //Set variables for game score
    humanScore = 0;
    computerScore = 0;
    round = 1;
    //Loop to play 5 rounds of game
    while(round<6){
        playRound();
    }
    //Check who won after 5 rounds and print result
    if (humanScore > computerScore){
        console.log("You won the game! "+humanScore+"-"+computerScore);
    }
    else if (computerScore > humanScore){
        console.log("You lost the game! "+humanScore+"-"+computerScore);
    }
    else{
        console.log("The game is a tie! "+humanScore+"-"+computerScore);
    }
}

playGame();