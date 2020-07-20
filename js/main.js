

(function () {
    const burger = document.querySelector('.menu__burger')
    const burgerWrap = document.querySelector('.menu__burger-wrap')
    const menu = document.querySelector('.menu')
//     const bodyFix = document.querySelector('body')

    burgerWrap.addEventListener('click', function () {
        if (menu.classList.contains('menu__active')) {
            burger.classList.remove('menu__burger-active')
            menu.classList.remove('menu__active')
            // bodyFix.classList.remove('.fixed')
        }else {
            burger.classList.toggle('menu__burger-active')
            menu.classList.add('menu__active')
            // bodyFix.classList.add('.fixed')
        }
    });

    if(window.innerWidth <= 960) {
        burgerWrap.remove()
    }

}());



$(document).ready(function() {
    $('.customer__slider').slick({
        infinite: true,
        dots: true,
        dotsClass: "my-dots",
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        autoplay: true,
        responsive: [
            {
              breakpoint: 1160,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
                breakpoint: 870,
                settings: {
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 560,
                settings: {
                    arrows : false,
                    infinite: true,
                    slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    new WOW({offset: 160 }).init();
});


