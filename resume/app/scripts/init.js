/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {
  $('#da-slider').cslider({
    autoplay  : true,
    bgincrement : 450
  });
  $('.motto-scroll').find('.motto-inner').width($(window).width());
  setInterval(function(){
      $('.motto-scroll').animate({
        'left':-($('.motto-scroll').find('.motto-inner').eq(0).outerWidth())
      },1000,function(){
          var temp = $('.motto-scroll').find('.motto-inner').eq(0);
          $('.motto-scroll').append(temp.clone());
          temp.remove();
          $('.motto-scroll').css('left','0px');
      });
      
  },5000);
  $('.footer-name span').click(function(){
    $('.footer-icon').toggle();
    $('html, body').stop().animate({
        'scrollTop': $('.footer-icon').offset().top
    }, 1000, 'swing');
  });
  $('.footer-icon a').click(function(){
    $('#my_profile').show();
    changeProfile();

  });


  //   setTimeout(function() {
	 //   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 // }, 100);

new WOW().init();


   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 600, 'swing', function () {
          window.location.hash = target;
      });
	});




	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;
			active_section = $(this);
      
			if (direction === "up") active_section = active_section.prevAll('section').eq(0);
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});



   $('section').not('#contact').css({ 'height': $(window).height() });
   $('#contact').css({ 'height': $(window).height()-48 });
   $('#my_profile').css({ 'height': $(window).height() });
   
   // $(window).on('resize', function() {
   //      $('#my_profile').css({ 'height': $(window).height() });
   //      $('#home').css({ 'height': $(window).height() });
   //      $('body').css({ 'width': $(window).width() })
   // });



  var flag = true;
    function changeSkillWidth(windowTop) {
        var skillTop = $('#skill').offset().top;
        if (windowTop >= skillTop && flag) {
            var skills = $('.skill-width');
            for (var i = skills.length - 1; i >= 0; i--) {
              $(skills[i]).css('width',$(skills[i]).data('width') + '%');
            };
            var count1 = 0;
            var count2 = 0;
            var count3 = 0;
            var count4 = 0;
            var count5 = 0;
            var time1 = setInterval(function(){
                
                $(skills[0]).next('.width-value').text(count1 + '%');
                count1++;
                if (count1 == $(skills[0]).data('width')) {
                    clearInterval(time1);
                }
            },20);
            var time2 = setInterval(function(){
                $(skills[1]).next('.width-value').text(count2 + '%');
                count2++;
                if (count2 == $(skills[1]).data('width')) {
                    clearInterval(time2);
                }
            },20);
            var time3 = setInterval(function(){
                $(skills[2]).next('.width-value').text(count3 + '%');
                count3++;
                if (count3 == $(skills[2]).data('width')) {
                    clearInterval(time3);
                }
            },20);
            var time4 = setInterval(function(){
                $(skills[3]).next('.width-value').text(count4 + '%');
                count4++;
                if (count4 == $(skills[3]).data('width')) {
                    clearInterval(time4);
                }
            },20);
            var time5 = setInterval(function(){
                $(skills[4]).next('.width-value').text(count5 + '%');
                count5++;
                if (count5 == $(skills[4]).data('width')) {
                    clearInterval(time5);
                }
            },20);
            flag = false;
        }
        
    };
    function drawCircle(ctx,i){
      ctx.clearRect(0, 0, 200, 50);
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.arc(100, -80, 120, Math.PI*2, Math.PI*i, true);    
      // ctx.closePath();  
      ctx.strokeStyle = '#0084BD';  
      ctx.stroke();  
    };
    var profileFlag = true;
    function changeProfile(windowTop) {
      var profileTop = $('#my_profile').offset().top;
      if (profileFlag) {
        $('.profile-line-1').animate({
          'height' : '300'
        },800,function(){
          $('.profile-avatar').show().addClass('animated bounceIn');
          $('.profile-text').show().addClass('animated bounceIn');
          $('.profile-avatar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('.profile-smile').show();
            var ctx = $('canvas')[0];
            ctx = ctx.getContext('2d');
            var i = 2;
            var time = setInterval(function(){
              drawCircle(ctx,i);
              i = i - 0.01;
              if (i <= 0) {
                clearInterval(time);
              }
            },10);
            
            $('.profile-line-2').animate({
              'height' : '300'
            },800);
          });
          
        });
        profileFlag = false;
      }
    };
   $(window).on('scroll', function(e) {
    e.preventDefault();
		var h = $('#home').height();
		var y = $(window).scrollTop();
    changeSkillWidth(y);
    var nav = $('#nav-wrap');
      
   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
      nav.fadeOut('fast');
   } 
    else {
       if (y < h*.20) {
          nav.removeClass('opaque').fadeIn('fast');
       }
       else {
          nav.addClass('opaque').fadeIn('fast');
       }
    }

	});

   $(window).on('mousewheel DOMMouseScroll', function(e){
       e.preventDefault();
       var event = e.originalEvent,
               delta = event.wheelDelta || -event.detail,
               isMouseScrollDown = delta < 0 ? true : false;
       if (isMouseScrollDown) {
        $('#nav li').filter('.current').next('li').find('a').click();
       } else {
        $('#nav li').filter('.current').prev('li').find('a').click();
       }
       
   });



});








