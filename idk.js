
function computerPlay (min = 1, max = 4){
   let oneTwoThree = Math.floor(Math.random() * (max - min) + min);
   let result; 
   if (oneTwoThree === 1){
       result = 'Rock';
   }
   else if (oneTwoThree === 2) {
       result = 'Paper';
   }
   else {
       result = 'Scissors';
   }
   return result;
}

function playRound (playerSelection, computerSelection) {

    let playerInput = playerSelection.toLowerCase();

    if (playerInput === 'rock'){
        if (computerSelection === 'rock'){
            return ('Rock against Rock, draw!');
        }
        else if (computerSelection === 'paper') {
            return ('Rock against Paper, you lose!');
        }
        else if (computerSelection === 'scissors') {
            return ('Rock against scissors, you win!');
        }
        else {
            return ('woops, looks like something went wrong')
        }
    }
    else if (playerInput === 'paper'){
        if (computerSelection === 'paper'){
            return ('Paper against Rock, you win!');
        }
        else if (computerSelection === 'paper') {
            return ('Paper against Paper, draw!');
        }
        else if (computerSelection === 'scissors') {
            return ('Paper against scissors, you lose!');
        }
        else {
            return ('woops, looks like something went wrong')
        }
    }
    else if (playerInput === 'scissors') {
        if (computerSelection === 'scissors'){
            return ('Scissors against Rock, you lose!');
        }
        else if (computerSelection === 'paper') {
            return ('Scissors against Paper, you win!');
        }
        else if (computerSelection === 'scissors') {
            return ('Scissors against scissors, draw!');
        }
        else {
            return ('woops, looks like something went wrong')
        }
    }
    else {
        return ('woops, looks like something went wrong')
    }
 
}

function game () {
    
}
