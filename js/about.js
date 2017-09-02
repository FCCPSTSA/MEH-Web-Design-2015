previouspage = localStorage.lastpage;
bar = document.getElementById('marker');
console.log(localStorage.lastpage)
var toplinks = {
    home: document.getElementById('home'),
    history: document.getElementById('history'),
};
function toggleClass(name) {
    bar.className = name;
}
if (previouspage == 'history') {
    bar.style.left = '712px';
    setTimeout(function() {
        toggleClass('history')
    }, 200);
}
if (previouspage == 'about') {
    bar.style.left = '885px';
}
if (previouspage == 'home') {
    bar.style.left = '562px';
    setTimeout(function() {
        toggleClass('home')
    }, 200);
}
if (previouspage == '') {
    bar.style.left = '885px';
}
localStorage.setItem('lastpage', 'about')
i = 0;
while (i < 2) {
    item = document.createElement('div');
    item.className = 'hoverbar';
    document.body.appendChild(item);
    i++;
    console.log('yo');
}
hoverbars = document.getElementsByClassName('hoverbar');
console.log(hoverbars);
positions = ['712px', '562px'];
for (i = 0; i < hoverbars.length; i++) {
    hoverbars[i].style.left = positions[i];
    hoverbars[i].style.opacity = '0';
}
toplinks.history.onmouseover = function() {
    hoverbars[0].style.opacity = '0.75';
}
toplinks.history.onmouseout = function() {
    hoverbars[0].style.opacity = '0';
}
toplinks.home.onmouseover = function() {
    hoverbars[1].style.opacity = '0.75';
}
toplinks.home.onmouseout = function() {
    hoverbars[1].style.opacity = '0';
}