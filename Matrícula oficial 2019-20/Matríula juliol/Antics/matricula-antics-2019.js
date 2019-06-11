// Si l'usuari declara ser antic alumne, mostram les preguntes referents a la
// seva antiguitat: si ja està matriculat al curs acadèmic actual i si s'ha de
// demanar trasllat d'expedient

function mostraMatriculaAnterior(mostrarPreguntes){

	apartat=document.getElementById('preguntesMatriculaAnterior');

	if (mostrarPreguntes) {
		// Mostram les preguntes referents a la matrícula anterior
		apartat.style.display='block';
	} else{
		// Amagam les peguntes referents a la matrícula anterior
		// i posam les caselles com a 'no marcades'
		apartat.style.display='none';
		document.getElementById('matriculat1920').checked=false;
		document.getElementById('trasllatExp').checked=false;
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
			
		},
		"fmpg":{
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
		},
		"fmpg":{
			"textBoto": "Pagau (5,70 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6147",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6151"
		}
	},
	"dretsExamen":{
		"tramit": "Pagament drets examen",
		"document": "Model 046",
		"ord":{
			"textBoto":"Pagau (45,57 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6078",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6084"
		},
		"fng":{
			"textBoto":"Pagau (22,79 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6081",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6086"
		},
		"fmpg":{
			"textBoto":"Pagau (22,79 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6081",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6086"
		}
	},
	"Matrícula":{
		"tramit": "Pagament matrícula",
		"document": "Model 046",
		"ord":{
			"textBoto":"Pagau (150,38 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6142",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6148"
		},
		"fng":{
			"textBoto":"Pagau (75,19 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6145",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6150"
		},
		"fmpg":{
			"textBoto":"Pagau (75,19 €)",
			"nouAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6145",
			"anticAlumne":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6150"
		}
	},
	"quotaComplementaria":{
		"tramit":"Quota complementària (10€ per idioma)",
		"document":"Justificant ingrés al compte <strong>ES65 2038 6579 8460 0042 0276</strong> (Bankia) per valor de ",
		"textBoto":"",
		"urlInfo": "https://www.eoimanacor.com/quota-complementaria/"
	},
	"urlInfo":"https://www.eoimanacor.com/pagament-taxes-matricula-presencial/"
}

const tramits = {
	"matrTelematica":{
		"tramit":"Matrícula telemàtica",
		"document":"Resguard de matrícula",
		"textBoto":"Matriculau",
		"urlTramit":"https://www.informaticacentros.com/centrosnet/ultralogin.php?tcentro=EOI&centro=PM4",
		"urlInfo":"https://www.eoimanacor.com/matricula-telematica/"		
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
	},

	"autoritzacioMenordEdat":{
		"tramit":"Dades pares/tutors",
		"document":"Full de menors",
		"textBoto":"Imprimiu",
		"urlTramit":"https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2019/06/04192150/Full-menors.pdf",
		"urlInfo":"https://www.eoimanacor.com/informacio-als-pares-dels-alumnes-menors-dedat/"
	}
}

const altresDocuments = {

	"fotocopiaDNI":{
		"document":"Fotocòpia DNI/NIE"
	},
	"justZonaInfluencia":{
		"document":"Justificant zona d'influència",
		"urlInfo":"https://www.eoimanacor.com/zones-dinfluencia/",
		"popup":"<span class='contenidorAvis' onclick=\"mostra('popup',2)\"><i class='fas fa-question-circle'></i><span id='popup' class='avis ocult'>Es justifica amb un dels documents següents:<ul><li>Certificat d'empadronament</li><li>Contracte laboral</li><li>Certificat de matrícula</li></ul></span></span>"
	},
	"infPeriodeInin":{
		"document":"Exempció de pagament per estar en atur: Informe de periode ininterromput inscrit en situació de desocupació (no s'acceptarà cap altre document)"
	},
	"familiaNombrosa":{
		"document":"Exempció o bonificació de pagament per família nombrosa: original i fotocòpia del títol família nombrosa (<a href='https://www.eoimanacor.com/taxes/#fnmp' target='_blank'>Més informació</a>)"
	},
	"familiaMonop":{
		"document": "Exempció o bonificació de pagament per família monoparental: llibre de família o sentència judicial on consti la guàrdia i custòdia (<a href='https://www.eoimanacor.com/taxes/#fnmp' target='_blank'>Més informació</a>)"
	},
	"solBeca":{
		"document": "Justificant de sol·licitud de beca"
	},
	"cercDiscapacitat":{
		"document":"Exempció de pagament per discapacitat: certificació de discapacitat"
	},
	"vicTerrorisme":{
		"document":"Exempció de pagament per víctima de terrorisme: certificat emès pel Ministeri de l’Interior. En el cas del cònjuge i els fills o filles, s’hi ha d’adjuntar el llibre de família (<a href='https://www.eoimanacor.com/taxes/#vicTerrorisme' target='_blank'>Més informació</a>)."
	},
	"vicGenere":{
		"document":"Exempció de pagament per violència de gènere: sentència condemnàtoria, ordre d'allunyament o informe dels serveis socials. En el cas dels fills o filles, s’hi ha d’adjuntar el llibre de família (<a href='https://www.eoimanacor.com/taxes/#vicGenere' target='_blank'>Més informació</a>)"
	},
	"joveTutelat":{
		"document":"Exempció de pagament per ser jove tutelat o en acolliment familiar: certificat expedit per l'IMAS (<a href='https://www.eoimanacor.com/taxes/#vulnerabilitatEconomica' target='_blank'>Més informació</a>)"
	},
	"privLlibertat":{
		"document":"Exempció de pagament per privació de llibertat: resolució judicial (<a href='https://www.eoimanacor.com/taxes/#vulnerabilitatEconomica' target='_blank'>Més informació</a>)"
	},
	"vulnerabilitatEconomica":{
		"document":"Exempció de pagament per vulnerabilitat econòmica: certificat expedit per la Direcció General de Planificació i Serveis Socials o l'IMAS (<a href='https://www.eoimanacor.com/taxes/#vulnerabilitatEconomica' target='_blank'>Més informació</a>)"
	},
	"fotos":{
		"document":"Dues fotos grandària carnet"
	}
}

