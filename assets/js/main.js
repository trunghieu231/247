
$(document).ready(function() {
 
  $('.owl-menu-item').owlCarousel({
		items:4,
		loop:true,
		autoplay: 3000,
		margin:30,
		  responsive:{
				0: {
					items: 1
				},
        600: {
					items: 2
				},
				1200: {
          items: 4
        }
		  }
	  })

		$('.owl-menu-project').owlCarousel({
			items:4,
			loop:true,
			autoplay: 3000,
			margin:30,
				responsive:{
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			})
   
  });