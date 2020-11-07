$(document).ready(function(){

  const slider = $(".owl-carousel");
  slider.owlCarousel({
    nav: true,
    margin:5,
    // center:true,
    loop:true,
    autoWidth:true,
    items:5,
    dots: true,
    smartSpeed: 2000,
    responsive:{
      0:{
          items:1,
          nav: false,
      },
      768:{
          items:3
      },
      992:{
          items:4,
          nav: true,
      },
      1170:{
        items:5
        
    }
  }
  });

  
});
