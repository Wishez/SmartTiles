var $main = $('#main');
$('#contacts').on('click', function(e) {
  showLoading('#main');
  switchActiveMenu(this);
  $.get(contactsHtml).done(function(data){
    $main.html(data);
  });//end get
  e.preventDefault();
}); // end click
$('#home').on('click', function(e) {
  showLoading('#main');
  switchActiveMenu(this);
  $.get(homeHtml).done(function(data) {
    $main.html(data);
  });
  e.preventDefault();
}); // end click
var $btnTop = $('#btnTop');
$btnTop.hide();
$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    $btnTop.fadeOut(1000);
  } else {
    $btnTop.fadeIn(1000);
  }  
});// end scroll