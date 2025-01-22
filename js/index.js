$(document).ready(function(){
    $('.slick-slider').slick({
      infinite: true,         // Loop through slides
      slidesToShow: 3,        // Number of slides to show
      slidesToScroll: 1,      // Number of slides to scroll
      dots: true,             // Show navigation dots
      arrows: true,           // Show navigation arrows
      autoplay: true,         // Enable autoplay
      autoplaySpeed: 3000,    // Time between slides (in ms)
      responsive: [
        {
          breakpoint: 768,    // For smaller screens
          settings: {
            slidesToShow: 1   // Show 1 slide on mobile
          }
        }
      ]
    });
  });