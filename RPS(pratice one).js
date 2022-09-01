//Computer turn, randoms logs a item from the list.
function getComputerChoice (Choices) {
	var Choices = ["Rock", "Paper","Scissors"];
	var randomChoices = Choices[Math.floor(Math.random() * Choices.length)];
	return randomChoices;
};

 
function playRound (playerSelection, computerSelection) {
     // don't actually know if i need the calling function below.
	 getComputerChoice(); //We can use items within other function if we call them within the function.
	 
	 //User Rock if statement.
	 if (playerSelection.toLowerCase() == "Rock" && computerSelection.toLowerCase() == "Scissors") {
		 return win;
		 playerScore++;
	 } else if(computerSelection.toLowerCase() == "Rock" && playerSelection.toLowerCase() == "rock") {
		 return tie;
	 } else {
		 return lose;
		 computerScore++;
	 }
}
		 
 //User Paper if statement.	 
 
	if (playerSelection =="Paper".toLowerCase() && computerSelection.toLowerCase()== "Scissors") {
		 return lose;
		 computerScore++;
	 } else if(computerSelection =="Paper".toLowerCase() && playSelection == "Paper") {
         return tie ;
     } else { 
       	 return win;
		 playerScore++;
	 }
}
		 
//User scissors if statement.
	 } else if (playerSelection =="Scissors".toLowerCase() && computerSelection.toLowerCase() == "Paper"()) {
		 return win;
		 playerScore++;
	 } else if(computerSelection =="Paper".toLowerCase() && playSelection == "Paper") {
         return tie;
     } else { 
       	 return lose;
		 computerScore++;
	 }
}
	 

// playRound(); < don't think i need this here


// function game() Making the below code outside of a function now.
	//Don't think playRound() needed below now as added below.
	//playRound();
function game() {
 let playerScore = parseInt(0);
 let computerScore = parseInt(0);
 let win = "You Win Rock beats Scissors!";
 let lose = "You Lose Scissors beats Paper! Try again!";
 let tie = "You\'ve entered an invalid word.Please enter Rock, Paper or Scissors!";

for (let i=0; i < 5; i++) {
  let playerSelection = prompt("Please enter even Rock, Paper or Scissors");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("your score = " + playerScore);
  console.log("Computer's score = " + computerScore);
}
}
