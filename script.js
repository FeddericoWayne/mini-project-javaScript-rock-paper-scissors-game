
var wins = 0;
var loses = 0;
window.alert('Wanna Play Rock, Paper, Scissors?');
window.alert('Enter "r" for Rock, "p" for Paper, and "s" for scissors!');

var playGame = function() {

    var computerOptions = ['Rock', 'Paper', 'Scissors'];
    
    var computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    var playerChoice = window.prompt("Enter Your Choice");

    if (!playerChoice) {
        alert("See You Next Time!");
        return;
    }

    var playerChoiceUpper = playerChoice.toUpperCase();

    if (playerChoice.toUpperCase() === "R") {
        var playerChoiceFull = "Rock";
    } else if (playerChoice.toUpperCase() === "P") {
        var playerChoiceFull = "Paper";
    } else {
        var playerChoiceFull = "Scissors";
    }
    

    if (computerChoice === "Rock" && playerChoiceFull === "Paper") {
        alert('The Computer Chooses Rock. You Win!');
        wins++;
    } else if (computerChoice === "Paper" && playerChoiceFull === "Scissors") {
        alert('The Computer Chooses Paper. You Win!');
        wins++;
    } else if (computerChoice === "Scissors" && playerChoiceFull === "Rock") {
        alert('The Computer Chooses Scissors. You Win!');
        wins++;
    } else if (computerChoice === playerChoiceFull) {
        alert("The Computer Also Chooses " + playerChoiceFull + ". It's a Tie!");
    } else {
        alert ('The Computer Chooses ' + computerChoice + ". You Lose!");
        loses++;
    };

    alert("Your Win Count: " + wins + " ; Your Lose Count: " + loses);

    var playAgain = window.confirm("Play Again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Thanks for Playing!");
        return;
    }
    
}

playGame();
