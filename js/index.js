$(document).ready(function () {
  $(".slick-slider").slick({
    infinite: true, // Loop through slides
    slidesToShow: 4, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    dots: false, // Show navigation dots
    arrows: true, // Enable arrows
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides (in ms)
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992, // For screens smaller than 992px
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  });
});