const nivell = ['primer', 'segon', 'tercer', 'quart', 'cinquè', 'sisè'];

// Creació plantilla objecte alumne
class alumneSchema{
	
	constructor(condicioAlumne, nombreMatricules, situacioTaxes, menordEdat, trasllat, matriculat1920){
		
		if (condicioAlumne){
			this.condicioAlumne='anticAlumne';
		}else{
			this.condicioAlumne='nouAlumne';
		}
		
		this.nombreMatricules=nombreMatricules;
		this.situacioTaxes=situacioTaxes;
		this.menordEdat=menordEdat;
		this.trasllat=trasllat;
		this.matriculat1920 = matriculat1920;
	}


	afegeixTramit(paramTramit, unitats=0){
		
		var boto = '<a href="'+paramTramit.urlTramit+'" target="_blank"><button class="botoVerd2">'+paramTramit.textBoto+'</button></a>';
		var info = '<a href="'+paramTramit.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var textTramit = paramTramit.tramit;

		if (unitats!=0){
			textTramit += ' ' + nivell[unitats] + ' idioma';
		}

		var linia ='<tr><td>'+textTramit+'</td><td>'+paramTramit.document+'</td><td>'+boto+'</td><td class=\'centrat\'>'+info+'</td></tr>';

		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);
	}

	afegeixPagament(taxa, situacio, condicio, unitats=0){

		var boto = '<a href="'+taxa[situacio][condicio]+'" target="_blank"><button class="botoVerd2">'+taxa[situacio].textBoto+'</button></a>';
		var info = '<a href="'+taxes.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var textTramit = taxa.tramit;

		if (unitats!=0){
			textTramit += ' ' + nivell[unitats] + ' idioma';
		}

		var linia ='<tr><td>'+textTramit+'</td><td>'+taxa.document+'</td><td>'+boto+'</td><td class=\'centrat\'>'+info+'</td></tr>';
		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);

	}

	afegeixQuotaComplementaria(unitats){

		var importaPagar= 10 * unitats;
		var justificant = taxes.quotaComplementaria.document +'<strong>'+ importaPagar + ' euros</strong>';
		var info = '<a href="'+taxes.quotaComplementaria.urlInfo+'" target="_blank"><i class="fas fa-info-circle"></i></a>';
		var linia = '<tr><td>'+ taxes.quotaComplementaria.tramit + '</td><td colspan="2">' + justificant + '</td><td class=\'centrat\'>'+ info +'</td></tr>';

		document.getElementById('taulaDocuments').lastElementChild.insertAdjacentHTML('beforeend', linia);

	}

	afegeixDocument(paramDoc){

		var linia='<li>'+paramDoc['document'];

		// Si té popup, l'afegim
		if (paramDoc['popup']!=undefined){
			linia+= paramDoc['popup'];
		}

		// Si té pàgina d'informació, l'afegim
		if (paramDoc['urlInfo']!=undefined){
			linia+='<a href="'+paramDoc['urlInfo']+'" target="_blank"> (+ info)</a>'
		}
		
		linia+='</li>'

		document.querySelector('#docAddicionals ul').insertAdjacentHTML('beforeend', linia);
	}
}

