// Include
function parts(rootDir,File){
	$.ajax({
       url: rootDir + "inc/" + File,
       cache: true,
       async: false,
       dataType: 'html',
       success: function(html){
           html = html.replace(/\{\$root\}/g, rootDir);
           document.write(html);
       }
   });
}

// Menu
$(function(){    
    function menuMb() {
        $('.menu').toggleClass('is-open');
        $('.btn-menu').toggleClass('is-open');
    }

    $('.btn-menu').on('click',function() {
        menuMb();
    });

    $('.menu-wrap a').on('click',function() {
        menuMb();
    });    
});

// Menu Active
$(function(){
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
        
    if ($('body').hasClass("homepage")){
        $('a.menu-top').addClass('is-active');
    }else{
        $('.menu-list > li > a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('is-active');
            }
        });
    }
});

// Anchorlink
$(function() {
    $('.js-anchor').on('click',function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 300);
        return 
    });
});

// Slider Diamas
$(function(){
    if($(window).width() <=767) {
        $(".diamas-box .list-item").slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            dots: true,
            variableWidth: true,
        });
    }
});

$(function(){
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.new-release .list').slick({
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 2000,
            infinite: true,
            draggable: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            variableWidth: true,
            dots: true
        });
    }
});