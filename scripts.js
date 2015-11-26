var isOpen = false;

var open = function() {
    $(".menu").animate({
        width: "30vw"
    }, 300);

    isOpen = true;
};
var menuClose = function() {
    $(".menu").animate({
        width: "0vw"
    }, 300);
    isOpen = false;
};
var menu = function() {
    $(".menu-button").click(function() {
        if (isMenuOpen === false) {
            menuOpen();
        }
        else {
            menuClose();
        }
    });
};

$(document).ready(menu);
