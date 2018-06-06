// $(document).ready(function () {
//     window.location.hash = '';
//     console.log(`ready`);
// });



$(function(){
    $('nav a').smoothScroll({
        speed: 500,
    });
    
    AOS.init({
        duration: 1500,
    });
    // var instance = new TypeIt('.headerText', {
    //     strings: ["Hola, me llamo Roberto!", "Just kidding", "Hello, I'm Roberto.", "I'm a web developer"],
    //     //-- Other options...
    // });

  
});