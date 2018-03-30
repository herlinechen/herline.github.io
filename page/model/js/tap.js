/*
	tap
*/
define('tap',function(){
	var exports = {};
	exports.init = function(){
		document.getElementById('main').innerHTML += ' tap';
	};
	return exports;
});