// Funció principal que obté els tràmits i documents a presentar
function Calcula(){

	avisData();

	// Llevam els possibles resultats del formulari, per si l'han fet servir més d'una vegada
	Neteja(false);

	// Recollim els valors del formulari
	var condicioAlumne='anticAlumne',
		trasllat=false,
		nombreMatricules=document.getElementById('nombreMatricules').value,
		situacioTaxes=document.getElementById('situacio').value,
		menordEdat=document.getElementById('majordEdatNo').checked,
		matriculat1920 = false;

	// Cream l'objecte alumne
	Alumne = new alumneSchema(condicioAlumne, nombreMatricules, situacioTaxes, menordEdat, trasllat, matriculat1920);

	// Afegim tantex matrícules telemàtiques com nombre d'idiomes en què es matricula l'alumne
	for (i=0;i<Alumne.nombreMatricules;i++){
		Alumne.afegeixTramit(tramits.matrTelematica, i);
	}

	// Si és menor d'edat, afegim el full de menors
	if (Alumne.menordEdat){
		Alumne.afegeixTramit(tramits.autoritzacioMenordEdat);
	}

	// Si és nou alumne, demanam 2 fotos i la fotocòpia del DNI
	if (Alumne.condicioAlumne=='nouAlumne'){
		Alumne.afegeixDocument(altresDocuments.fotocopiaDNI);
		Alumne.afegeixDocument(altresDocuments.fotos);
	}

	// Sol·licitud de trasllat
	if (Alumne.trasllat){
		Alumne.afegeixTramit(tramits.trasllatExpedient);
	}

	// Taxes o document d'exempció
	CalculaTaxes(Alumne);

	// Quota complementària, 10€ per idioma, obligatòria per tothom
	Alumne.afegeixQuotaComplementaria(Alumne.nombreMatricules);

	// Feim l'apartat tràmits visible
	document.getElementById('tramits').style.display='block';

	// Si l'alumne té exempció de pagament de taxes o és nou alumne, haurà d'aportar documentació addicional
	// Per això feim aquest apartat visible
	if ((Alumne.situacioTaxes!='ord')||(Alumne.condicioAlumne=='nouAlumne')){
		document.getElementById('docAddicionals').style.display='block';
	}
}

function CalculaTaxes(paramAlumne){

	// Taxes només si és ordinari, família nombrosa general o família monoparental general
	if ((paramAlumne.situacioTaxes=='ord')||(paramAlumne.situacioTaxes=='fng')||(paramAlumne.situacioTaxes=='fmpg')){

		// Obertura d'expedient
		if (paramAlumne.condicioAlumne=='nouAlumne'){
			paramAlumne.afegeixPagament(taxes.oberturaExpedient, paramAlumne.situacioTaxes, paramAlumne.condicioAlumne);
		}

		// Serveis generals
		if (!paramAlumne.matriculat1920){
			paramAlumne.afegeixPagament(taxes.serveisGenerals, paramAlumne.situacioTaxes, paramAlumne.condicioAlumne);
		}

		// Drets d'examen: un pagament per cada idioma i nivell
		for(i=0;i<paramAlumne.nombreMatricules;i++){
			paramAlumne.afegeixPagament(taxes.Matrícula, paramAlumne.situacioTaxes, paramAlumne.condicioAlumne, i);
		}

		// Si és família nombrosa general, sol·licitam també el títol corresponent
		if (paramAlumne.situacioTaxes=='fng'){
			paramAlumne.afegeixDocument(altresDocuments.familiaNombrosa);
		} else{
			if (paramAlumne.situacioTaxes=='fmpg'){
				paramAlumne.afegeixDocument(altresDocuments.familiaMonop);
			}
		}

	}else{ // L'alumne té exempció o bonificació

		switch (paramAlumne.situacioTaxes){
			case "atur":
				paramAlumne.afegeixDocument(altresDocuments.infPeriodeInin);
				break;			
			case "fne":
				paramAlumne.afegeixDocument(altresDocuments.familiaNombrosa);
				break;
			case "fmpe":
				paramAlumne.afegeixDocument(altresDocuments.familiaMonop);
				break;
			case "beca":
				paramAlumne.afegeixDocument(altresDocuments.solBeca);
				break;
			case "disc":
				paramAlumne.afegeixDocument(altresDocuments.cercDiscapacitat);
				break;
			case "terr":
				Alumne.afegeixDocument(altresDocuments.vicTerrorisme);
				break;
			case "gen":
				paramAlumne.afegeixDocument(altresDocuments.vicGenere);
				break;
			case "vulec":
				paramAlumne.afegeixDocument(altresDocuments.vulnerabilitatEconomica);
				break;
			case "tute":
				paramAlumne.afegeixDocument(altresDocuments.joveTutelat);
				break;
			case "llib":
				paramAlumne.afegeixDocument(altresDocuments.privLlibertat);
				break;
		}
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
}

// Funció que regula l'avís que sortirà quan l'usuari vulgui saber els documents que ha de lliurar
function avisData(){

	var inici = new Date(2019, 5, 21, 9,0,0),
		final = new Date(2019, 5, 28, 22, 0, 0),
		avui = new Date(),
		avis;

	if ((avui<inici)||(avui>final)){
		avis='El termini no està obert. Podeu consultar els documents només a títol informatiu.'
	}else{
		avis='Recordau que fins que no hàgiu presentat els documents a la Secretaria del centre no es considerarà formalitzada la matrícula.'
	}
	alert(avis);
}