function isOdd(num) {
    return num % 2;
}
timeline = document.createElement('div');
timeline.className = 'timeline';
document.body.appendChild(timeline);
data = ["200 BCE ~ Water wheels are used in Europe to grind grain.", "1838 CE ~ William Robert Grove makes the first hydrogen fuel cell, which generates electricity.", "1860 CE  ~ Augustine Mouchot creates the first solar system. It uses the sun's heat to make steam.", "1876 CE ~ William Grylls Adams makes a solar cell that turns light directly into electricity.", "1888 CE ~ First windmill used to generate electricity is made in Cleveland, Ohio.", "1921 CE ~ First geothermal power plant is built in California.", "1951 CE ~ First nuclear reactor to generate electricity.", "1997 CE ~ Toyota creates the Prius, one of the first hybrid cars."];
for (i = 0; i < 8; i++) {
    new_point = document.createElement('div');
    new_point.className = 'point';
    timeline.appendChild(new_point);
    new_history_point = document.createElement('div');
    new_history_point.className = 'historypoint';
    timeline.appendChild(new_history_point);
    text_box = document.createTextNode(data[i]);
    new_history_point.appendChild(text_box);
}
var points = document.getElementsByClassName('point');
console.log(points);
for (i = 0, j = 0, len = points.length; i < len; i++) {
    j = i + 1;
    points[i].style.left = (j * 10 + 3) + 'vw';
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
