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
    let pChoice = prompt("Enter rock/paper/scissors?");
    while (pChoice !== "rock" && pChoice !== "paper" && pChoice !== "scissors"){
        pChoice = prompt("Check spelling and enter rock/paper/scissors")
    }
    return pChoice;
}

console.log(getHumanChoice());