
  My JQuery-Plugin jquery.slideDirection.js
 @author Göran Karlsson (roka13)
 Released under the MIT license
 http://jquery.org/license
  To be used together with JQuery
  Date: 2014-03-15
  Purpose for this plugin is to move a selected object
 Example  a specific image or text to the left over the screen
 and put it back on the original place.
 The easy way is to use  specific id:s for the selected elements
  Example code for initiating it on a  site with three id:s( rubrik,texten and img9 ).
  $('#rubrik, #texten, #img9 ' ).click(function() {
  $(this).slideDirection();
});
