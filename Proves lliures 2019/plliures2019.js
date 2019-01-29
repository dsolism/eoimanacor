function mostraAnticAlumne(mostrarPreguntes){
	
	/*Si l'usuari declara ser antic alumne, mostram les preguntes referents a la seva antiguitat: si ja està matriculat al curs acadèmic actual i si s'ha de demanar trasllat d'expedient*/

	apartat=document.getElementById('preguntesAnticAlumne')
	

	if (mostrarPreguntes) {
		/*Feim que les dues preguntes siguin visibles i de resposta obligatòria*/
		apartat.style.display='block';
		document.getElementsByName('alumnePresencial')[0].required=true;
		// document.getElementsByName('trasllat')[0].required=true;
	} else{
		/*Amagam les dues preguntes i les posam com a no obligatòries*/
		apartat.style.display='none';
		document.getElementsByName('alumnePresencial')[0].required=false;
		// document.getElementsByName('trasllat')[0].required=false;
	}

}


const taxes = {
	"oberturaExpedient":{
		"tramit":"Pagament obertura d'expedient",
		"document": "Model 046",
		"ord":{
			"textBoto": "Pagau (23,92 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6143"
		},
		"fng":{
			"textBoto": "Pagau (11,96 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6146"
			
		}
	},
	"serveisGenerals":{
		"tramit":"Pagament serveis generals",
		"document": "Model 046",

		"ord":{
			"textBoto": "Pagau (11,39 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6144",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6149"
		},
		"fng":{
			"textBoto": "Pagau (5,70 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6147",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6151"
		}
	},
	"dretsExamen":{
		"tramit": "Pagament drets examen",
		"document": "Model 046",
		"ord":{
			"textBoto":"Pagau (45,57)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6078",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6084"
		},
		"fng":{
			"textBoto":"Pagau (22,79)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6081",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6086"
		}
	},
	"urlInfo":""
}

const tramits = {
	"matrTelematica":{
		"tramit":"Matrícula telemàtica",
		"document":"Resguard de matrícula",
		"textBoto":"Matriculau",
		"urlTramit":"https://www.informaticacentros.com/centrosnet/libres_mat/index.php?tcen=EOI&cen=PM4",
		"urlInfo":""
	},

	"adaptacioExamen":{
		"tramit":"Adaptació d'examen",
		"document":"Sol·licitud d'adaptació",
		"textBoto":"Imprimiu",
		"urlTramit":"https://www.eoimanacor.com/adaptacions-proves-de-certificacio/",
		"urlInfo":"https://www.eoimanacor.com/adaptacions-proves-de-certificacio/"
	},

	"proteccioDades":{
		"tramit":"Autorització ús dades personals",
		"document":"Imprès d'autorització",
		"textBoto":"Imprimiu",
		"urlTramit":"https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/06/28082538/AUTORITZACIO-US-DADES-PERSONALS.pdf",
		"urlInfo":"https://www.eoimanacor.com/us-de-dades-personals/"
	},
	"zonaInfluencia":{
		"tramit":"Zona d'influència",
		"document":"Justificant adscripció a la zona d'influència",
		"urlInfo":"https://www.eoimanacor.com/zones-dinfluencia/"
	},
	"trasllatExpedient":{
		"tramit":"Trasllat d'expedient",
		"document":"Sol·licitud de trasllat",
		"textBoto":"Imprimiu",
		"urlTramit":"http://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/03/20160359/Sol%C2%B7licitud-trasllat-expedient.pdf",
		"urlInfo":"https://www.eoimanacor.com/trasllat-de-matricula/"
	}
}

// Creació plantilla objecte alumne
class alumneSchema{
	
	constructor(condicioAlumne, matriculat1819, nombreMatricules, situacioTaxes, adaptacio, trasllat){
		
		if (condicioAlumne){
			this.condicioAlumne='anticAlumne';
		}else{
			this.condicioAlumne='nouAlumne';
		}
		
		this.matriculat1819=matriculat1819;
		this.nombreMatricules=nombreMatricules;
		this.situacioTaxes=situacioTaxes;
		this.adaptacio=adaptacio;
		this.trasllat=trasllat;
	}


	afegeixTramit(paramTramit){
		
		var boto = '<a href="'+paramTramit.urlTramit+'" target="_blank"><button>'+paramTramit.textBoto+'</button></a>';
		var info = '<a href="'+paramTramit.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var linia ='<tr><td>'+paramTramit.tramit+'</td><td>'+paramTramit.document+'</td><td>'+boto+'</td><td>'+info+'</td></tr>';
		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);
	}

	afegeixPagament(taxa, situacio, condicio){

		var boto = '<a href="'+taxa[situacio][condicio]+'" target="_blank"><button>'+taxa[situacio].textBoto+'</button></a>';
		var info = '<a href="'+taxes.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var linia ='<tr><td>'+taxa.tramit+'</td><td>'+taxa.document+'</td><td>'+boto+'</td><td>'+info+'</td></tr>';
		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);

	}
}

function Calcula(){

	// Llevam els possibles resultats del formulari, per si l'han fet servir més d'una vegada
	Neteja();

	// Recollim els valors del formulari
	var condicioAlumne=document.getElementById('anticAlumne').checked,
		matriculat1819=document.getElementById('alumnePresencialSi').checked,
		nombreMatricules=document.getElementById('nombreMatricules').value,
		situacioTaxes=document.getElementById('situacio').value,
		adaptacio=document.getElementById('adaptacio').checked,
		trasllat=document.getElementById('trasllat').checked;

	// Cream l'objecte alumne
	Alumne = new alumneSchema(condicioAlumne, matriculat1819, nombreMatricules, situacioTaxes, adaptacio, trasllat);

	Alumne.afegeixTramit(tramits.matrTelematica);

	if (!Alumne.matriculat1819){
		Alumne.afegeixTramit(tramits.proteccioDades);
	}

	if (Alumne.adaptacio){
		Alumne.afegeixTramit(tramits.adaptacioExamen);
	}

	if (Alumne.trasllat){
		Alumne.afegeixTramit(tramits.trasllatExpedient);
	}

	// Taxes (només si és ordinari o família nombrosa general)
	if ((Alumne.situacioTaxes=='ord')||(Alumne.situacioTaxes=='fng')){

		// Obertura d'expedient
		if (Alumne.condicioAlumne=='nouAlumne'){
			Alumne.afegeixPagament(taxes.oberturaExpedient, Alumne.situacioTaxes, Alumne.condicioAlumne);
		}

		// Serveis generals: només si no està matriculat com alumne presencial al curs actual
		if (!Alumne.matriculat1819){
			Alumne.afegeixPagament(taxes.serveisGenerals, Alumne.situacioTaxes, Alumne.condicioAlumne);
		}

		// Drets d'examen: un pagament per cada idioma i nivell
		for(i=0;i<Alumne.nombreMatricules;i++){
			Alumne.afegeixPagament(taxes.dretsExamen, Alumne.situacioTaxes, Alumne.condicioAlumne);
		}
	}else{

	}

	document.getElementById('tramits').style.display='block';
}

function Neteja(){

	// Buidam els resultats i els amagam
	var taulaDocuments=document.getElementById('taulaDocuments'),
		docAddicionals=document.getElementById('docAddicionals');
		tramitsDiv=document.getElementById('tramits');
	
	taulaDocuments.lastElementChild.innerHTML='';
	docAddicionals.innerHTML='';

	tramitsDiv.style.display='none';
	docAddicionals.style.display='none';
}

