var number1=Math.floor((Math.random() * 200) + 1);
var number2=Math.floor((Math.random() * 200) + 1);

function setTitle(){
	document.getElementById('title').innerText = "¿Cuanto es " + number1 + " + " + number2 + "?" ;
}

function gameResult(text){
	var playerResult=parseInt(text);
	return (number1 + number2) == playerResult;
}

function init(){
	setTitle();
	number1=Math.floor((Math.random() * 200) + 1);
	number2=Math.floor((Math.random() * 200) + 1);
}

function onFinishGame(win){
	if(win){
		init();
	}
	document.getElementById('message').innerText = '...';
}