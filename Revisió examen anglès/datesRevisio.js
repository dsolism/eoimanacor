const datesRevisions = [
	{
		"nivell":"A2",
		"publicacio": new Date(2019, 5, 12, 19, 0, 0)
	},
	{
		"nivell":"Intermedi (B1)",
		"publicacio": new Date(2019, 5, 18, 17, 0, 0)
	},
	{
		"nivell":"Avançat (B2)",
		"publicacio": new Date(2019, 5, 18, 18, 0, 0)
	},
	{
		"nivell":"C1",
		"publicacio": new Date(2019, 5, 18, 19, 0, 0)
	},
	{
		"nivell":"C2",
		"publicacio": new Date(2019, 5, 18, 20, 0, 0)
	}
]

const diesPerMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function diaDelAny(date1){

	// Donada una data, calcula quin dia de l'any és, de l'1 al 365
	var diaNumero = 0;
	var mesosSencers = date1.getMonth()-1;
	for (i = 0; i < date1.getMonth(); i++) {
		diaNumero = diaNumero + diesPerMes[i];
	}
	diaNumero = diaNumero + date1.getDate();

	return(diaNumero);
}

function revisionsObertes(){

	// Calcula si estam dins termini de revisió d'examen i ho publica a la pàgina
	var avui = new Date();

	const horaLimit = 13;
	const minutLlimit = 30;
	var terminiObert = false;
	
	var textAvis = document.querySelector("div#revisionsObertes p");

	datesRevisions.forEach(examen=>{

		var diferenciaDies = diaDelAny(avui)-diaDelAny(examen.publicacio);

		// Si avui s'ha publicat les notes (diferenciaDies=0),
		// o si es varen publicar ahir (diferenciaDies=1) i encara no són les 13:30h, el termini per demanar sol·licitud està obert

		if ((diferenciaDies === 0) || ((diferenciaDies === 1) && (avui.getHours()<horaLimit)||((avui.getHours()===horaLimit)&&(avui.getMinutes()<=minutLlimit)))){
			terminiObert = true;
			textAvis.insertAdjacentHTML('beforeend', examen.nivell + ' ');
		}
	});

	if (terminiObert){
		var avisRevisionsObertes = document.getElementById("revisionsObertes");
		avisRevisionsObertes.style.display='block';
	}
}

window.onload = function(){
	revisionsObertes();
}