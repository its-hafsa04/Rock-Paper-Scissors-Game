let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");
let choicesBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choicesBtns.forEach(button => button.addEventListener('click',() => {
player = button.textContent;
computerTurn();
playerText.textContent = `Player: ${player}`;
computerText.textContent = `Computer: ${computer}`;
resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1; 

    switch (randNum){
        case 1:
            computer = "ROCK";
            break;
            case 2:
            computer = "PAPER";
            break;
            case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    } else if(computer == "ROCK"){
        return(player == "PAPER")? "You Win!" : "You loss!"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS")? "You Win!" : "You loss!"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK")? "You Win!" : "You loss!"
    }
}