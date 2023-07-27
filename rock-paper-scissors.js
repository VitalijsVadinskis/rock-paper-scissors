const buttons = document.querySelectorAll('input')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
       console.log(playRound(button.value))
    })
})

let won = 0;
let lost = 0;

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


function playRound (playerSelection) {
    let result = ''
    let computerSelection = getComputerChoice()

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        result = ('You Won! ' +playerSelection +' beats ' + computerSelection);
        won++
    
    }else if (playerSelection == computerSelection){
        result = ('It\'s a tie! You both chose ' +playerSelection)
    }else {
        result = ('You Lost! ' +computerSelection +' beats ' + playerSelection)
        lost++
    }
    return result
};

//for(i = 0; won < 5 && lost <5; i++){
//}
console.log('You won: ' +won+ ' times')
console.log('You lost: ' +lost+ ' times')

if(won == 5){
    console.log('grand champion')
}else{
    console.log('loser')
}


