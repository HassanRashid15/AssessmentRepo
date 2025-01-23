$(document).ready(function(){
    $('.slick-slider').slick({
      infinite: true,         // Loop through slides
      slidesToShow: 4,        // Number of slides to show
      slidesToScroll: 1,      // Number of slides to scroll
      dots: true,             // Show navigation dots
      arrows: true,      
      centerPadding: "30px",      // Show navigation arrows
      autoplay: false,         // Enable autoplay
      autoplaySpeed: 3000,    // Time between slides (in ms)
      responsive: [
        {
          breakpoint: 992,    // For smaller screens
          settings: {
            slidesToShow: 2   // Show 1 slide on mobile
          }
        }
      ]
    });
  });