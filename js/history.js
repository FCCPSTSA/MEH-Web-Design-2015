function isOdd(num) {
	return num%2;
}
timeline = document.createElement('div');
timeline.className = 'timeline';
document.body.appendChild(timeline);
data = ['200 bc ~ Water  wheels used in europe to grind grain', '1838AD ~ William Robert Grove makes the first hydrogen fuel cell creates electricity',"1860AD ~ Augustine Mouchot creates the first solar system. It used the sun's heat to make steam.",'1876AD ~ William Grylls Adams makes a solar cell that turns light directly into electricity.', '1888AD ~ First windmill to generate electricity is made in cleveland ohio','1921AD ~ First geothermal power plant is built in california', '1951AD ~ First nuclear reactor to generate electricity ', '1997AD ~ creates the toyota prius'];
for (i=0; i<8; i++) {
	new_point = document.createElement('div');
	new_point.className = 'point';
	timeline.appendChild(new_point);
	new_history_point = document.createElement('div');
	new_history_point.className = 'historypoint';
	timeline.appendChild(new_history_point);
	text_box = document.createTextNode(data[i]);
	new_history_point.appendChild(text_box)
}
var points = document.getElementsByClassName( "point" );
console.log(points);
for (i = 0, j = 0, len = points.length; i<len; i++) {
	j = i+1;
	points[i].style.left = (j*10+3)+'vw';
}
var historyboxes = document.getElementsByClassName( "historypoint" );
for (k=0; k<8; k++) {
	historyboxes[k].style.left = (k*10+5)+'vw';
	if (isOdd(k) == true) {
		historyboxes[k].style.top = '30vh';
	}
	else {
		historyboxes[k].style.top = '54vh';
	}
}
