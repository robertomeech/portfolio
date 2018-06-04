$(document).ready(function () {
    window.location.hash = '';
    console.log(`ready`);
});



$(function(){
    $('nav a').smoothScroll({
        speed: 500,
    });
});