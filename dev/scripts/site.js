$(document).ready(function () {
    window.location.hash = '';
    console.log(`ready`);
});



$(function(){
    $('nav a').smoothScroll({
        speed: 500,
    });
    
    AOS.init({
        duration: 1500,
    });
  
});