!function(a){a(function(){var e=function(e,o){var n=(n=new Date).setTime(n.getTime()+24*o*60*60*1e3);localStorage.setItem(e,n)};(function(e){var o=(o=new Date).setTime(o.getTime());return parseInt(localStorage.getItem(e))>o})("today")?a(".popup").hide():a(".popup").show(),a(".popup .today-close").on("click",function(){return e("today",1),a(".popup").hide(),!1}),a(".popup .pop-close").on("click",function(){return a(".popup").hide(),!1})}),a(function(){var e=a(".visual-box-inner");e.slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,fade:!0,autoplay:!0,prevArrow:a(".prev"),nextArrow:a(".next")}),e.on("beforeChange",function(e,o,n,t){var i=a(".visual-image li");i.eq(t).addClass("active"),i.eq(t).siblings().removeClass("active")})}),a(function(){var e=new Swiper(".simulation-box",{slidesPerView:2,spaceBetween:10,freeMode:{enabled:!0},autoplay:{delay:1,disableOnInteraction:!0},speed:3e3,loop:!0,freeModeMomentum:!1,breakpoints:{768:{slidesPerView:5,spaceBetween:22}}});a(".simulation-box").on("mouseenter",function(){e.autoplay.stop()}),a(".simulation-box").on("mouseleave",function(){e.autoplay.start()})}),a(function(){a(".mall-slick").slick({dots:!1,arrows:!1,infinite:!0,speed:300,slidesToShow:1,autoplay:!0})}),a(function(){var e=a(window),o=a(".section-education").find(".camp-people"),n=!0;function t(e,o,n,t){a({val:0}).delay(t).animate({val:e},{delay:t,duration:n,step:function(){var e=i(Math.floor(this.val));o.text(e)},complete:function(){var e=i(Math.floor(this.val));o.text(e)}})}function i(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}e.on("scroll load",function(){e.scrollTop()+e.height()>=a(".edu-box").offset().top&&n&&(t(2596,o.eq(0).find(" > div").eq(0).find("strong"),2500,0),t(471076,o.eq(0).find(" > div").eq(1).find("strong"),3500,500),t(1012,o.eq(1).find(" > div").eq(0).find("strong"),2500,1e3),t(243e3,o.eq(1).find(" > div").eq(1).find("strong"),3500,1500),n=!1)})})}(jQuery);