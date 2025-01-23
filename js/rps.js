function getComputerChoice ()
{
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

console.log(getComputerChoice());