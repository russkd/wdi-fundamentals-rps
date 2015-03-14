
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("\nPlease choose either 'rock', 'paper', or 'scissors'.\n")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
/*Fair amount of this code was initially borrowed from elsewhere. Special credit goes to Lukeshillabeer.*/

function moveIsValid(move) {
    if (move === "rock" || move === "scissors" || move === "paper"){
        return true;
    }
    return false;
}

function getPlayerMove(move) {
    while (!moveIsValid(move)) {
        move = getInput();
    }
    return move;
}


function getComputerMove(move) {
    return (move) ? move : randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = "player";
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = "player";
    }  else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = "player";
    } else winner = "computer";
    return (winner);
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors.\n");

    var scores = {player: 0, computer: 0,tie: 0};
    while (scores.player < 5 && scores.computer < 5) {
        var playerMove   = getPlayerMove();
        var computerMove = getComputerMove();
        var winner       = getWinner(playerMove, computerMove);
        scores[winner] += 1;

        console.log("This round, player chose " + playerMove + " while computer chose " + computerMove + ".\n");
        console.log("This round's winner is " + winner + ".\n")
        console.log("The score is currently --- Human player: " + scores.player + " vs Computer: " + scores.computer);
    }
    
    function reportWinner() {
        if (winner === "player"){
            console.log("\nYou won!!! Good job!");
        } else if (winner === "computer") {
            console.log ("\nOops, the computer won. Try again.");
        }
    return;
        }
    return(reportWinner());
}



playToFive();