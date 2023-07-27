function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    
    if (x == 0) {
        return 'rock'
    } else if (x == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};


function playRound () {

    let playerSelection = 'rock'
    let computerSelection = getComputerChoice()
    let result = ''

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {

        result = ('You Won! ' +playerSelection +' beats ' + computerSelection)
    
    }else if (playerSelection == computerSelection){
        result = ('It\'s a tie! You both chose ' +playerSelection)
    }else {
        result = ('You Lost! ' +computerSelection +' beats ' + playerSelection)
    }
    return result
};

console.log(playRound())




