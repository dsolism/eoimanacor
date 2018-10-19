class taula{

	constructor(id_lloc, id_taula) {

		this.id_taula=id_taula;
		this.id_lloc=id_lloc;

		document.getElementById(id_lloc).insertAdjacentHTML('beforeend', '<table id="'+id_taula+'"><thead></thead><tbody></tbody></table>');
	}

	afegir_document_rowspan(rowspan=2, texto, texto2="", texto3="", texto4=""){

		/*Agrupa documents que tenen la mateixa pàgina d'informació*/
		document.getElementById(this.id_taula).lastElementChild.insertAdjacentHTML('beforeend',"<tr><td>"+texto+"</td><td class='centrat'>"+texto2+"</td><td class='centrat'>"+texto3+"</td>"+"</td><td class='centrat' rowspan='"+rowspan+"'>"+texto4+"</td></tr>");
	}

	afegir_document_colspan(numero_columnes=4, texto, texto2="", texto3="", texto4=""){

		
		/*Els únics valors possibles de numero_columnes són 3 ò 4*/
		/*La feim servir quan després d'una fila amb rowspan >1 (veure afegir_document_rowspan)*/
		if (numero_columnes==4){
			document.getElementById(this.id_taula).lastElementChild.insertAdjacentHTML('beforeend',"<tr><td>"+texto+"</td><td class='centrat'>"+texto2+"</td><td class='centrat'>"+texto3+"</td>"+"<td class='centrat'>"+texto4+"</td></tr>");
		}else{
			document.getElementById(this.id_taula).lastElementChild.insertAdjacentHTML('beforeend',"<tr><td>"+texto+"</td><td class='centrat'>"+texto2+"</td>"+"<td class='centrat'>"+texto3+"</td></tr>");}			
		}

	afeir_quota_complementaria(quota_total){
		document.getElementById(this.id_taula).lastElementChild.insertAdjacentHTML('beforeend',"<tr><td>Quota complementària<br>(10€ per idioma)</td><td colspan='2'>Justificant ingrés per valor de <strong>"+quota_total+" euros</strong><br>al compte <strong>ES65 2038 6579 8460 0042 0276 (Bankia)</strong></td>"+"<td class='centrat'><a href='https://www.eoimanacor.com/quota-complementaria/' target='_blank'><i class='fas fa-info-circle'></i></a></td></tr>");
	}

	buidar_taula(){

		/*Esborra la taula quan l'usuari torna fer clic a 'Calcula'*/
		document.getElementById(this.id_lloc).innerHTML = '<table id="'+this.id_taula+'"><thead></thead><tbody></tbody></table>';
	}
	
	titol_taula(text){

		document.getElementById(this.id_taula).firstElementChild.insertAdjacentHTML('beforebegin', '<caption>'+text+'</caption>');
		
	}
	
	capsalera_taula(texto, texto2, texto3, texto4){
		
		document.getElementById(this.id_taula).firstElementChild.insertAdjacentHTML("beforeend","<tr><th>"+texto+"</th><th>"+texto2+"</th><th>"+texto3+"</th>"+"<th>"+texto4+"</th></tr>");
	}
}

class llista{

	constructor(id_lloc, id_llista){

		this.id_llista=id_llista;
		this.id_lloc=id_lloc;

		document.getElementById(id_lloc).insertAdjacentHTML('afterbegin', '<ul id="'+id_llista+'"></ul>');
	}

	afegir_item(texto1){
		document.getElementById(this.id_llista).insertAdjacentHTML('beforeend','<li>'+texto1+'</li>');
	}

	buidar_llista(){
		document.getElementById(this.id_lloc).innerHTML = '<ul id=\''+this.id_llista+'\'</ul>';
	}

	titol_llista(text){
		
		document.getElementById(this.id_llista).insertAdjacentHTML('beforeend', "<p class='ttaula'>"+text+"</p>");
	}
}

