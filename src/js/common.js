import $ from 'jquery';
import slick from 'slick-carousel'

$(document).ready(function() {
	console.log( "ready!" );
	let add = (a, b) => a + b
	console.log(add(2,3))
	$('.basic-slider').slick({
		prevArrow: '<i class="left"></i>',
		nextArrow: '<i class="right"></i>'
	});
});