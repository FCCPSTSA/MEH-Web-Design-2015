var previouspage = localStorage.lastpage;
var bar = document.getElementById('whereyouat');
var link = {
    wind: document.getElementById('windLink'),
    solar: document.getElementById('solarLink'),
    hydro: document.getElementById('hydroLink'),
    nuclear: document.getElementById('nuclearLink'),
    geothermal: document.getElementById('geothermalLink'),
};
var toplinks = {
    history: document.getElementById('history'),
    about: document.getElementById('about'),
};
console.log(localStorage.lastpage);

function toggleClass(name) {
    bar.className = name;
}
if (previouspage == 'history') {
    bar.style.left = '712px';
    setTimeout(function() {
        toggleClass('history');
    }, 200);
}
if (previouspage == 'about') {
    bar.style.left = '885px';
    setTimeout(function() {
        toggleClass('about');
    }, 200);
}
if (previouspage == 'home') {
    bar.style.left = '562px';
}
if (previouspage === '') {
    bar.style.left = '562px';
}
localStorage.setItem('lastpage', 'home');
link.wind.onclick = function() {
    clearInterval(scroll);
    var viewport = window.innerHeight;
    console.log(viewport);
    var scroll = setInterval(function() {
        document.scrollingElement.scrollTop += 25;
        if (document.scrollingElement.scrollTop >= viewport * 2) {
            clearInterval(scroll);
            document.scrollingElement.scrollTop = viewport * 2;
        }
    }, 10);
};
link.solar.onclick = function() {
    clearInterval(scroll);
    var viewport = window.innerHeight;
    console.log(viewport);
    var scroll = setInterval(function() {
        document.scrollingElement.scrollTop += 35;
        if (document.scrollingElement.scrollTop >= viewport * 3) {
            clearInterval(scroll);
            document.scrollingElement.scrollTop = viewport * 3;
        }
    }, 10);
};
link.hydro.onclick = function() {
    clearInterval(scroll);
    var viewport = window.innerHeight;
    console.log(viewport);
    var scroll = setInterval(function() {
        document.scrollingElement.scrollTop += 45;
        if (document.scrollingElement.scrollTop >= viewport * 4) {
            clearInterval(scroll);
            document.scrollingElement.scrollTop = viewport * 4;
        }
    }, 10);
};
link.nuclear.onclick = function() {
    clearInterval(scroll);
    var viewport = window.innerHeight;
    console.log(viewport);
    var scroll = setInterval(function() {
        document.scrollingElement.scrollTop += 55;
        if (document.scrollingElement.scrollTop >= viewport * 5) {
            clearInterval(scroll);
            document.scrollingElement.scrollTop = viewport * 5;
        }
    }, 10);
};
link.geothermal.onclick = function() {
    clearInterval(scroll);
    var viewport = window.innerHeight;
    console.log(viewport);
    var scroll = setInterval(function() {
        document.scrollingElement.scrollTop += 55;
        if (document.scrollingElement.scrollTop >= viewport * 6) {
            clearInterval(scroll);
            document.scrollingElement.scrollTop = viewport * 6;
        }
    }, 10);
};
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
positions = ['712px', '885px'];
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
toplinks.about.onmouseover = function() {
    hoverbars[1].style.opacity = '0.75';
}
toplinks.about.onmouseout = function() {
    hoverbars[1].style.opacity = '0';
}