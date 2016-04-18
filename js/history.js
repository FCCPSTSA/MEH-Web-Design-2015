function isOdd(num) {
	return num%2;
}
function findNthChild($element) {
	nthchild = 1;
	console.log($element);
	if ($element.prev().hasClass('.point')) {
		while ($element.prev().hasClass('.point')) {
			nthchild++;
			$element == $element.prev()
		}
		return nthchild;
	}
	else {
		console.log('lmao');
		return 1;
	}
}
for (i=0; i<8; i++) {
	new_point = document.createElement('div');
	new_point.className = 'point';
	document.body.appendChild(new_point);
}
var points = document.getElementsByClassName( "point" );
var pointsarray = jQuery.makeArray( points );
console.log(pointsarray);
for (i = 0, j = 0, len = pointsarray.length; i<len; i++) {
	j = i+1;
	$(pointsarray[i]).css('left', (j*10+3)+'vw');
}
var historyboxes = document.getElementsByClassName( "historypoint" );
var historyboxesarray = jQuery.makeArray ( historyboxes );
console.log(historyboxesarray.length);
for (k=0, l=0; k<8; k++) {
	l = k+1;
	$(historyboxesarray[k]).css('left', (l*10)+'vw');
	console.log(l)
	if (isOdd(k) == true) {
		console.log("truezlez")
		$(historyboxesarray[k]).css('top', '30vh');
	}
	else {
		console.log("fizzlez")
		console.log (isOdd(k))
		$(historyboxesarray[k]).css('top', '54vh');
	}
}
magicboy = $('body div:nth-child(15)')
bigmagicboy = findNthChild(magicboy);
console.log(bigmagicboy)
$('.point').hover (function() {
	pointnthchild = $(this).findNthChild;
	console.log(pointnthchild);
});
