$(document).ready(function () {
    addScrolled();

});

$(window).scroll(function () {
    addScrolled();

});

function addScrolled() {
    var navHeight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    if (actualPos > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
