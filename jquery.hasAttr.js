/*
* Author : Anthony Bucci - lastralla@hotmail.com
* Date : April 2013
* Version : 0.9
*/
(function ($) {
  $.fn.hasAttr = function (attrName) {
		return (this.filter(function(index) {
			if ( !!$(this).attr(attrName) ) {
				return true;
			}
			return false;
		}));
	};
}(jQuery));
