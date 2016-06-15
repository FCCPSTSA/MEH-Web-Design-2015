previouspage = localStorage.lastpage;
bar = document.getElementById('whereyouat');
console.log(localStorage.lastpage)

function toggleClass(name) {
    bar.className = name;
}
if (previouspage == 'history') {
	bar.style.left = '712px';
	setTimeout(function () {toggleClass('history')}, 200);
} if (previouspage == 'about') {
	bar.style.left = '885px';
	setTimeout(function () {toggleClass('about')}, 200);
} if (previouspage == 'home') {
	bar.style.left = '562px';	
} if (previouspage == '') {
	bar.style.left = '562px';
}
localStorage.setItem('lastpage', 'home')
//i=0;
//while (i<3) {
//	item = document.createElement('div')
//	item.className = 'hoverbar';
//	document.body.appendChild(item);
//	i++;
//	console.log('yo');
//}
//hoverbars = document.getElementsByClassName('hoverbar');
//console.log(hoverbars);
//positions = ['710px', '930px', '1100px'];
//for (i=0; i<hoverbars.length; i++) {
//hoverbars[i].style.left = positions[i];
//}
//energy = document.getElementById('energy');
//history = document.getElementById('history');
//about = document.getElementById('about');
//baritems = [energy, history, about]
