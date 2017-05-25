var a = document.querySelector('.a');
var b = document.querySelector('.b');
var btn = document.querySelector('.submit');
var clear = document.querySelector('.clear');
var answer = document.querySelector('.answer');

clear.addEventListener('click', onClear);
btn.addEventListener('click', onSubmit);

function onClear(){
	a.value = "";
	b.value = "";
	a.focus();
}
function onSubmit(){
	aInt = parseInt(a.value);
	bInt = parseInt(b.value);

	convert(aInt, bInt);
}
function convert(aInt, bInt){
	var converted = aInt / bInt;
	var completelyConverted = parseFloat(Math.round(converted * 1000) / 1000).toFixed(3);
	answer.textContent = completelyConverted;
}