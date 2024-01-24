var footerCopyleft;

function Copyleft1() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Rofionenko(RodionMern) | Non Copyright"	
} function Copyleft2() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Copyleft (c) 2024 | RodionMern(Rofionenko)"	
} function CopyleftDefault() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "Copyleft (c) RodionMern (Rofionenko)"	
}

function Footer() {
	footerCopyleft = document.getElementById('footer__copyleft').innerHTML = "(C)opyleft 2024 / Rofionenko(RodionMern)";
	setTimeout(Copyleft1, 2500); setTimeout(Copyleft2, 5000); setTimeout(CopyleftDefault, 7500)
}
