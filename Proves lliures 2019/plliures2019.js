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
		"tramit":"Obertura d'expedient",
		"document": "Model 046",
		"quota":[
		]
		"ord":{
			"textBoto": "Pagau (23,92 €)",
			"nouAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6143",
				"urlInfo":""
			}
		},
		"fng":{
			"textBoto": "Pagau (11,96 €)",
			"nouAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6146",
				"urlInfo":""
			}
		}
	},
	"serveisGenerals":{
		"tramit":"Serveis generals",
		"document": "Model 046",
		"ord":{
			"textBoto": "Pagau (11,39 €)",
			"nouAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6144",
				"urlInfo":""
			},
			"anticAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6149",
				"urlInfo":""
			}
		},
		"fng":{
			"textBoto": "Pagau (5,70 €)",
			"nouAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6147",
				"urlInfo":""
			},
			"anticAlumne":{
				"urlTramit":"https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6151",
				"urlInfo":""
			}
		}
	}
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
		"urlTramit":"hhttps://www.eoimanacor.com/adaptacions-proves-de-certificacio/",
		"urlInfo":"https://www.eoimanacor.com/adaptacions-proves-de-certificacio/"
	},

	"proteccioDades":{
		"tramit":"Autorització ús dades personals",
		"document":"Imprès d'autorització",
		"textBoto":"Imprimiu",
		"urlTramit":"https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/06/28082538/AUTORITZACIO-US-DADES-PERSONALS.pdf",
		"urlInfo":"https://www.eoimanacor.com/us-de-dades-personals/"
	}
	"zonaInfluencia":{
		"tramit":"Zona d'influència",
		"document":"Justificant adscripció a la zona d'influència",
		"urlInfo":"https://www.eoimanacor.com/zones-dinfluencia/"
	}
}

// Creació plantilla objecte alumne
class alumneSchema{
	
	constructor(anticAlumne, matriculat1819, nombreMatricules, situacioTaxes, adaptacio, trasllat){
		this.anticAlumne=anticAlumne;
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

	afegeixPagament(taxa, situacio){
		console.log(taxa[situacio].urlTramit)
	}
}

function Calcula(){

	var anticAlumne=document.getElementById('anticAlumne').checked,
		matriculat1819=document.getElementById('alumnePresencialSi').checked,
		nombreMatricules=document.getElementById('nombreMatricules').value,
		situacioTaxes=document.getElementById('situacio').value,
		adaptacio=document.getElementById('adaptacio').checked,
		trasllat=document.getElementById('trasllat').checked;

	Alumne = new alumneSchema(anticAlumne, matriculat1819, nombreMatricules, situacioTaxes, adaptacio, trasllat);

	Alumne.afegeixTramit(tramits.matrTelematica);

	if (Alumne.matriculat1819){
		Alumne.afegeixTramit(tramits.proteccioDades);
	}

	if (Alumne.adaptacio){
		Alumne.afegeixTramit(tramits.adaptacioExamen);
	}

	if (!Alumne.anticAlumne){
		Alumne.afegeixPagament(taxes.oberturaExpedient, Alumne.situacioTaxes);
	}

	document.getElementById('tramits').style.display='block';


}

