

//Computer turn, randoms logs a item from the list.
function getComputerChoice (Choices) {
	var Choices = ["Rock", "Paper","Scissors"];
	var randomChoices = Choices[Math.floor(Math.random() * Choices.length)];
	return randomChoices;
};

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You Win Rock beats Scissors!";
let lose = "You Lose Scissors beats Paper! Try again!";
let tie = "You've entered an invalid word.Please enter Rock, Paper or Scissors!";
 
function playRound (playerSelection, computerSelection) {
     getComputerChoice(); //We can use items within other function if we call them within the function.
	 //var playerSelection = prompt("Please enter even Rock, Paper or Scissors").toLowerCase();
     //var computerSelection = getComputerChoice().toLowerCase();
	 if (playerSelection == "Rock".toLowerCase() && computerSelection.toLowerCase() == "Scissors".toLowerCase()) {
		 return win;
		 playerScore ++;
	 } else if (playerSelection =="Paper".toLowerCase() && computerSelection.toLowerCase()== "Scissors".toLowerCase()) {
		 return lose;
		 computerScore ++;
	 } else if (playerSelection =="Scissors".toLowerCase() && computerSelection.toLowerCase() == "Paper".toLowerCase()) {
		 return win;
		 playerScore ++;
	 } else if (playerSelection =="Paper".toLowerCase() && computerSelection.toLowerCase() == "Rock".toLowerCase()) {
		 return win;
		 playerScore ++;
	 } else if (playerSelection =="Rock".toLowerCase() && computerSelection.toLowerCase() == "Paper".toLowerCase()){
		 return lose;
		 computerScore ++;
	 } else if (playerSelection =="Scissors".toLowerCase() && computerSelection.toLowerCase() == "Rock".toLowerCase()) { 
	     return lose;
		 computerScore ++;
      }else {
		 return tie;
	 };	 
};

playRound();


// function game() Making the below code outside of a function now.
	//Don't think playRound() needed below now as added below.
	//playRound();
	for (let i=0; i < 5; i++) {
	let playerSelection = prompt("Please enter even Rock, Paper or Scissors").toLowerCase();
	let computerSelection = getComputerChoice().toLowerCase();
	console.log(playRound(playerSelection, computerSelection));
	console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
}

	 