window.onload=function(){
	doc_obl=new taula("resultat_tramits", "tramits");
	doc_alumne=new llista ("resultat_documents", "documents_alumne");
	document.getElementById("formulari_alumnes").reset();
}

function mostra_pregunta_antic_alumne(valor){
	
	if (valor){
		document.getElementById("antic_alumne_EOIManacor").style.display="initial";
	}
	else{
		document.getElementById("antic_alumne_EOIManacor").style.display="none";
	}
	
}

function mostra_pregunta_ja_matriculat(valor){
	
	if (valor){
		document.getElementById("ja_matriculat_1819").style.display="initial";
	}
	else{
		document.getElementById("ja_matriculat_1819").style.display="none";
	}
	
}

function condicio_alumne(){

	/* -1: Error (condició no especificada)
	0: nou alumne
	1: antic alumne EOI Manacor
	2: antic alumne + trasllat d'expedient
	3: ja matriculat 2018/19*/

	var antic_alumne=document.getElementById("antic_alumne").checked;
	var nou_alumne=document.getElementById("nou_alumne").checked;
	var trasllat_si=document.getElementById("trasllat_si").checked;
	var trasllat_no=document.getElementById("trasllat_no").checked;
	var jaMatriculatSi=document.getElementById("ja_matriculat_si").checked;
	var jaMatriculatNo=document.getElementById("ja_matriculat_no").checked;

	condicio=-1;
		
	if (nou_alumne){
		condicio=0;
	}else{
		if (antic_alumne){
			if (jaMatriculatSi){
				condicio=3;	
			}else{
				if (jaMatriculatNo){
					if (trasllat_si){
						condicio=2
					}else{
						if (trasllat_no){
							condicio=1;
						}else{
							alert ("Especificau si la darrera matrícula va ser a l'EOI Manacor.")
						}
					}
				}else{
					alert ("Especificau si ja estau matriculat al curs 2018/19 a un altre idioma");
				}
			}
		}else{
			alert("Especificau si ja heu estat matriculat a qualque EOI");
		}
	}

	return condicio;

}

function majoria_edat(){

	majordevuit = document.getElementById("majoredat_si").checked;
	menordevuit = document.getElementById("majoredat_no").checked;

	if (majordevuit){
		return true;
	}else{
		if(menordevuit){
			return false;
		}else{
			
		}
	}

}

function validar_formulari(){
	
	neteja_formulari();

	condicio=condicio_alumne();

	if (condicio!=-1){

		major_edat=majoria_edat();

		if (major_edat==undefined){
			alert("Especifica si tens 18 anys o més");
		}else{
			situacio=document.getElementById("situacio_taxa").selectedIndex;
			if (situacio==0){
				alert("Especifica la teva situació");
			}else{
				nombre_idiomes=document.getElementById("nombre_idiomes").value;
				if (nombre_idiomes<1 || nombre_idiomes>3){
					alert("El nombre d'idiomes introduït no és correcte");
				}else{
					if (condicio==0 && nombre_idiomes>2){
						alert("Els nous alumnes no es poden matricular a més de dos idiomes");
					}
					else{
				
						/* El formulari ha estat correctament emplenat*/
						recordatori();
						mostra_perfil("resultat_perfil", condicio, major_edat, situacio, nombre_idiomes);
						calcula_docs(condicio, major_edat, situacio, nombre_idiomes);
						calcula_taxes(condicio, situacio, nombre_idiomes);
						doc_obl.titol_taula("Tràmits");
					}
				}
			}

		}
	}
}

