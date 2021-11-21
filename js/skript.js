$(document).ready(function(){
  $('.testimonials').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  });
  $('.team-card').slick({
      infinite: true,
      arrows: false,
      dots: true,
      speed: 1000,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnDotsHover: true,
      responsive: [
        {
        breakpoint: 421,
          settings: {
            slidesToShow: 1,
          }
          },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
          },
        {
          breakpoint: 1201,
          settings: "slick"
          },
        {
          breakpoint: 3000,
          settings: "unslick"
        }
    ]
  });
  $('.work ul').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 421,
          settings: {
            slidesToShow: 1,
          }
        },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
        },
      {
        breakpoint: 1025,
        settings: "slick"
        },
      {
        breakpoint: 3000,
        settings: "unslick"
      }
  ]
});
  $('.header-burger').click(function() {
  $('.header-burger, .header-top ul, .header-bottom').toggleClass('active');
  $('body').toggleClass('lock');
  });
});
