/*
* Author : Anthony Bucci - lastralla@hotmail.com
* Date : April 2013
* Version : 0.9
*/
(function ($) {
  $.fn.hasAttr = function (attrName) {
		return (this.filter(function() {
			if ( typeof $(this).attr(attrName) !== undefined ) {
				// note: this test does not distinguish between an element with no 'attrName' attribute
				// or an element with an 'attrName' equal to an empty string, both cases return false
				return true;
			}
			return false;
		}));
	};
}(jQuery));
