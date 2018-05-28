$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
    

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
            var scrollDistance = $(window).scrollTop();
				if ($(this).position().top <= scrollDistance) {
						$('.nav a.active').removeClass('active');
						$('.nav a').eq(i).addClass('active');
				}
		});
}).scroll();	
		


