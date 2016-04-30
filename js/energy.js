var contentplace = document.getElementsByClassName('content');
for ( i=0; i<contentplace.length; i++) {
	var randnum = Math.floor(Math.random()*100);
	contentplace[i].style.left = randnum + 'vw';
	contentplace[i].style.top = randnum + 'vh';
}