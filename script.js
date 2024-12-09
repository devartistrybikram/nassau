$(document).ready(function(){
    var prevScrollpos = $(window).scrollTop();
    $(window).on('scroll', function() {
      var currentScrollPos = $(window).scrollTop();
      if (prevScrollpos > currentScrollPos) {
        $('.header').show().addClass('scrolled');
        console.log("scrolled back !");
    } else {
        $('.header').hide().removeClass('scrolled');
        console.log("scrolled !");
      }
      prevScrollpos = currentScrollPos;
    });
  });
  
