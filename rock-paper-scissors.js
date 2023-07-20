
function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    
    if (x == 0) {
        return console.log('rock')
    } else if (x == 1) {
        return console.log('paper')
    }   else {
        return console.log('scissors')
    }
}

getComputerChoice ()