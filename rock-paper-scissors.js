const buttons = document.querySelectorAll('input')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
       console.log(playRound(button.value))
    })
})

function disableButton(){
    buttons.forEach(button => {
        button.disabled = true;
    })
}



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

        won++
        result = ('You Won! ' +playerSelection +' beats ' + computerSelection
        + "<br><br>Player score: " + won + "<br>Computer score: " + lost);
        

        if(won == 5) {
            result += '<br><br>I won the game! Reload the page to play again' 
            disableButton()
        }
    
    }else if (playerSelection == computerSelection){
        result = ('It\'s a tie! You both chose ' +playerSelection
        + "<br><br>Player score: " + won + "<br>Computer score: " + lost)
        
    }else {
        lost++
        result = ('You Lost! ' +computerSelection +' beats ' + playerSelection
        + "<br><br>Player score: " + won + "<br>Computer score: " + lost)
    
        if(lost == 5) {
            result += '<br><br>I lost the game! Reload the page to play again' 
            disableButton()
        }
    
    }

    document.getElementById('result').innerHTML =result
    return
};