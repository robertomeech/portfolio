$(document).ready(function () {
    window.location.hash = '';
    console.log(`ready`);
});

//SMOOTH SCROLL
$('a#home, a#about, #skills, #portfolio').smoothScroll({
    speed: 500,
});