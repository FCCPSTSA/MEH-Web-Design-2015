previouspage = localStorage.lastpage;
bar = document.getElementById('whereyouat');
console.log(localStorage.lastpage)

function toggleClass(name) {
    bar.className = name;
}
if (previouspage == 'energy') {
    bar.style.left = '710px';
    setTimeout(function() {
        toggleClass('energy')
    }, 200)
}
if (previouspage == 'history') {
    bar.style.left = '930px';
    setTimeout(function() {
        toggleClass('history')
    }, 200);
}
if (previouspage == 'about') {
    bar.style.left = '1100px';
    setTimeout(function() {
        toggleClass('about')
    }, 200);
}
if (previouspage == 'home') {
    bar.style.left = '562px';
}
if (previouspage == '') {
    bar.style.left = '562px';
}
localStorage.setItem('lastpage', 'home')
