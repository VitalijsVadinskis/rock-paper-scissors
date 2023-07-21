
function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    
    if (x == 0) {
        return 'rock'
    } else if (x == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    let x = playerSelection.toLowerCase()
    let y = computerSelection.toLowerCase()

    if (x == 'rock' && y == 'paper') 
        return 'You Lose! Paper beats Rock!'
     else if (x == 'paper' && y == 'rock') 
        return 'You Win! Paper beats Rock!'
     else if (x == 'rock' && y == 'scissors') 
        return 'You Win! Rock beats Scissors!'
     else if (x == 'scissors' && y =='rock') 
        return 'You Lose! Rock beats Scissors!'
     else if (x == 'paper' && y =='scissors') 
        return 'You Lose! Scissors beats Paper!'
     else if (x == 'scissors' && y =='paper') 
        return 'You Win! Scissors beats Paper!'
     else  
        return 'It\'s a Tie!'
}


function game () {

    const computerSelection = getComputerChoice()
    let x = (playRound(playerSelection, computerSelection)).slice(0, 5)
    console.log(x)

    if (x == 'You W') 
        return youWon++
    else if (x == 'You L') 
        return pcWon++
}

function decider (youWon, pcWon) {
    if (youWon > pcWon) {
        console.log('YOU ARE THE CHEMPIOEN, MY FRIUEND')
    } else 
        console.log ('You da loser my firend HHSAAHH')
}


const playerSelection = "Rock";
let youWon = 0
let pcWon = 0
game()
game()
game()
game()
game()
console.log('You won: ' +youWon+ ' times')
console.log('Pc won: ' +pcWon+ ' times')
decider(youWon, pcWon)



