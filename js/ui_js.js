!function(e){e(function(){e(window);var n=e("body"),o=e("#header");o.find(".menu").on("click",function(){return n.toggleClass("over-hidden"),o.toggleClass("active"),!1})}),e(function(){AOS.init(),e(window).on("load",function(){AOS.refresh()}),document.addEventListener("aos:in:inview",function(n){console.log("test")})})}(jQuery);