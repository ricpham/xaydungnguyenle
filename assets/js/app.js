// Owl Carousel
$(document).ready(function(){
    
    $('.owl-banner').owlCarousel({
        loop:true,
        // margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav:false,
        touchDrag  : false,
        mouseDrag  : false,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-partner').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            992:{
                items:4
            },
            1440:{
                items:5
            },
            1920: {
                items:6
            }
        }
    });

    const askBtn = $("#ask-btn");

    // Event OnScroll
    $(window).scroll(function () { 

        // Show / Hide Ask Button
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        // Thấp nhất 1440px
        if ((currentScrollTop >= 4400) && (checkMediaQuery(768, 992))) {

            askBtn.addClass('active');
            
        }else if ((currentScrollTop >= 4600) && (checkMediaQuery(993, 1200))) {
            

            askBtn.addClass('active');

        }else if ((currentScrollTop >= 4700) && (checkMediaQuery(1440, 1600))) {
            

            askBtn.addClass('active');

        }else if ((currentScrollTop >= 5000) && (checkMediaQuery(1601, 1920))) {
            

            askBtn.addClass('active');

        }else if ((currentScrollTop >= 5100) && (checkMediaQuery(1921, 2100))) {
            

            askBtn.addClass('active');

        }else if ((currentScrollTop >= 5350) && (checkMediaQuery(2101, 2400))) {
            

            askBtn.addClass('active');

        }else if ((currentScrollTop >= 5450) && (checkMediaQuery(2401, 2799))) {
            

            askBtn.addClass('active');
        }


        //Reverse
        if ((currentScrollTop < 4400) && (checkMediaQuery(768, 992))) {

            askBtn.removeClass('active');
            
        }else if ((currentScrollTop < 4600) && (checkMediaQuery(993, 1200))) {
            
            askBtn.removeClass('active');

        }else if ((currentScrollTop < 4700) && (checkMediaQuery(1440, 1600))) {
            

            askBtn.removeClass('active');

        }else if ((currentScrollTop < 5000) && (checkMediaQuery(1601, 1920))) {
            

            askBtn.removeClass('active');

        }else if ((currentScrollTop < 5100) && (checkMediaQuery(1921, 2100))) {
            

            askBtn.removeClass('active');

        }else if ((currentScrollTop < 5350) && (checkMediaQuery(2101, 2400))) {
            

            askBtn.removeClass('active');

        }else if ((currentScrollTop < 5450) && (checkMediaQuery(2401, 2799))) {
            

            askBtn.removeClass('active');
        }
    });
    // End Show / Hide Ask Button

    // Show / Hide Form Ask
    askBtn.click(function() {
        
        const formFixed = $("#form-fixed");
        const btnClose = $("#btn-close");

        formFixed.addClass("active");

        btnClose.click(function() {

            formFixed.removeClass("active");
        });

    });

    function checkMediaQuery(minWidth, maxWidth) {

        if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {

            return true
        }
    }
});




