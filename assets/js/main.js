
$(document).ready(function() {
 
  $('.owl-menu-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		autoplay: 3000,
		margin:30,
		  responsive:{
        300: {
          items: 5
        }
		  }
	  })
   
  });