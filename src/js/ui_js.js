(function ($) {

  // header
  $(function(){
    var win = $(window);
    var body = $('body');
    var header = $('#header');
    var menu = header.find('.menu');
    
    menu.on('click', function(){
      body.toggleClass('over-hidden');
      header.toggleClass('active');
      return false;
    });

    // win.scroll(function(){

    //   ($(this).scrollTop() > 0) ? header.addClass('active') : header.removeClass('active') ;

    // });
    
  });

  // title animation
  $(function(){

    AOS.init();
		$(window).on('load', function () {
      AOS.refresh();
    });
    document.addEventListener('aos:in:inview', function(e) {
      // e.detail.classList.add('text-red');
      console.log('test');
    });
    
  });


})(jQuery);