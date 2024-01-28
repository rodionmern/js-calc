var footerCopyleft;

function firstCopyleft() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Rofionenko(RodionMern) | Non Copyright"	
} function secondCopyleft() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Copyleft (c) 2024 | RodionMern(Rofionenko)"	
} function defaultCopyleft(){
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Copyleft (c) RodionMern (Rofionenko)"	
}

function footerCopyleft() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "(C)opyleft 2024 / Rofionenko(RodionMern)";
	setTimeout(firstCopyleft, 2500); setTimeout(secondCopyleft, 5000); setTimeout(defaultCopyleft, 7500)
}
