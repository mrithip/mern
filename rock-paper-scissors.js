let score=JSON.parse(localStorage.getItem('Score')) || 
{
    wins:0,
    loses:0,
    ties:0
};
function reset(){
    score.wins=0;
    score.loses=0;
    score.ties=0;
    updateScoreElement();
}

updateScoreElement();

function playGame(playerMove){
    let computerMove = computer();
    let result = '';
    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';
        }else if (computerMove === 'paper'){
            result = 'You lose';
        }else{
            result = 'You win';
        } 
    }else if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie';
        }else if (computerMove === 'scissors'){
            result = 'You lose';
        }else{
            result = 'You win';
        }
    }else{
        if(computerMove === 'scissors'){
            result = 'Tie';
        }else if (computerMove === 'rock'){
            result = 'You lose';
        }else{
            result = 'You win';
        }
    }
    if(result === 'You win'){
        score.wins++;
    }else if(result === 'You lose'){
        score.loses++;
    }else{
        score.ties++;
    }

    document.querySelector('.js-result').innerHTML = `${result}.`;
    document.querySelector('.js-move')
    .innerHTML = `You <img src="${playerMove}-emoji.png"> <img src="${computerMove}-emoji.png">  Computer`;
    updateScoreElement();
    localStorage.setItem('Score',JSON.stringify(score));

};

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
};

function computer(){
    let computer='';
    let computerGuess = Math.random();
    if (computerGuess>=0 && computerGuess<1/3){
        computer = 'rock';
    }else if (computerGuess>=1/3 && computerGuess<2/3){
        computer = 'paper';
    }else{
        computer ='scissors';
    }
    return computer;
}
            