var clientW = 0;
$(window).resize(function() {
  var clientW = window.innerHeight;
});
var $callIcon = $('.call__icon i');
var $tel = $('.call__tel');
$callIcon.hover(
  function() {
    $callIcon
      .removeClass('fa-phone')
      .addClass('fa-volume-control-phone');
    $tel.stop().fadeIn();
  },
  function() {
    $callIcon
      .removeClass('fa-volume-control-phone')
      .addClass('fa-phone');
    if (clientW < 1199 && clientW > 992) {
      $tel.stop().fadeOut("slow");
    }
  }                    
);// end hover

