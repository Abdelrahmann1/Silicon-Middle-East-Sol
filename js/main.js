(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    document.getElementById('website-development').addEventListener('click', function() {
        var webDesignService = document.getElementById('web-design-service');
        if (webDesignService.classList.contains('hidden')) {
            webDesignService.classList.remove('hidden');
        } else {
            webDesignService.classList.add('hidden');
        }
    });
        
    document.getElementById('app-development').addEventListener('click', function() {
        var webDesignService = document.getElementById('app-design-service');
        if (webDesignService.classList.contains('hidden')) {
            webDesignService.classList.remove('hidden');
        } else {
            webDesignService.classList.add('hidden');
        }
    });
    document.getElementById('branding').addEventListener('click', function() {
        var webDesignService = document.getElementById('branding-design-service');
        if (webDesignService.classList.contains('hidden')) {
            webDesignService.classList.remove('hidden');
        } else {
            webDesignService.classList.add('hidden');
        }
    });
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    // $(".header-carousel").owlCarousel({
    //     animateOut: 'slideOutDown',
    //     items: 1,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    // });
    $(document).ready(function(){
        // Initialize Owl Carousel
        $(".header-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 500,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });

       // Set up interval to toggle sliders
        // var currentIndex = 0;
        // var sliderCount = $(".slider-container").length;

        // setInterval(function() {
        //     currentIndex = (currentIndex + 1) % sliderCount;
        //     toggleSliders(currentIndex);
        // }, 2000);
    });

    // Function to toggle sliders
    // function toggleSliders(currentIndex) {
    //     $(".slider-container").each(function(index) {
    //         if (index === currentIndex) {
    //             $(this).show();
    //         } else {
    //             $(this).hide();
    //         }
    //     });
    // }
    
 
    document.addEventListener("DOMContentLoaded", function() {
        var currentIndex = 0;
        var sliderCount = $(".slider-container").length;
    
        setInterval(function() {
            currentIndex = (currentIndex + 1) % sliderCount;
            toggleSliders(currentIndex);
        }, 5000);
    });
    
    function toggleSliders(currentIndex) {
        $(".slider-container").each(function(index) {
            if (index === currentIndex) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
 
    function goToPage() {
        
        window.location.href = "startProject.html";
    }


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }


   

})(jQuery);

