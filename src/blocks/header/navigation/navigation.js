$(document).on('click', '#subNav .subCategory__refer, #btnTop', function(e) {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  e.preventDefault();
});// end click

// Навигационные индификаторы

loadSelectedMenu(st.nav.contacts, smartApp.getContacts);

$(document).on('click', st.nav.home + ', #bcHome', function(e) {
  showLoading('#main');
  switchActiveMenu(home);
  st.loadHomeContent();
  e.preventDefault();
}); // end click
//loadSelectedMenu('#catalog', smartApp.getCatalog);
$(document).on('click', st.nav.catalog + ', #bcCatalog', function(e) {
  showLoading('#main');
  switchActiveMenu(catalog);
  smartApp.getCatalog().done(function(catalog) {
    $main.html(catalog);
    st.buildAndShowCategoriesHTML(false, false);
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