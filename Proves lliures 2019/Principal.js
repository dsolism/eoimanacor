
//Tanca la finestra modal amb les novetats de 2019
function tancaModal(){
	document.getElementById("novetats19").style.display="none";
}

//Mostra la finestra modal amb les novetats de 2019
function mostraModal(){
	document.getElementById("novetats19").style.display="initial";
}

// Mostra popup d'atenció al públic
function mostraAP(){
	var popup = document.getElementById("apPopup");
	popup.classList.toggle("show");
	document.getElementById('atencioPublic').classList.toggle("destacat");
}