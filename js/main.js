$(function () {
    // Translation slider settings
    $('.translation__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    // Efficiency slider settings
    $('.efficiency__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
    });

    // Team slider settings
    $('.team__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1151,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 821,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 551,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    // Fancybox
    $('[data-fancybox="gallery"]').fancybox({
    });

    // Header menu mobile
    $('.header__bottom-btn').on('click', function(){
        $('.header__bottom-items').toggleClass('active');
    })

    $('.header__bottom-btn').on('click', function(){
      $('.header__bottom-btn').toggleClass('active');
    })
})


// Counter number
let a = 0;
$(window).scroll(function() {

  let oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.clients__number').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

// Popup
const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}

const popup2 = document.querySelector('.popup-benefits');
function showPopup2() {
  popup2.classList.add('open');
}
function hidePopup2() {
  popup2.classList.remove('open');
}