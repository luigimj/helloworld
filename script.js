$(document).ready(function() {
	setInterval(function() {
		$('h1').animate({
			opacity: '0.3'
		}, 800).animate({
			opacity: '1'
		}, 100)
	}, 1000);
});
