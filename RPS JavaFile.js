

//Computer turn, randoms logs a item from the list.
function getComputerChoice (Choices) {
	var Choices = ["Rock", "Paper","Scissors"];
	var randomChoices = Choices[Math.floor(Math.random() * Choices.length)];
	return randomChoices;
};

function playRound (playerSelection, computerSelection) {
     getComputerChoice(); //We can use items within other function if we call them within the function.
	 var playerSelection = prompt("Please enter even Rock, Paper or Scissors").toLowerCase();
	 var random = getComputerChoice(); 
	 if (playerSelection == "Rock".toLowerCase() && random.toLowerCase() == "Scissors".toLowerCase()) {
		 console.log("You Win Rock beats Scissors!");
	 } else if (playerSelection =="Paper".toLowerCase() && random.toLowerCase()== "Scissors".toLowerCase()) {
		 console.log("You Lose Scissors beats Paper! Try again!");
	 } else if (playerSelection =="Scissors".toLowerCase() && random.toLowerCase() == "Paper".toLowerCase()) {
		 console.log("You Win Scissors beats Paper!");
	 } else if (playerSelection =="Paper".toLowerCase() && random.toLowerCase() == "Rock".toLowerCase()) {
		 console.log("You Win Paper beats Rock!");
	 } else if (playerSelection =="Rock".toLowerCase() && random.toLowerCase() == "Paper".toLowerCase()){
		 console.log("You Lose Paper beats Rock!");
	 } else if (playerSelection =="Scissors".toLowerCase() && random.toLowerCase() == "Rock".toLowerCase()) { 
	     console.log("You Lose Rock beats Scissors!");
      }else {
		 console.log("You choice the same as the computer no-one wins.Try again!");
	 };	 
};

playRound();
console.log(playRound(playerSelection, computerSelection));

function game() {
	playRound();
	for (let i=0; i < 5; i++) {
		console.log(playerSelection);
	};
};
	 
