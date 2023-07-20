
function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    
    if (x == 0) {
        return 'rock'
    } else if (x == 1) {
        return 'paper'
    }   else {
        return 'scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    let x = playerSelection.toLowerCase()
    let y = computerSelection.toLowerCase()

    if (x == 'rock' && y == 'paper') {
        return 'You Lose! Paper beats Rock!'
    } else if (x == 'paper' && y == 'rock') {
        return 'You Win! Paper beats Rock!'
    } else if (x == 'rock' && y == 'scissors') {
        return 'You Win! Rock beats Scissors!'
    } else if (x == 'scissors' && y =='rock') {
        return 'You Lose! Rock beats Scissors!'
    } else if (x == 'paper' && y =='scissors') {
        return 'You Lose! Scissors beats Paper!'
    } else if (x == 'scissors' && y =='paper') {
        return 'You Win! Scissors beats Paper!'
    } else  
        return 'It\'s a Tie!'
}




const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

