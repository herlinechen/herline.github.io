/*
	win
*/
define('win',function(){
	var exports = {};
	exports.init = function(){
		document.getElementById('main').innerHTML += ' win';
	};
	return exports;
});