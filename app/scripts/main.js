'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here


   $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




	   	$('.nav-appear-button').on('click',function(e){
	   		e.preventDefault();
	   		$('.nav-small').toggleClass('nav-small-on');
	   	});

   	$('.animationbutton').on('click',function(e){
	e.preventDefault();
	$('.crookedi').toggleClass('straightletters');
	$('.crookeds').toggleClass('straightletters');
	$('.crookeds2').toggleClass('straightletters');
	$('.crookedi2').toggleClass('straightletters');
	$('.crookedm').toggleClass('straightletters');
	$('.crookedp').toggleClass('straightletters');
	$('.crookedl').toggleClass('straightletters');
	$('.crookede').toggleClass('straightletters');

	});





   });
})(jQuery);
