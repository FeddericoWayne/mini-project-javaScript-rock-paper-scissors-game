
var wins = 0;
var loses = 0;
window.alert('Wanna Play Rock, Paper, Scissors?');
window.alert('Enter "r" for Rock, "p" for Paper, and "s" for scissors!');




var playGame = function() {

    var computerOptions = ['r', 'p', 's'];
    
    var computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    var playerChoice = window.prompt("Enter Your Choice");

    if (computerChoice === "r" && playerChoice === "p") {
        alert('The Computer Chooses Rock. You Win!');
        wins++;
    } else if (computerChoice === "p" && playerChoice === "s") {
        alert('The Computer Chooses Paper. You Win!');
        wins++;
    } else if (computerChoice === "s" && playerChoice === "r") {
        alert('The Computer Chooses Scissors. You Win!');
        wins++;
    } else if (computerChoice === playerChoice) {
        alert("The Computer Also Chooses " + playerChoice + ". It's a Tie!");
    } else {
        alert ('The Computer Chooses ' + computerChoice + ". You Lose!");
        loses++;
    };

    alert("Your Win Count: " + wins + " ; Your Lose Count: " + loses);

    if (window.confirm ("Play Again?")) {
        playGame();
    } else {
        alert("Thanks for Playing!");
        return;
    }
    
}

playGame();
