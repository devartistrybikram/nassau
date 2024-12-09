$(document).ready(function(){
    var prevScrollpos = $(window).scrollTop();
    $(window).on('scroll', function() {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollpos > currentScrollPos) {
            if ($(window).scrollTop() === 0) $('nav').show().addClass('scrolled');
        } else {
            $('nav').hide().removeClass('scrolled');
        }
        prevScrollpos = currentScrollPos;
    });
    $("#load").on("click", function(){
        console.log("hi......!");
        $("#gallery").append(`
            <div class="images mt-3"><img src="./images/slider1.jpg" alt=""></div>
            <div class="images mt-3"><img src="./images/slider2.jpg" alt=""></div>
            <div class="images mt-3"><img src="./images/slider3.jpg" alt=""></div>
            <div class="images mt-3"><img src="./images/slider4.jpg" alt=""></div>
            <div class="images mt-3"><img src="./images/slider5.jpg" alt=""></div>
            <div class="images mt-3"><img src="./images/slider6.jpg" alt=""></div>
        `);
    });
});
  