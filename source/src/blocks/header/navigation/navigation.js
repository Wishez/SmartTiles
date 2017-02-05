$(document).on('click', '#subNav .subCategory__refer, #btnTop', function(e) {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  e.preventDefault();
});// end click


loadSelectedMenu('#contacts', smartApp.getContacts);

$('#home').on('click', function(e) {
  showLoading('#main');
  switchActiveMenu(this);
  st.loadHomeContent();
  e.preventDefault();
}); // end click
//loadSelectedMenu('#catalog', smartApp.getCatalog);
$('#catalog').on('click', function(e) {
  showLoading('#main');
  switchActiveMenu(this);
  smartApp.getCatalog().done(function(catalog) {
    $main.html(catalog);
    st.buildAndShowCategoriesHTML();
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