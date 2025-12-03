var hyeonyong = hyeonyong || {};
var $window = $(window),
	$body = $('body'),
	$wrap = $('#wrap'),
	$header = $("#header"),
    lenis,
	/* touch기능으로 mobile/tablet 판별하여 css에 root var 추가 <-- coarse 터치기기 : fine 웹 */
	windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	isTouchDevice;

hyeonyong.utils = {
	/**
	* hyeonyong.utils.scroll : page scroll plugin
	**/
	scroll: function() {
		lenis = new Lenis();
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => { lenis.raf(time * 1000)});
		gsap.ticker.lagSmoothing(0);
	},
	/**
	* hyeonyong.utils.intro : page intro
	**/
	intro: function () {
		var $intro = $('#intro'),
			$txt = $intro.find('.txt'),
			$transitionBox = $intro.find('.transition_box');
		
		var introMotion = gsap.timeline();

		introMotion.to($txt.eq(0),{
			opacity:1,
			y:0
		})
		.to($txt.eq(1),{
			opacity:1,
			y:0
		},'-=.4')
		.to($txt.eq(0),{
			opacity:0,
			y:'-300px',
			delay:.5,
		})
		.to($txt.eq(1),{
			opacity:0,
			y:'-300px',
		},'-=.4')
		.to($transitionBox,{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			delay:.5,
			duration:.75,
			onComplete:function(){
				$body.addClass('intro_end');
			}
		})
	},
	init: function () {
		hyeonyong.utils.scroll();
		hyeonyong.utils.intro();
	}
}

$window.on('load resize', function() {
	windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	isTouchDevice = (getComputedStyle(document.documentElement).getPropertyValue("--pointer")) == "coarse";
});

hyeonyong.utils.init();
