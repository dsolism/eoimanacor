// Si l'usuari declara ser antic alumne, mostram les preguntes referents a la
// seva antiguitat: si ja està matriculat al curs acadèmic actual i si s'ha de
// demanar trasllat d'expedient*/
function mostraAnticAlumne(mostrarPreguntes){
	

	apartat=document.getElementById('preguntesAnticAlumne')
	

	if (mostrarPreguntes) {
		/*Feim que les dues preguntes siguin visibles i de resposta obligatòria*/
		apartat.style.display='block';
		document.getElementsByName('alumnePresencial')[0].required=true;
	} else{
		/*Amagam les dues preguntes i les posam com a no obligatòries*/
		apartat.style.display='none';
		document.getElementsByName('alumnePresencial')[0].required=false;
	}
}

// Definició de tràmits i documents ("base de dades")
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
	"Matrícula":{
		"tramit": "Pagament matrícula",
		"document": "Model 046",
		"ord":{
			"textBoto":"Pagau (150,38)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6142",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6148"
		},
		"fng":{
			"textBoto":"Pagau (22,79)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6145",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6150"
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
		"urlTramit":"https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2019/01/28205526/Sol%C2%B7licitud_adaptaci%C3%B3.pdf",
		"urlInfo":"https://www.eoimanacor.com/adaptacions-proves-de-certificacio/"
	},

	"proteccioDades":{
		"tramit":"Autorització ús dades personals",
		"document":"Imprès d'autorització",
		"textBoto":"Imprimiu",
		"urlTramit":"https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/06/28082538/AUTORITZACIO-US-DADES-PERSONALS.pdf",
		"urlInfo":"https://www.eoimanacor.com/us-de-dades-personals/"
	},

	"trasllatExpedient":{
		"tramit":"Trasllat d'expedient",
		"document":"Sol·licitud de trasllat",
		"textBoto":"Imprimiu",
		"urlTramit":"http://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/03/20160359/Sol%C2%B7licitud-trasllat-expedient.pdf",
		"urlInfo":"https://www.eoimanacor.com/trasllat-de-matricula/"
	}
}

const altresDocuments = {

	"fotocopiaDNI":{
		"document":"Fotocòpia DNI/NIE"
	},
	"justZonaInfluencia":{
		"document":"Justificant zona d'influència",
		"urlInfo":"https://www.eoimanacor.com/zones-dinfluencia/"
	},
	"infPeriodeInin":{
		"document":"Informe de periode ininterromput inscrit en situació de desocupació"
	},
	"familiaNombrosa":{
		"document":"Títol família nombrosa"
	},
	"cercDiscapacitat":{
		"document":"Certificació de discapacitat"
	},
	"vicTerrorisme":{
		"document":"Certificat de víctima de terrorisme"
	},
	"vicGenere":{
		"document":"Ordre allunyament en vigor"
	},
	"joveTutelat":{
		"document":"Document de tutela"
	},
	"privLlibertat":{
		"document":"Document acreditatiu de la privació de llibertat"
	},
	"vulnerabilitatEconomica":{
		"document":"Informe emès pels serveis socials"
	}
}

const nivell = ['primer', 'segon', 'tercer', 'quart', 'cinquè', 'sisè'];

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


	afegeixTramit(paramTramit, unitats=0){
		
		var boto = '<a href="'+paramTramit.urlTramit+'" target="_blank"><button>'+paramTramit.textBoto+'</button></a>';
		var info = '<a href="'+paramTramit.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var textTramit = paramTramit.tramit;

		if (unitats!=0){
			textTramit += ' ' + nivell[unitats] + ' nivell';
		}

		var linia ='<tr><td>'+textTramit+'</td><td>'+paramTramit.document+'</td><td>'+boto+'</td><td>'+info+'</td></tr>';

		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);
	}

	afegeixPagament(taxa, situacio, condicio, unitats=0){

		var boto = '<a href="'+taxa[situacio][condicio]+'" target="_blank"><button>'+taxa[situacio].textBoto+'</button></a>';
		var info = '<a href="'+taxes.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var textTramit = taxa.tramit;

		if (unitats!=0){
			textTramit += ' ' + nivell[unitats] + ' nivell';
		}

		var linia ='<tr><td>'+textTramit+'</td><td>'+taxa.document+'</td><td>'+boto+'</td><td>'+info+'</td></tr>';
		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);

	}

	afegeixDocument(paramDoc){

		var linia='<li>'+paramDoc['document'];
		if (paramDoc['urlInfo']!=undefined){
			linia+='<a href="'+paramDoc['urlInfo']+'" target="_blank"> (+ info)</a>'
		}
		linia+='</li>'
		document.getElementById('docAddicionals').lastElementChild.insertAdjacentHTML('beforeend', linia)
	}
}

