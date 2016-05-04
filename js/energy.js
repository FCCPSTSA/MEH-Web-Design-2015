var contentplace = document.getElementsByClassName('content');
for (i = 0; i < contentplace.length; i++) {
  var randnum = Math.floor(Math.random() * 80);
  var orig = randnum;
  if (randnum < 35) {
    randnum = randnum + 35;
  }
  if (randnum > 65) {
    randnum = randnum - 35;
  }
  if (orig > 48) {
    while (orig > 48) {
      orig--;
    }
  }
  if (orig < 10) {
    orig = orig + 10;
  }
  contentplace[i].style.left = randnum + 'vw';
  contentplace[i].style.top = orig + 'vh';
}
