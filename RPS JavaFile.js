//Computer turn, randoms logs a item from the list.
function getComputerChoice (Choices) {
	var Choices = ["Rock", "Paper","Scissors"];
	var randomChoices = Choices[Math.floor(Math.random() * Choices.length)];
	return randomChoices;
}

 var playerScore = parseInt(0);
 var computerScore = parseInt(0);
 var win = "You Win Rock beats Scissors!";
 var lose = "You Lose Scissors beats Paper! Try again!";
 var tie = "You\'ve entered an invalid word.Please enter Rock, Paper or Scissors!";

 
function playRound (playerSelection, computerSelection) {

     // don't actually know if i need the calling function below.
	 getComputerChoice(); //We can use items within other function if we call them within the function.
	 
	 //User Rock if statement.
	 if (playerSelection.toLowerCase() == "Rock" && computerSelection.toLowerCase() == "Scissors") {
		 playerScore++;
     return win;
		 
	 } else if(computerSelection.toLowerCase() == "Rock" && playerSelection.toLowerCase() == "rock") {
		 return tie;
	 } else {
     computerScore++;
		 return lose;
		 
	 }
}
		 
 //User Paper if statement.	 
 
	if (playerSelection =="Paper".toLowerCase() && computerSelection.toLowerCase()== "Scissors") {
		computerScore++;
    return lose;
		
	 } else if(computerSelection =="Paper".toLowerCase() && playSelection == "Paper") {
         return tie ;
     } else { 
       playerScore++;
       	 return win;
     }
}
		 
//User scissors if statement.
	 } else if (playerSelection =="Scissors".toLowerCase() && computerSelection.toLowerCase() == "Paper"()) {
		playerScore++;
     return win;
		
	 } else if(computerSelection =="Paper".toLowerCase() && playSelection == "Paper") {
         return tie;
     } else { 
       computerScore++;
       	 return lose;
		 
	 }
}
}


// playRound(); < don't think i need this here


// function game() Making the below code outside of a function now.
	//Don't think playRound() needed below now as added below.
	//playRound();
function game() {

for (let i=0; i < 5; i++) {
  let playerSelection = prompt("Please enter even Rock, Paper or Scissors");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("your score = " + playerScore);
  console.log("Computer's score = " + computerScore);
}
}
