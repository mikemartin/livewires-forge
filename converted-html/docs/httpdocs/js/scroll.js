// Generated by CoffeeScript 1.7.1
(function() {
  $('.js-scroll').click(function(e) {
    var dest;
    dest = $(this).attr('href');
    e.preventDefault();
    return $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  });

}).call(this);
