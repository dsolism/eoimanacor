function mostraAmagaGlobus(lloc, boto){
	x=document.getElementById(lloc);
	x.classList.toggle('amagat');

	y=document.getElementById(boto);
	y.classList.toggle('botoGris');
}