function recordatori(){
	periode=determina_periode_matrícula();
	if (periode==-1){
		document.getElementById("recordatori").innerHTML='<p><i class="fas fa-exclamation-triangle"></i>AQUEST PROCEDIMENT NO ES TROBA OBERT. PODEU CONSULTAR ELS DOCUMENTS QUE HEU DE PRESENTAR NOMÉS A TÍTOL INFORMATIU.</p>';
	}else{
		document.getElementById("recordatori").innerHTML='<p><i class="fas fa-exclamation-triangle"></i>RECORDAU QUE FINS QUE NO HÀGIU PRESENTAT ELS DOCUMENTS A LA SECRETARIA DEL CENTRE NO ES CONSIDERARÀ FORMALITZADA LA MATRÍCULA</p>';
	}
	
	document.getElementById("recordatori").style.border='2px solid red';
	document.getElementById("recordatori").style.color='red';
	document.getElementById("recordatori").style.fontWeight='bold';
}

function mostra_perfil(lloc, condicio, major_edat, situacio, nombre_idiomes){
	
	eoi_perfil="<ul>";
	if (condicio==0){
		eoi_perfil +='<li>Nou alumne</li>';
	}else{
		if (condicio==3){
			eoi_perfil += "<li>Alumne ja matriculat al curs 2018/19 a un altre idioma</li>";
		} else{
			if (condicio==1){
				eoi_perfil += "<li>Antic alumne de l'EOI Manacor</li>";
			} else {
				eoi_perfil += "<li>Antic alumne d'una altra EOI</li>";
			}
		}
	}

	if (major_edat==false){
		eoi_perfil += "<li>Menor d'edat</li>"
	}
	
	switch (situacio){
		case 1:
		eoi_perfil += "<li>Membre de família nombrosa GENERAL</li>";		
		break;			
		case 2:
		eoi_perfil += "<li>Membre de família nombrosa ESPECIAL</li>";			
		break;
		case 3:
		eoi_perfil += "<li>En situació de desocupació</li>";			
		break;			
		case 4:
		eoi_perfil += "<li>Pateix una discapacitat superior al 33%</li>";
		break;		
		case 5:
		eoi_perfil += "<li>Sol·licitant de beca</li>";
		break;
		case 6:
		eoi_perfil += "<li>Víctima de terrorisme</li>";
		break;
		case 7:
		eoi_perfil += "<li>Víctima de violència de gènere</li>";
		break;		
		case 8:
		eoi_perfil += "<li>Pagament de taxes: ordinari</li>";
	}
	
	eoi_perfil+="<li>Matrícula a "+nombre_idiomes+" ";
	
	if (nombre_idiomes==1){
		eoi_perfil+="idioma</li>";
	}else{
		eoi_perfil+="idiomes</li>";
	}
	
	eoi_perfil+="</ul><br>";
	
	
	
	document.getElementById(lloc).innerHTML=eoi_perfil;
}


function determina_periode_matrícula(){

	/*periode=-1 periode tancat
	periode=0 -> Antics alumnes, enllaç a Centrosnet
	periode=1 -> Nous alumnes, enllaç a preinscripció*/

	var ara=new Date();
	var matricula_oberta=new Date("Oct 11, 2018 0:00:01");
	var matricula_tancada=new Date("Oct 17, 2018 23:59:59");

	if((ara<matricula_oberta)||(ara>matricula_tancada)){
		periode=-1;
	}else{
		periode=1;
	}

	return periode;
}

