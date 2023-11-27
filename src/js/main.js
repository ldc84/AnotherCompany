(function ($) {

  // popup
  $(function(){
  
    /* 스토리지 제어 함수 정의 */
    var handleStorage = {
      // 스토리지에 데이터 쓰기(이름, 만료일)
      setStorage: function (name, exp) {
        // 만료 시간 구하기(exp를 ms단위로 변경)
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  
        // 로컬 스토리지에 저장하기
        // (값을 따로 저장하지 않고 만료 시간을 저장)
        localStorage.setItem(name, date)
      },
      // 스토리지 읽어오기
      getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
        // 시간이 남아 있으면 true, 아니면 false 리턴
        return parseInt(localStorage.getItem(name)) > now
      }
    };
    
    
    // 쿠키 읽고 화면 보이게
    (handleStorage.getStorage("today")) ? $(".popup").hide() : $(".popup").show() ;
  
    // 오늘하루 보지 않기 버튼
    $(".popup .today-close").on("click", function () {
      // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
      handleStorage.setStorage("today", 1);
      $(".popup").hide();
      return false;
    });
  
    // 일반 닫기 버튼
    $(".popup .pop-close").on("click", function () {
      $(".popup").hide();
      return false;
    });

  });

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

        textAnimation(2596, campBox.eq(0).find(' > div').eq(0).find('strong'), 2500, 0);
        textAnimation(471076, campBox.eq(0).find(' > div').eq(1).find('strong'), 3500, 500);
        textAnimation(1012, campBox.eq(1).find(' > div').eq(0).find('strong'), 2500, 1000);
        textAnimation(243000, campBox.eq(1).find(' > div').eq(1).find('strong'), 3500, 1500);
        
        counterFlag = false;
      }
    });

    
    
  });


})(jQuery);