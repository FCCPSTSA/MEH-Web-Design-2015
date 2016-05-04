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