function calcula_docs(condicio, major_edat, situacio, nombre_idiomes){
	
	doc_obl.capsalera_taula("Tràmit", "Document a presentar","Realitzau el tràmit", "Informació");


	doc_alumne.titol_llista("Documents addicionals a presentar");

	
	periode=determina_periode_matrícula();

	if (periode==-1){
		link_matricula="#";
		tramit='tramit_tancat';
	}else{
		tramit='tramit_obert';

		if (periode==0){/*Enllaç a Centrosnet*/
			link_matricula='https://www.informaticacentros.com/centrosnet/ultralogin.php?tcentro=EOI&centro=PM4\' target=\'_blank';
		}else{/*Enllaç a matrícula de preinscrits*/
			link_matricula='https://www.informaticacentros.com/centrosnet/libres_mat/index.php?tcen=EOI&cen=PM4\' target=\'_blank';
		}
		
	}
	
	/*Matrícula telemàtica*/
	if (nombre_idiomes==1){
		doc_obl.afegir_document_colspan(4,"Matrícula telemàtica","Resguard de matrícula" ,"<a href='"+link_matricula+"' rel='noopener'><button  class='"+tramit+"'>Matriculau</button></a>", "<a href='https://www.eoimanacor.com/matricula-telematica/' target='_blank'><i class='fas fa-info-circle'></i></a>");
	}else{
		doc_obl.afegir_document_rowspan(nombre_idiomes,"Matrícula telemàtica primer idioma","Resguard de matrícula", "<a href='"+link_matricula+"' rel='noopener'><button class='"+tramit+"'>Matriculau</button></a>", "<a href='https://www.eoimanacor.com/matricula-telematica/' target='_blank'><i class='fas fa-info-circle'></i></a>");
		doc_obl.afegir_document_colspan(3,"Matrícula telemàtica segon idioma","Resguard de matrícula", "<a href='"+link_matricula+"' rel='noopener'><button class='"+tramit+"'>Matriculau</button></a>");
	}
	if (nombre_idiomes==3){
		doc_obl.afegir_document_colspan(3,"Matrícula telemàtica tercer idioma","Resguard de matrícula", "<a href='"+link_matricula+"' rel='noopener'><button class='"+tramit+"'>Matriculau</button></a>");
	}


	/*Nou alumne/trasllat d'expedient*/
	if ((condicio==0)||(condicio==2)){ 
		doc_alumne.afegir_item("Fotocòpia DNI");
		doc_alumne.afegir_item("Dues fotos carnet");}

	/*Trasllat d'expedient*/
	if (condicio==2){ 
		doc_obl.afegir_document_colspan(4,"Trasllat d'expedient","Sol·licitud de trasllat d'expedient", "<a href='http://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/03/20160359/Sol%C2%B7licitud-trasllat-expedient.pdf' target='_blank' rel='noopener'><button>Imprimiu</button></a>",  "<a href='https://www.eoimanacor.com/trasllat-de-matricula/' target='_blank'><i class='fas fa-info-circle'></i></a>");
	}
	
	/*Si és antic alumne EOI Manacor, canet d'estudiant*/
	if ((condicio==1)||(condicio==3)){
		doc_alumne.afegir_item("Carnet d'estudiant (o una fotografia de carnet si l'heu predut)");
	}

	/*Menor d'edat*/
	if (major_edat==false){ 
		doc_obl.afegir_document_colspan(4, "Dades pares/tutors","Full de menors", "<a href='http://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/03/20160356/Full-dades-personals-pares-alumnes-menors.pdf' target='_blank' rel='noopener'><button>Imprimiu</button></a>", "<a href='https://www.eoimanacor.com/informacio-als-pares-dels-alumnes-menors-dedat/' target='_blank'><i class='fas fa-info-circle'></i></a>");
	}
	/*Protecció de dades*/
	doc_obl.afegir_document_colspan(4, "Autorització ús dades personals","Imprès d'autorització", "<a href='https://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/06/28082538/AUTORITZACIO-US-DADES-PERSONALS.pdf' target='_blank' rel='noopener'><button>Imprimiu</button></a>", "<a href='https://www.eoimanacor.com/us-de-dades-personals/' target='_blank'><i class='fas fa-info-circle'></i></a>");
}

