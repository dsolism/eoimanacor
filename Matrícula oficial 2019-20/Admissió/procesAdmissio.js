
// Funció que regula el globus amb l'horari d'atenció al públic

function mostraAmagaGlobus(lloc, boto){
	
	// Mostram/amagam el globus
	x=document.getElementById(lloc);
	x.classList.toggle('globusVisible');

	// Posam el botó que ha disparat l'event de color gris/blanc
	y=document.getElementById(boto);
	y.classList.toggle('botoGris');
}