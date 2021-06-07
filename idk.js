//holds the score, will be used to compare to determine winner
let computerScore;
let playerScore; 

//randomizes a whole number from 1-3, 1=rock, 2=paper, 3=scissors
function computerPlay (min = 1, max = 4){
   let oneTwoThree = Math.floor(Math.random() * (max - min) + min);
   let result; 
   if (oneTwoThree === 1){
       result = 'rock';
   }
   else if (oneTwoThree === 2) {
       result = 'paper';
   }
   else {
       result = 'scissors';
   }
   return result;
}

//plays a single round of RPS, takes the computers selection and players selection and compares them to determine result and update score.
function playRound (playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();

    if (playerInput === 'rock'){
        if (computerSelection === 'rock'){
            return alert('Rock against Rock, draw!');
        }
        else if (computerSelection === 'paper') {
            ++computerScore;
            return alert('Rock against Paper, you lose!');
        }
        else if (computerSelection === 'scissors') {
            ++playerScore;
            return alert('Rock against scissors, you win!');
        }
        else {
            return alert('woops, looks like something went wrong')
        }
    }
    else if (playerInput === 'paper'){
        if (computerSelection === 'paper'){
            ++playerScore;
            return alert('Paper against Rock, you win!');
        }
        else if (computerSelection === 'paper') {
            return alert('Paper against Paper, draw!');
        }
        else if (computerSelection === 'scissors') {
            ++computerScore;
            return alert('Paper against scissors, you lose!');
        }
        else {
            return alert('woops, looks like something went wrong')
        }
    }
    else if (playerInput === 'scissors') {
        if (computerSelection === 'scissors'){
            ++computerScore;
            return alert('Scissors against Rock, you lose!');
        }
        else if (computerSelection === 'paper') {
            ++playerScore;
            return alert('Scissors against Paper, you win!');
        }
        else if (computerSelection === 'scissors') {
            return alert('Scissors against scissors, draw!');
        }
        else {
            return alert('woops, looks like something went wrong')
        }
    }
    else {
        return alert('woops, looks like something went wrong')
    }
 
}

//asking for user input and running the function above to play game
function game () {
    let playerSelection = prompt("type in one of the following three choices. rock, paper, or scissors.");
    playRound(playerSelection, computerPlay());

}

// best of 5 
game();
game();
game();
game();
game();  

//final score check
if (playerScore > computerScore) {
    console.log("you win!")
}      
else if (playerScore < computerScore){
    console.log('you lose!');
}
else {
    console.log('tie game!')
}
