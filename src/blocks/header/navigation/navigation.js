$(document).on('click', '#subNav .subCategory__refer, #btnTop' , function() {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  
  return false;
});// end click

$(document).on('click', $st.nav.contacts, function() {
   $st.showLoading($st.ids.main);
   $st.switchActiveMenu(this);
  
   $st.showContactsHTML();
  
  return false;
});

$(document).on('click', $st.nav.home + ', ' + $st.ids.breadcrumb.home + ', #logo', function() {
  $st.showLoading($st.ids.main);
  $st.switchActiveMenu(home);
  
  $st.loadHomeContent();
  
  return false;
}); // end click

$(document).on('click', $st.nav.catalog + ', ' + $st.ids.breadcrumb.catalog , function() {
  $st.showLoading($st.ids.main);
  $st.switchActiveMenu(catalog);
  
  $st.showCatalogHTML();
  
  return false;
}); // end click

$st.select.$btnTop.hide();

$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    $st.select.$btnTop.fadeOut(1000);
  } else {
    $st.select.$btnTop.fadeIn(1000);
  }  
});// end scroll