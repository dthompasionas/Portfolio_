

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var options = document.querySelectorAll(".img").src;
//     var instances = M.Carousel.init(elems, options);

//     setInterval(function(){

//     })
// });


$(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 3000);
});
