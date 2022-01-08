var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  var diff = window.scrollY - dummy_x;
  if (diff > 0) {
    window.scrollTo(0, diff);
  }
  else if (window.scrollY == 0) {
    window.scrollTo(0, dummy_x);
  }
}

window.onresize = resize;
resize();

function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
}