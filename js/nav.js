var $elems = $("html, body");
var delta = 0;
var alpha = 0;

$(document).on("mousemove", function(e) {
    var h = $(window).height();
    var y = e.clientY - h / 2;
    delta = y * 0.1;
});

$(document).on("mousemove", function(o) {
    var w = $(window).width();
    var x = o.clientX - w / 2;
    alpha = x * 0.1;
});

$(window).on("blur mouseleave", function() {
    delta = 0;
    alpha = 0;
});

(function f() {
    if(delta) {
        $elems.scrollTop(function(i, v) {
            return v + delta;
        });
    }
    if(alpha) {
        $elems.scrollLeft(function(a, b) {
            return b + alpha;
        });
    }
    webkitRequestAnimationFrame(f);
})();