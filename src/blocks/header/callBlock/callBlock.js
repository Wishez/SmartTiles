var $callIcon = $('.call__icon i');

$callIcon.hover(
  function() {
    var $this = $(this);
    $this
      .stop(true)
      .animate({
        opacity: .1
      }, 250, function() {
        $this
          .removeClass('fa-phone')
          .addClass('fa-volume-control-phone');
      })
      .animate({
        opacity: 1
      }, 250);
  },
  function() {
    var $this = $(this);
    $this
      .stop(true)
      .animate({
        opacity: .1
      }, 250, function() {
        $this
          .removeClass('fa-volume-control-phone')
          .addClass('fa-phone');
      })
      .animate({
        opacity: 1
      }, 250);
  }                    
);// end hover



