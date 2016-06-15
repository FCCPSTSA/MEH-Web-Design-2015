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
} if (previouspage == 'home') {
	bar.style.left = '562px';	
	setTimeout(function () {toggleClass('home')}, 200);
} if (previouspage == '') {
	bar.style.left = '885px';
}
localStorage.setItem('lastpage', 'about')