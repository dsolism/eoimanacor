const datesPublicacions = [

	{
		'idioma': 'Anglès',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 8, 4, 20, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Bàsic A2',
		'publicacio': new Date(2019, 8, 17, 17, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Intermedi 1',
		'publicacio': new Date(2019, 8, 4, 20, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019, 8, 17, 17, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 8, 4, 20,0)
	},
	{
		'idioma': 'Anglès',
		'curs':'Avançat 2/B2',
		'publicacio': new Date(2019, 8, 17, 18, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'C1',
		'publicacio': new Date(2019, 8, 17, 19, 0)
	},
	{
		'idioma': 'Anglès',
		'curs':'C2',
		'publicacio': new Date(2019, 8, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 8, 5, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Bàsic A2',
		'publicacio': new Date(2019, 8, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Intermedi 1',
		'publicacio': new Date(2019, 8, 5, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019, 8, 17, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 8, 5, 19, 0)
	},
	{
		'idioma': 'Alemany',
		'curs':'Avançat 2/B2',
		'publicacio': new Date(2019, 8, 17, 19, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Bàsic A1',
		'publicacio': new Date(2019, 8, 4, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Bàsic A2',
		'publicacio': new Date(2019, 8, 17, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Intermedi 2/B1',
		'publicacio': new Date(2019, 8, 17, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Avançat 1',
		'publicacio': new Date(2019, 8, 4, 20, 0)
	},
	{
		'idioma': 'Fancès',
		'curs':'Avançat 2/B2',
		'publicacio': new Date(2019, 8, 17, 20, 0)
	}
]

function mostraNotesPublicades(){

	avui = new Date();

	// Data del primer del qual es publiquen les qualificacions
	primeraPublicacio = new Date(2019, 8, 4, 20, 0);

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