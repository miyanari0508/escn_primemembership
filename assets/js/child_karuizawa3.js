$(function(){
    $('.slider-karuizawa').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        infinite: true,
        draggable: true,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        responsive:
        [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,                    
                }
            }
        ]
    });
});

$(".modal-video").modaal({
    type: "video",
});