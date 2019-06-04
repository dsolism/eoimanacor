const datesPublicacions = [

	{
		'idioma': 'Anglès',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 5, 12, 17, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'',
		'publicacio': new Date(2019, 5, 12, 19, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Intermedi 1',
		'publicacio': new Date(2019, 5, 12, 17, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019,5,18, 17,0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 5, 12, 17,0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Avançat 2/B2',
		'publicacio': new Date(2019, 5, 18, 18, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'C1',
		'publicacio': new Date(2019, 5, 18, 19, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'C2',
		'publicacio': new Date(2019, 5, 18, 20, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 5, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Bàsic A2',
		'publicacio': new Date(2019, 5, 12, 17, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Intermedi 1',
		'publicacio': new Date(2019, 5, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019, 5, 12, 18, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 5, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Avançat 2',
		'publicacio': new Date(2019, 5, 12, 19, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 5, 12, 19, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Bàsic A2',
		'publicacio': new Date(2019, 5, 6, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Intermedi 1',
		'publicacio': new Date(2019, 5, 12, 19, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019, 5, 10, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 5, 12, 19, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Avançat 2/B2',
		'publicacio': new Date(2019, 5, 12, 20, 0)
	}
]

function mostraNotesPublicades(){

	avui = new Date();

	// Data del primer del qual es publiquen les qualificacions; en aquest cas Francès Bàsic A2
	primeraPublicacio = new Date(2019, 5, 6, 20, 0);

	// Només si ja s'han publicat les qualificacions de qualque examen, es mostra la taula de qualificacions publicades
	if (avui>=primeraPublicacio){

		// Canviam el display de la taula de 'none' per 'block'
		y = document.getElementById('taulaPublicacions');
		y.style.display='block';

		x = document.querySelector('#taulaPublicacions tbody');

		console.log(x);
		datesPublicacions.forEach(examen=>{
				if (examen.publicacio<=avui){
					console.log(examen);
					dataPublicacio = examen.publicacio.getDate() + '/' + (examen.publicacio.getMonth()+1)+ '/' +examen.publicacio.getFullYear();
					x.insertAdjacentHTML('beforeend', '<td>'+examen.idioma+'</td><td>'+examen.curs+'</td><td>'+dataPublicacio+'</td>');
				}
			}
		)
	}
}

window.onload = function(){
	mostraNotesPublicades();
}