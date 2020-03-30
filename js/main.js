$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 900,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              },
            }
        ],
        
    });
});