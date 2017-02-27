$('.signature__author').on('click', function() {
  var url = $(this).attr('href');
  
  window.open(url);
  return false;
});