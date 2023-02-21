(function ($) {

  // visual
  $(function(){
    
    var visual = $('.visual-box-inner');

    visual.slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

    visual.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var image = $('.visual-image li');

      image.eq(nextSlide).addClass('active');
      image.eq(nextSlide).siblings().removeClass('active');
    });
  });

  // simulation
  $(function(){
    
  //   var simulationList = $('.simulation-box > .list');

  //   simulationList.slick({
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 6,
  //     centerMode: true,
  //     autoplay: true,
  //     swipeToSlide: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 3
  //         }
  //       }
  //     ]
  //   });

    var mySwiper = new Swiper('.simulation-box', {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: {
        enabled: true,
      },
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
      speed: 3000,
      loop: true,
      freeModeMomentum: false,
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 22
        }
      }
    });

    $('.simulation-box').on('mouseenter', function(){
      mySwiper.autoplay.stop();
    });
    $('.simulation-box').on('mouseleave', function(){
      mySwiper.autoplay.start();
    });
  });


  // mall
  // $(function(){
    
  //   var mallbox = $('.mall-box');
  //   var mallBig = mallbox.find('.big');
  //   var mallThumbnail = mallbox.find('.thumbnail a');

  //   mallThumbnail.on('click', function(){
  //     var $this = $(this);
  //     var $src = $this.find('img').attr('src');

  //     mallBig.find('img').attr('src', $src);

  //     return false;
  //   });
    
  // });

  // mall
  $(function(){
    
    var mall = $('.mall-slick');

    mall.slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      // fade: true,
      autoplay: true,
    });

  });

  // edu
  $(function(){

    var win = $(window);
    var education = $('.section-education');
    var campBox = education.find('.camp-people');
    var counterFlag = true;

    function textAnimation(valNum, target, duration, delay) {
      $({ val : 0 }).delay(delay).animate({ val : valNum }, {
        delay: delay,
        duration: duration,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          target.text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          target.text(num);
        }
      }); 
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // scroll
    win.on('scroll load', function(){
      var top = win.scrollTop();
      if(top + win.height() >= $('.edu-box').offset().top && counterFlag){

        textAnimation(1048, campBox.eq(0).find(' > div').eq(0).find('strong'), 2500, 0);
        textAnimation(248522, campBox.eq(0).find(' > div').eq(1).find('strong'), 3500, 500);
        textAnimation(536, campBox.eq(1).find(' > div').eq(0).find('strong'), 2500, 1000);
        textAnimation(128957, campBox.eq(1).find(' > div').eq(1).find('strong'), 3500, 1500);
        
        counterFlag = false;
      }
    });

    
    
  });


})(jQuery);