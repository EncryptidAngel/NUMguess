//this was my attempt i couldnt get it to work but im stil too nervous and shy to ask for help so if you see this can we talk about this 
// i got inspiration to write this from code pen and stack overflow 
// I didnt wanna take it from my classmates 

var guesstheNumber = 0,
	numberOfGuesses = 0;




function newGame() {
	guesstheNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	return('historyList', '');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	var userGuessed = document.getElementById('userGuess').value;
	var statusArea = document.getElementById('statusArea');
	var historyList = document.getElementById('historyList');
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {
		
		console.log('Please enter a number 1-100 and press the Guess button');
	} else if (userGuessed.indexOf('.') != -1) {
		console.log('Please enter a whole number 1-100 and press the Guess button');
	} else {
		numberOfGuesses++;

		if (userGuessed == guesstheNumber) {
			
			console.log('statusArea', 'You got me in ' + numberOfGuesses +' guesses, I was thinking ' + guesstheNumber + '. Let\'s go again...');
			newGame();
		} else if (userGuessed < guesstheNumber) {
			
			console.log('You need to guess higher', 'try again');
			
		} else {
		
			console.log('You need to guess lower', 'try again')
			
		}
	}
  
  
}

window.onload = function() {
	newGame();
};