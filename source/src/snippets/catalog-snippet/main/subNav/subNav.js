$(document).on('click', '#subNav .subCategory__refer, #btnTop', function(e) {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  e.preventDefault();
});