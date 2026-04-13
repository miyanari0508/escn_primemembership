$(function(){
    $('#slider-01, #slider-02, #slider-03').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        infinite: true,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
        arrows: false,
        variableWidth: true,
        // responsive:
        // [
        //     {
        //         breakpoint: 991,
        //         settings: {                    
        //             slidesToShow: 2.15,
        //             slidesToScroll: 1,
        //             variableWidth: false,
        //         }
        //     },
        //     {
        //         breakpoint: 500,
        //         settings: {                    
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             variableWidth: true,
        //         }
        //     }
        // ],
    });
});

