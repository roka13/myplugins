/**
 * My JQuery-Plugin
 * @author Göran Karlsson (roka13)
 * Released under the MIT license
 * http://jquery.org/license
 * To be used together with JQuery
 * Date: 2014-03-15
 * Purpose for this plugin is to move a selected object
 * Example  a specific image or text to the left over the screen
 * and put it back on the original place.
 * The easy way is to use  specific id:s for the selected elements
 *  Example code for initiating it on a  site with three id:s( rubrik,texten and img9 ).
 * $('#rubrik, #texten, #img9 ' ).click(function() {
 *  $(this).slideDirection();
 * });
 */
  (function($) {
  
    $.fn.slideDirection = function() {
	// save the original position 
		$(this)
		.data('original-place',$(this).offset().left);
		
		return this.each(function() {
		//shifting object
		
		var obj = $(this),
	    posLeft = obj.offset().left;
				
		obj
		  .css('left' , posLeft )
		  .css('position' , 'absolute' );
		// set timer 
		var anTimer = setInterval(function(){
			console.log('flyttpågår');
			obj.css('left', -- posLeft);
			// stop at left margin and 
			if (posLeft < 0) {				
				clearInterval(anTimer);
				// return to original position
			obj
			.css('left' , $(this).data('original-place'))
			.css('position','inherit');
			}
			}, 10);  // timer intervall in mseconds
		}) 
	}
  }) (jQuery);