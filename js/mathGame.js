var number1;
var number2;

function setTitle(){
	document.getElementById('title').innerText = "¿Cuánto es " + number1 + " + " + number2 + "?" ;
}

function gameResult(text){
	var playerResult=parseInt(text);
	return (number1 + number2) == playerResult;
}

function init(){
	number1=Math.floor((Math.random() * 200) + 1);
	number2=Math.floor((Math.random() * 200) + 1);
	setTitle();
	document.getElementById('message').innerText = '?';
}

function onFinishGame(win){
	if(win){
		init();
	}
}