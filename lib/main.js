var $ = jQuery;
particlesJS.load('particles-js', './public/js/particles.json', function () {
    console.log('Cargado');
});
$(function () {
    $(window).scroll(function () {
        var $nav = $('#nav');
        console.log('Scroll ' + $(window).scrollTop());
        if($(window).scrollTop() !== 0) {
            $nav.addClass('Nav--activate');
        } else {
            $nav.removeClass('Nav--activate');
        }
    });
});
