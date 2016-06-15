var contentplace = document.getElementsByClassName('content');
for (i = 0; i < contentplace.length; i++) {
    var randnum = Math.floor(Math.random() * 70);
    var orig = randnum;
    if (randnum < 25) {
        randnum = randnum + 25;
    }
    if (randnum > 60) {
        randnum = randnum - 35;
    }
    if (orig > 30) {
        while (orig > 30) {
            orig--;
        }
    }
    if (orig < 10) {
        orig = orig + 10;
    }
    contentplace[i].style.left = randnum + 'vw';
    contentplace[i].style.top = orig + 'vh';
}
previouspage = localStorage.lastpage;
bar = document.getElementById('whereyouat');
console.log(localStorage.lastpage)

function toggleClass(name) {
    bar.className = name;
}
if (previouspage == 'energy') {
    bar.style.left = '710px';
}
if (previouspage == 'history') {
    bar.style.left = '930px';
    setTimeout(function() {
        toggleClass('history')
    }, 200)
}
if (previouspage == 'about') {
    bar.style.left = '1100px';
    setTimeout(function() {
        toggleClass('about')
    }, 200);
}
if (previouspage == 'home') {
    bar.style.left = '562px';
    setTimeout(function() {
        toggleClass('home')
    }, 200);
}
if (previouspage == '') {
    bar.style.left = '710px';
}
localStorage.setItem('lastpage', 'energy')
