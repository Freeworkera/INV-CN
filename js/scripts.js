$(function(){
	$('.contacts .info').slick({
		arrows: false,
		dots: false
	});
	$('.contacts .urls a').on('click', function(e){
		e.preventDefault();
		var slide=$(this).attr('slide');
		$('.contacts .info').slick('slickGoTo', slide);
	});
	$('.contacts .info').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.contacts .urls a').removeClass('active');
		$('.contacts .urls a[slide='+nextSlide+']').addClass('active');
	});
	$('.contacts .btns').on('click', function(){
		$(this).parent().toggleClass('active');
	});

	var srv_bg=$('.services .bg').offset();
	$('.services .bg').css('background-position', srv_bg.left+'px 0px');

	$(window).on('resize', function(){
		var srv_bg=$('.services .bg').offset();
		$('.services .bg').css('background-position', srv_bg.left+'px 0px');
	});

	window.sr = ScrollReveal();
	sr.reveal('.anmbbb', { 
		duration: 1200,
		distance: '120px',
		scale: 1,
	});	
});