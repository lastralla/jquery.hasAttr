/*
* Author : Anthony Bucci - lastralla@hotmail.com
* Date : April 2013
* Version : 0.9
*/
(function ($) {
  $.fn.hasAttr = function (attrName) {
		return (this.filter(function(index) {
			if ( typeof $(this).attr(attrName) !== undefined ) {
				return true;
			}
			return false;
		}));
	};
}(jQuery));
