
//make sure code is running
	// alert('Welcome :)');

//variables using:
	var abc;				//letters available to choose from
	var myLetter;			//letter i'm thinking of
	var userGuessed = [];	//letters user guessed
	var wins = 0;			//# of wins
	var losses = 0;			//# of losses
	var numGuessLeft = 10;	//# of guesses left
	var checkInput;			//check if user guessed the same letter or not
	var checkAbc;			//check if user pressed key is within the array
	var keyPressed;			//key user pressed
	
//letters & numbers updates from javascript
	var displayLetters = document.querySelector('#guessedLetters');

	document.querySelector('#win').innerText = wins;

	document.querySelector('#loss').innerText = losses;

	document.querySelector('#guessLeft').innerText = numGuessLeft;

//letters to choose from
	abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//randomly choose a letter
	myLetter = abc[Math.floor(Math.random() * abc.length)];
	console.log (myLetter);

//game		
	function game(event) {
		keyPressed = event.key.trim().toLowerCase();
		checkInput = userGuessed.indexOf(keyPressed);
		checkAbc = abc.indexOf(keyPressed);

		
	//check if key pressed is within the array
		if (checkInput == -1 && checkAbc == -1){
			alert('please enter a letter from A-Z');

	//warn user same key has been pressed
		}else if (checkInput >= 0) {
			alert(`you've entered " ${keyPressed} " already`);

	//store user's guesses and decrease num of guesses
		}else if (checkInput == -1 && keyPressed !== myLetter && numGuessLeft > 1){
			userGuessed.push(keyPressed);
			numGuessLeft--;
			document.querySelector('#guessLeft').innerText = numGuessLeft;
			displayLetters.innerText = displayLetters.innerText + " " + keyPressed;

	//if user guessed letter before numGuessLeft == 0
		}else if (checkInput == -1 && numGuessLeft >= 1 && keyPressed == myLetter){
			wins++;
			document.querySelector('#win').innerText = wins;

			reset();

	//if user can't guess the right letter when numGuessLeft == 0
		}else{
			losses++;
			document.querySelector('#loss').innerText = losses;

			reset();
		}
	}

	document.onkeyup = game;

//reset - if win/loss
	function reset(){
		myLetter = abc[Math.floor(Math.random() * abc.length)];
		console.log (myLetter);
		userGuessed = [];
		numGuessLeft = 10;
		document.querySelector('#guessLeft').innerText = numGuessLeft;
		displayLetters.innerText = userGuessed;
	}

//refresh the page
	function refresh() {
		location.reload();
	}