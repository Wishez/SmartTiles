var $callIcon = $('.call__icon i');
var $tel = $('.call__tel');

$callIcon.hover(
  function() {
    $callIcon
      .removeClass('fa-phone')
      .addClass('fa-volume-control-phone');
  },
  function() {
    $callIcon
      .removeClass('fa-volume-control-phone')
      .addClass('fa-phone');     
  }                    
);// end hover



