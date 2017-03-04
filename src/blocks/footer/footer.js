$('.signature__author').on('click', function() {
  var url = $(this).attr('href');
  
  window.open(url);
  
  return false;
});// end click

$('#footer a').hover(
   function() {
     if (!Modernizr.csstransitions)
        $(this)
          .stop()
          .animate({
            color: '#76bdff'
          }, 500);
   },
   function() {
     if (!Modernizr.csstransitions)
        $(this)
          .stop()
          .animate({
            color: '#108cff'   
          }, 500);
});