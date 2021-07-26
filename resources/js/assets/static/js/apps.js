(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /*dropdown menu hover*/
        if (document.documentElement.clientWidth > 1200) {

            jQuery('ul li.dropdown').hover(function () {
                jQuery(this).children('ul.dropdown-menu').stop(!0, !0).slideDown()
                $(this).addClass('open');

            },
                function () {
                    jQuery(this).children('ul.dropdown-menu').stop(!0, !0).slideUp()
                    $(this).removeClass('open');
                });
        }



        // we can autoplay audio, video tag
        jQuery('audio').mediaelementplayer({
            success: function (player, node) {
                jQuery(".mejs__button.mejs__playpause-button.mejs__play button").trigger('click');
            }
        });
    });



    /*------------------------------rel action -----------------------------*/


    jQuery('a[rel*=external]').click(function () {

        window.open(this.href);

        return false;

    });

    // Header main menu fixed
    jQuery(document).ready(function ($) {
        var stickyOffset = $('.header-main').offset().top;
        $(window).scroll(function () {
            var sticky = $('.header-main'),
                scroll = $(window).scrollTop();
            if (scroll >= stickyOffset) sticky.addClass('fixed-tops');
            else sticky.removeClass('fixed-tops');
        });
    });

    // search toggle

    // $(document).ready(function () {
    //     $('.btn-search').click(function (event) {
    //         event.stopPropagation();
    //         $(".btn-search").toggleClass("close-icon");
    //         $('.search-site').animate({
    //             height: 'toggle',
    //         });
    //     });
    //     $(".search-site").on("click", function (event) {
    //         event.stopPropagation();
    //     });
    // });

    // $(document).on("click", function () {
    //     $(".btn-search").removeClass("close-icon");
    //     $(".search-site").hide();
    // });

    // live player box

    // $(document).ready(function () {
    //     $('.live-play-btn').click(function (event) {
    //         event.stopPropagation();
    //         $("body").addClass("overflow-hide");
    //         $('.live-player-box').css({
    //             right: '0',
    //         });

    //         $('.overflow-hide').css({
    //             right: '15%',
    //             transition: 'all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'
    //         });
    //     });

    //     $('.live-close').click(function (event) {
    //         event.stopPropagation();
    //         $("body").removeClass("overflow-hide");
    //         $('.live-player-box').css({
    //             right: '-100%',
    //         });
    //         $('body').css({
    //             right: '0'

    //         });
    //     });
    //     $(".live-player-box").on("click", function (event) {
    //         event.stopPropagation();
    //     });
    // });

    // $(document).on("click", function () {

    //     $("body").removeClass("overflow-hide");
    //     $('.live-player-box').css({
    //         right: '-500px',
    //     });
    //     $('body').css({
    //         right: '0'

    //     });
    // });


    // scrll to top
    jQuery('.scrollToTop').click(function (e) {
        "use strict";
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".upToScroll").addClass("buttonShow");
        } else {
            $(".upToScroll").removeClass("buttonShow");
        }
    });


    //table class

    jQuery("table").addClass('table table-striped').wrap("<div className='table-responsive' />");
    // embed iframe

    jQuery(".editor-box iframe").wrap("<div className='embed-responsive embed-responsive-16by9' />");
    jQuery(".news-break iframe").wrap("<span className='embed-responsive embed-responsive-16by9' />");
    jQuery(".video-detail iframe").wrap("<span className='embed-responsive embed-responsive-16by9' />");
    jQuery(".google-maps iframe").wrap("<span className='embed-responsive embed-responsive-16by9' />");


    jQuery(document).ready(function ($) {
        //open/close primary navigation
        $('.cd-primary-nav-trigger').on('click', function () {
            $('.cd-menu-icon').toggleClass('is-clicked');
            $('.cd-header').toggleClass('menu-is-open');

            //For firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            if ($('.cd-primary-nav').hasClass('is-visible')) {
                $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                });
            } else {
                $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').addClass('overflow-hidden');
                });
            }
        });
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1500) {
            //$(".sifaris").css('transform', 'translate(0,-50%)');
            $(".sifaris").addClass('slide-left');

        } else {
            $(".sifaris").removeClass('slide-left');
            $(".sifaris").addClass('slide-hide');

        }
    });


    $(function () { //run when the DOM is ready
        $(".close-button").click(function () { //use a class, since your ID gets mangled
            $('.sticky-notice').addClass("bounceOutDown animated"); //add the class to the clicked element
        });
    });

    // floatable form

    $('.textfield, .textarea').on('focus blur', function (e) {
        $(this).parents('.fieldbox').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur')


    // contact scroll

    $(".address-btn").click(function () {

        $('html, body').animate({ scrollTop: $('#contact-box').offset().top - 100 }, 'slow');
    });

})(jQuery);