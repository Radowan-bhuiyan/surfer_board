$(document).ready(function($) {
    "use strict";
	 $("#site-nav .navbar-nav1 li a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);

    });

	  $(window).on('scroll', function() {
        var wscroll = $(this).scrollTop();
        //fixed-nav
        wscroll > 1 ? $(".navbar1").addClass("fixed") : $(".navbar1").removeClass("fixed");

        // go top appear
        // wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

    });

     
     $('ul#navigation').slicknav({
           prependTo:'.responsive-menu'
        });
     
    $('#youtube-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });
}(jQuery));