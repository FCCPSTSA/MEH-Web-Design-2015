function isOdd(num) {
    return num % 2;
}

function disappear() {
    document.getElementById('dialogz').style.visibility = 'hidden';
    localStorage.setItem('seenit', 'true');
}

function createNew(name, append) {
    item = document.createElement('div');
    item.className = name;
    append.appendChild(item);
}
timeline = document.createElement('div');
timeline.className = 'timeline';
document.body.appendChild(timeline);
data = ["200 BCE ~ Water wheels are used in Europe to grind grain.", "1838 CE ~ William Robert Grove makes the first hydrogen fuel cell, which generates electricity.", "1860 CE  ~ Augustine Mouchot creates the first solar system. It uses the sun's heat to make steam.", "1876 CE ~ William Grylls Adams makes a solar cell that turns light directly into electricity.", "1888 CE ~ First windmill used to generate electricity is made in Cleveland, Ohio.", "1921 CE ~ First geothermal power plant is built in California.", "1951 CE ~ First nuclear reactor to generate electricity.", "1997 CE ~ Toyota creates the Prius, one of the first hybrid cars."];
for (i = 0; i < 8; i++) {
    createNew('point', timeline);
    createNew('historypoint', timeline);
    text_box = document.createTextNode(data[i]);
    item.appendChild(text_box);
}
var points = document.getElementsByClassName('point');
console.log(points);
for (i = 0; i < points.length; i++) {
    points[i].style.left = ((i + 1) * 10 + 3) + 'vw';
}
var historyboxes = document.getElementsByClassName('historypoint');
for (k = 0; k < 8; k++) {
    historyboxes[k].style.left = (k * 10 + 5) + 'vw';
    if (isOdd(k) === 1) {
        historyboxes[k].style.top = '30vh';
    } else {
        historyboxes[k].style.top = '60vh';
    }
}
if (localStorage.seenit == 'true') {
    disappear();
}
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
    bar.style.left = '930px';
}
localStorage.setItem('lastpage', 'history')
document.getElementById('dimmer').addEventListener('click', disappear);
document.getElementById('button').addEventListener('click', disappear);