// Funció principal que obté els tràmits i documents a presentar
function Calcula(){

	// Llevam els possibles resultats del formulari, per si l'han fet servir més d'una vegada
	Neteja(false);

	// Recollim els valors del formulari
	var condicioAlumne=document.getElementById('anticAlumne').checked,
		matriculat1819=document.getElementById('alumnePresencialSi').checked,
		nombreMatricules=document.getElementById('nombreMatricules').value,
		situacioTaxes=document.getElementById('situacio').value,
		adaptacio=document.getElementById('adaptacio').checked,
		trasllat=document.getElementById('trasllat').checked;

	// Cream l'objecte alumne
	Alumne = new alumneSchema(condicioAlumne, matriculat1819, nombreMatricules, situacioTaxes, adaptacio, trasllat);

	for (i=0;i<Alumne.nombreMatricules;i++){
		Alumne.afegeixTramit(tramits.matrTelematica, i);
	}
	

	// Documentacó per alumnes no matriculats com a oficials al present 2018-19
	if (!Alumne.matriculat1819){
		Alumne.afegeixTramit(tramits.proteccioDades);
		Alumne.afegeixDocument(altresDocuments.fotocopiaDNI);
		Alumne.afegeixDocument(altresDocuments.justZonaInfluencia);
	}

	// Sol·licitud d'adaptació
	if (Alumne.adaptacio){
		Alumne.afegeixTramit(tramits.adaptacioExamen);
	}

	// Sol·licitud de trasllat
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
			Alumne.afegeixPagament(taxes.dretsExamen, Alumne.situacioTaxes, Alumne.condicioAlumne, i);
		}

		// Si és família nombrosa general, sol·licitam també el títol corresponent
		if (Alumne.situacioTaxes=='fng'){
			Alumne.afegeixDocument(altresDocuments.familiaNombrosa);
		}
	}else{ // L'alumne té exempció o bonificació

		switch (Alumne.situacioTaxes){
			case "atur":
				Alumne.afegeixDocument(altresDocuments.infPeriodeInin);
				break;			
			case "fne":
				Alumne.afegeixDocument(altresDocuments.familiaNombrosa);
				break;
			case "disc":
				Alumne.afegeixDocument(altresDocuments.cercDiscapacitat);
				break;
			case "terr":
				Alumne.afegeixDocument(altresDocuments.vicTerrorisme);
				break;
			case "gen":
				Alumne.afegeixDocument(altresDocuments.vicGenere);
				break;
			case "vulec":
				Alumne.afegeixDocument(altresDocuments.vulnerabilitatEconomica);
				break;
			case "tute":
				Alumne.afegeixDocument(altresDocuments.joveTutelat);
				break;
			case "llib":
				Alumne.afegeixDocument(altresDocuments.privLlibertat);
				break;
		}
	}

	document.getElementById('tramits').style.display='initial';
	if ((Alumne.situacioTaxes!='ord')||(!Alumne.matriculat1819)){
		document.getElementById('docAddicionals').style.display='initial';
	}else{

	}
}

// Restauració del formulari
function Neteja(netejaFormulari=true){

	// Buidam els resultats i els amagam
	var taulaDocuments=document.getElementById('taulaDocuments'),
		docAddicionals=document.getElementById('docAddicionals')
		tramitsDiv=document.getElementById('tramits');
	
	taulaDocuments.lastElementChild.innerHTML='';
	docAddicionals.lastElementChild.innerHTML='';

	tramitsDiv.style.display='none';
	docAddicionals.style.display='none';

	// Esborram la pregunta 'Estàs o has estat matriculat/ada com alumne presencial al curs 2018/19 a qualque escola oficial d'idiomes?'
	// si així ho rembem per paràmetre
	if (netejaFormulari){
		document.getElementById('preguntesAnticAlumne').style.display='none';
	}
}

// Mostra una missatge flotant si l'usuari posa el mouse damunt el botó 'question'
function mostraAvis(paramId){
	document.getElementById(paramId).style.display='initial';
}

// Amaga una missatge flotant si l'usuari posa el mouse damunt el botó 'question'
function amagaAvis(paramId){
	document.getElementById(paramId).style.display='none';
}