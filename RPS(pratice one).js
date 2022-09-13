//Computer turn, randoms logs a item from the list.
function getComputerChoice () {
  var Choices = ["Rock", "Paper","Scissors"];
  var randomChoices = Choices[Math.floor(Math.random() * Choices.length)];
  return randomChoices;
}
  var playerScore = 0;
  var computerScore = 0;
 
function playRound () {
	 getComputerChoice();
  let playerSelection = prompt("Please enter even Rock, Paper or Scissors");
  let computerSelection = getComputerChoice();
 
//We can use items within other function if we call them within the function.
	 
//User Rock if statement.
if(playerSelection.toLowerCase() == "Rock" && computerSelection.toLowerCase() == "Scissors") {
	 console.log("You Win Rock beats Scissors");
	 playerScore +=1;
}else if(playerSelection.toLowerCase() == "Rock" && computerSelection.toLowerCase() == "Paper") {
	 console.log ("You Lose Paper beats Rock");
	 computerScore +=1;
}else {
	console.log("It\'s a tie");	
}
		 
//User Paper if statement.	 
if (playerSelection =="Paper".toLowerCase() && computerSelection.toLowerCase()== "Scissors") {
	  console.log("You lose Scissors beats Paper");
	  computerScore+=1;
}else if(computerSelection =="Paper".toLowerCase() && playerSelection.toLowerCase() == "Paper") {
       console.log("Its a tie.");
} else { 
    console.log("You Win Rock beats Scissors");
   playerScore+=1;
}
		 
//User scissors if statement.
if (playerSelection =="Scissors".toLowerCase() && computerSelection.toLowerCase() == "Paper") {
      console.log("You Win Rock beats Scissors");
	  playerScore+=1;
} else if(computerSelection =="Rock".toLowerCase() && playerSelection == "Scissors") {
        console.log("You Lose Rock beats Scissors");
		computerScore +=1;
}else {
	 console.log("It\'s a tie");	
}
}

function game() {
playRound();
getComputerChoice();

for (let i=0; i < 5; i++) {
  let playerSelection = prompt("Please enter even Rock, Paper or Scissors");
  let computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));
  //console.log("your score = " + playerScore);
  //console.log("Computer's score = " + computerScore);
}
}

function finalScore () {
	playRound();
	getComputerChoice();
	game();
if (playerScore > computerScore) {
	console.log("You Win!");
}else{
	console.log("You lose!");
}
}