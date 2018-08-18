var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setModeButtonsListener();
	resetButton.addEventListener("click",reset);
	setSquaresListener();
	reset();
}

function setModeButtonsListener(){
	for (var i=0; i< modeButtons.length; i++){
			modeButtons[i].addEventListener("click",function (){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares = this.textContent === "Easy" ? 3: 6;
			reset();
		});
	}
}

function setSquaresListener(){
	for (var i =0; i< squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				fillColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				message.textContent ="Correct!";
				resetButton.textContent = "Play Again?";
			}else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateColors(numSquares);
	pickedColor = randomColor(colors.length);
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent="New Colors";
	for (var i= 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


function fillColors(color){
	for (var i =0; i< squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(length){
	var rand = Math.floor(Math.random() * length);
	return colors[rand];
}

function generateColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	 arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}