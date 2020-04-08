$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 900,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow/chevron-left-solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow/chevron-right-solid.png"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        // dots: true,
        arrows: false,
      },
    }],

  });


// табы

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    })
  })

// модальные окна


  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  })

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
  })

  // $('.button_mini').on('click', function() {
  //   $('.overlay, #order').fadeIn('slow');
  // })

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })


// валидация форм

  function valideForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неверный формат почты"
        }
      }
    });
  };
  valideForm('#consultation-form');
  valideForm('#consultation form');
  valideForm('#order form');



  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // скролл

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

});