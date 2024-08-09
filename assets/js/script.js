$( document ).ready(function() {
    h = $(window).height();
    w = $(window).width();
    $('#wrapper').css({'height':h});
    $('.slider').css({'height':(h/2)+1+'px'});
    $('#info,#about, #colaboradores, #videos').css({'height':h-120+'px'});

    slider = $('#slider1').bxSlider({
    	controls:false,
    	auto: true,
      speed: 1200,
      pager: false,
    	randomStart: true,
      infiniteLoop: true,
      stopAuto: false,
      touchEnabled: false,
      pause: 5000,
      preloadImages: 'all'
    });

    slider2 = $('#slider2').bxSlider({
      controls:false,
      auto: true,
      speed: 2000,
      pager: false,
      randomStart: true,
      infiniteLoop: true,
      stopAuto: false,
      touchEnabled: false,
      pause: 4500,
      preloadImages: 'all',
      autoDirection: 'prev'
    });


    $(window).load(function(){
    	$('.slider').animate({
    		'opacity':1
    	});
      slider.reloadSlider();
      slider2.reloadSlider();
      console.log('all sliders haver been loaded');
    });
/*
    $(".bx-controls-direction a").click(function () {
        slider.stopAuto();
        slider.startAuto();
        slider2.stopAuto();
        slider2.startAuto();
    });
*/

    $('#main-menu li a').click(function(e){
        e.preventDefault();
        divToOpen = '#' + $(this).parent().attr('class');
        console.log (divToOpen);
        $('.content').fadeOut();
        $('#closeMenu, .overlay').fadeIn();
        $(divToOpen).fadeIn();
        $('#main-menu li a').removeClass('current');
        $(this).addClass('current');
        if(w < 767){
          $('#main-menu ul').fadeOut();
        }
    });


    $('#openMenu').click(function(e){
      $('.overlay, #main-menu ul, #closeMenu').fadeIn();
      $(this).fadeOut();
      $('#main-menu li').css({'height':h/4+'px', 'line-height':h/4+'px'});
    });

    $('#closeMenu').click(function(e){
      $(this).fadeOut();
      $('.overlay, .content').fadeOut();
      if(w < 767){
        $('#openMenu').fadeIn();
        $('#main-menu ul').fadeOut();
      }
    });

});

$( window ).resize(function() {
  	h = $(window).height();
    w = $(window).width();
    $('#wrapper').css({'height':h});
    $('.slider').css({'height':(h/2)+1+'px'});
    slider.reloadSlider();
    slider2.reloadSlider();
});
