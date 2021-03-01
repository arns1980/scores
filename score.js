var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Score = 0
var p2Score = 0
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")


p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++
		if(p1Score === winningScore) {
			gameOver = true;
			p1display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++
		if(p2Score === winningScore) {
			gameOver = true;
			p2display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}	
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {

	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});











