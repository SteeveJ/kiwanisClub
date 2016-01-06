$(document).ready(function(){
	function jqUpdateSize(){
		// Get the dimensions of the viewport
		var width = $(window).width();
		var height = $(window).height();

		if(width>=768){
			$('.header-img').css('height', height-64)
		}else{
			$('.header-img').removeAttr('style');
		}

	};
	$(document).ready(jqUpdateSize);    // When the page first loads
	$(window).resize(jqUpdateSize);     // When the browser changes size

})