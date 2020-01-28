
function eoi_tatxa(numero=100){
	document.getElementsByTagName("label")[numero].classList.toggle("tatxat")
	document.getElementsByClassName("linia")[numero].classList.toggle("arxivat")
}

function eoi_reset(){

	const items = document.getElementsByClassName("linia")
	const etiquetes = document.getElementsByTagName("label")
	const nombreElements = items.length

	if (nombreElements>0){
		for(i=0;i<nombreElements;i++){
			items[i].classList.remove("arxivat")
			etiquetes[i].classList.remove("tatxat")
		}
	}
}

