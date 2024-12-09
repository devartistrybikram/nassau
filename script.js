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
});
  
