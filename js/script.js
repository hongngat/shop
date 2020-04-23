
$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('#navMenu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});
$('.dropdown').on('mouseenter mouseleave click tap', function() { 
    $(this).toggleClass("show"); 
}); 