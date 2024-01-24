var inputNumberZero,
	inputNumberOne,
	inputNumberTwo,
	inputNumberThree,
	inputNumberFour,
	inputNumberFive,
	inputNumberSix,
	inputNumberSeven,
	inputNumberEight,
	inputNumberNine,
	inputSymbolDot,
	inputSymbolLeftBracket,
	inputSymbolRightBracket,
	inputSymbolDivide,
	inputSymbolMultiply,
	inputSymbolMinus,
	inputSymbolPlus,
	inputSymbolEquals,
	firstNumSolution,
	secondNumSolution,
	symbolSolution,
	display,
	equalsOut,
	x, y;

function getNumbers(x, y) {
	if (symbolSolution == null) {	
		x = document.getElementById(y).innerHTML;
		toString(x);
		
		if (firstNumSolution == null) {
			firstNumSolution = x;
		} else {	
			firstNumSolution = firstNumSolution + x;
		}

		display = document.getElementById('calculator__display-display').innerHTML = firstNumSolution;

		console.log(x, firstNumSolution);
	} else {
		x = document.getElementById(y).innerHTML;
		toString(x);

		if (secondNumSolution == null) {
			secondNumSolution = x;
		} else {	
			secondNumSolution = secondNumSolution + x;
		}

		display = document.getElementById('calculator__display-display').innerHTML = secondNumSolution;

		console.log(x, secondNumSolution);	
	}
}

function getSymbols(x, y) {
	x = document.getElementById(y).innerHTML;
	
	symbolSolution = x;

	console.log(x);	
}

function Equals() {
	parseFloat(firstNumSolution, secondNumSolution);
	console.log(firstNumSolution, secondNumSolution);
	if (symbolSolution == '/') {
		lastSolution = firstNumSolution / secondNumSolution;
		console.log(lastSolution);
	} else if (symbolSolution == '*') {
		lastSolution = firstNumSolution * secondNumSolution;
		console.log(lastSolution);
	} else if (symbolSolution == '-') {
		lastSolution = firstNumSolution - secondNumSolution;
		console.log(lastSolution);
	} else if (symbolSolution == '+') {
		lastSolution = parseFloat(firstNumSolution) + parseFloat(secondNumSolution);
		console.log(lastSolution);
	}
	
	equalsOut = document.getElementById('calculator__display-display').innerHTML = lastSolution;
	firstSolution = null;
	secondSolution = null;
}

function clearNumbers() {
	firstNumSolution = null;
	secondNumSolution = null;
	symbolSolution = null;
	
	console.log("Clear")

	display = document.getElementById('calculator__display-display').innerHTML = ""
}