function calcula_taxes(condicio, situacio, nombre_idiomes){
	
	switch (situacio){

		case 1:/*Família nombrosa GENERAL*/
		doc_alumne.afegir_item("Original i fotocòpia títol família nombrosa <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#familiesNombroses' target='_blank'><i class='fas fa-info-circle'></i></a>");

		periode=determina_periode_matrícula();
		
		if (condicio==0){/*Nou alumne*/

			numero_pagaments=2;
			numero_pagaments=numero_pagaments+Number(nombre_idiomes);



			link_taxa_obertura_FNG="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6146\' target=\'_blank\' ";
			link_taxa_serveis_generals_FNG="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6147\' target=\'_blank\' ";
			link_taxa_matricula_FNG="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6145\' target=\'_blank\' ";
			tramit='tramit_obert';
				

			doc_obl.afegir_document_rowspan(numero_pagaments,"Taxa obertura d'expedient","Model 046","<a href='"+link_taxa_obertura_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (11,83€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
			doc_obl.afegir_document_colspan(3,"Taxa serveis generals","Model 046", "<a href='"+link_taxa_serveis_generals_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (5,64€)</button></a>");
			
			if (nombre_idiomes==1){
				doc_obl.afegir_document_colspan(3,"Taxa matrícula d'un idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");
			}else{
				doc_obl.afegir_document_colspan(3,"Taxa matrícula primer idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");
				doc_obl.afegir_document_colspan(3,"Taxa matrícula segon idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");
			}
			
		}else{/*Antic Alumne*/

			/*Si l'alumne ja està matriculat per un altre idioma, no ha de pagar serveis generals*/
			if (condicio==3){
				serveis_generals=0;
			} else {
				serveis_generals=1;
			}
			numero_pagaments=serveis_generals+Number(nombre_idiomes);

			
			link_taxa_serveis_generals_FNG="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6151\' target=\'_blank\' ";
			link_taxa_matricula_FNG="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6150\' target=\'_blank\' ";
			tramit='tramit_obert';			
		
			if (nombre_idiomes==1){
				doc_obl.afegir_document_rowspan(numero_pagaments, "Pagament matrícula d'un idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
			}
			if (nombre_idiomes==2){
				doc_obl.afegir_document_rowspan(numero_pagaments,"Pagament matrícula primer idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
				doc_obl.afegir_document_colspan(3,"Pagament matrícula segon idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");
			}
			if (nombre_idiomes==3){
				doc_obl.afegir_document_rowspan(numero_pagaments,"Pagament matrícula primer idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
				doc_obl.afegir_document_colspan(3,"Pagament matrícula segon idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");				
				doc_obl.afegir_document_colspan(3,"Pagament matrícula tercer idioma","Model 046", "<a href='"+link_taxa_matricula_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (74,37€)</button></a>");
			}

			if (condicio!=3){
				doc_obl.afegir_document_colspan(3, "Pagament serveis generals","Model 046", "<a href='"+link_taxa_serveis_generals_FNG+"'rel='noopener'><button class='"+tramit+"'>Pagau (5,64€)</button></a>");
			}
		}
		break;			
		case 2:
		doc_alumne.afegir_item("Original i fotocòpia títol família nombrosa <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#familiesNombroses' target='_blank'><i class='fas fa-info-circle'></i></a>");			
		break;
		case 3:
		doc_alumne.afegir_item("Informe de periodo ininterrumpido inscrito en situación de desempleo <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#aturat' target='_blank'><i class='fas fa-info-circle'></i></a>");		
		break;			
		case 4:
		doc_alumne.afegir_item("Original i fotocòpia de la Certificació de discapacitat <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#discapacitat' target='_blank'><i class='fas fa-info-circle'></i></a>");
		break;		
		case 5:
		doc_obl.afegir_document_colspan(4,"Compromís de beca","Imprés de compromís de beca", "<a href='http://s3-eu-west-1.amazonaws.com/eoi-manacor/wp-content/uploads/2018/03/20160355/COMPROMIS-DE-BECA.pdf' target='_blank' rel='noopener'><button>Imprimiu</button></a>","<a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#solicitantsBeca' target='_blank'><i class='fas fa-info-circle'></i></a>");
		break;
		case 6:
		doc_alumne.afegir_item("Certificació víctima de terrorisme <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#victimesTerrorisme' target='_blank'><i class='fas fa-info-circle'></i></a>");
		break;
		case 7:
		doc_alumne.afegir_item("Original i fotocòpia ordre d'allunyament en vigor <a href='https://www.eoimanacor.com/exempcions-i-bonificacions-de-pagament-de-taxes/#victimesViolenciaGenere' target='_blank'><i class='fas fa-info-circle'></i></a>");
		break;		
		case 8:/*Ordinària*/
		
		periode=determina_periode_matrícula();

		if (condicio==0){/*Nou alumne*/
		
			numero_pagaments=2;
			numero_pagaments=numero_pagaments+Number(nombre_idiomes);

			link_taxa_obertura_ORD="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6143\' target=\'_blank\' ";
			link_taxa_serveis_generals_ORD="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6144\' target=\'_blank\' ";
			link_taxa_matricula_ORD="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6142\' target=\'_blank\' ";
			tramit='tramit_obert';


			/*Obertura d'expedient*/
			doc_obl.afegir_document_rowspan(numero_pagaments,"Taxa obertura d'expedient", "Model 046", "<a href='"+link_taxa_obertura_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (23,66€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");

			
			/*Serveis generals*/
			doc_obl.afegir_document_colspan(3,"Taxa serveis generals","Model 046", "<a href='"+link_taxa_serveis_generals_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (11,27€)</button></a>");
			
			/*Matrícula*/
			if (nombre_idiomes==1){
				doc_obl.afegir_document_colspan(3,"Taxa matrícula d'un idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>");
			}else{
				doc_obl.afegir_document_colspan(3,"Taxa matrícula primer idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>");
				doc_obl.afegir_document_colspan(3, "Taxas matrícula segon idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>");
			}	
			
		}else{/*Antic alumne*/

			/*Si l'alumne ja està matriculat per un altre idioma, no ha de pagar serveis generals*/
			if (condicio==3){
				serveis_generals=0;
			} else {
				serveis_generals=1;
			}
			numero_pagaments=serveis_generals+Number(nombre_idiomes);


			link_taxa_serveis_generals_ORD="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6149\' target=\'_blank\' ";
			link_taxa_matricula_ORD="https://www.atib.es/TA/Modelos/Modelo.aspx?m=046&idConcepto=6148\' target=\'_blank\' ";
			tramit='tramit_obert';
		
			/*Serveis generals*/
			
		
			/*Matrícula*/
			if (nombre_idiomes==1){
				doc_obl.afegir_document_rowspan(numero_pagaments,"Taxa matrícula d'un idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
			}else{
				doc_obl.afegir_document_rowspan(numero_pagaments,"Taxa matrícula primer idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>", "<a href='https://www.eoimanacor.com/pagament-taxes-matricula-presencial/' target='_blank'><i class='fas fa-info-circle'></i></a>");
				doc_obl.afegir_document_colspan(3,"Taxa matrícula segon idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>");
			}
			if (nombre_idiomes==3){
				doc_obl.afegir_document_colspan(3,"Taxa matrícula tercer idioma","Model 046", "<a href='"+link_taxa_matricula_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (148,74€)</button></a>");
			}

			if (condicio!=3){
				doc_obl.afegir_document_colspan(3, "Taxa serveis generals", "Model 046", "<a href='"+link_taxa_serveis_generals_ORD+"'rel='noopener'><button class='"+tramit+"'>Pagau (11,27€)</button></a>");		
			}
		}
	}
	
	/*Quota complementària*/
	quota_total=nombre_idiomes*10;
	doc_obl.afeir_quota_complementaria(quota_total);
}

function neteja_formulari(){
	
	document.getElementById("resultat_perfil").innerHTML="";
	document.getElementById("recordatori").innerHTML="";
	document.getElementById("recordatori").style.border="none";
	//document.getElementById("antic_alumne_EOIManacor").style.display="none";

	doc_obl.buidar_taula();
	doc_alumne.buidar_llista();
	
}

