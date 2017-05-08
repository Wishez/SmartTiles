$(document).on('click', '#subNav .subCategory__refer, #btnTop' , function() {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  
  return false;
});// end click
//
//$(document).on('click', $st.nav.contacts, function() {
//   $st.showLoading($st.ids.main);
//   $st.switchActiveMenu(this);
//  
//   $st.showContactsHTML();
//   $st.setPolifillForPlaceholder();
//   $('#name').focus();
//  
//   return false;
//});

// $st.nav.home, #logo
//$(document).on('click', $st.ids.breadcrumb.home, function() {
//  $st.showLoading($st.ids.main);
//  $st.switchActiveMenu($st.nav.home);
//  
//  $st.loadHomeContent();
//  
//  return false;
//}); // end click

////$st.nav.catalog
//$(document).on('click', $st.ids.breadcrumb.catalog , function() {
//  $st.showLoading($st.ids.main);
//  $st.switchActiveMenu($st.nav.catalog);
//  
//  $st.showCatalogHTML();
//  
//  return false;
//}); // end click

//$(document).on('click', $st.nav.service, function() {
//  $st.showLoading($st.ids.main);
//  $st.switchActiveMenu($st.nav.service);
//  
//  $st.showServiceHTML();
//  
//  return false;
//}); // end click

//$(document).on('click', $st.nav.projects + ',' + $st.ids.breadcrumb.projects, function() {
//  $st.showLoading($st.ids.main);
//  $st.switchActiveMenu($st.nav.projects);
//  
//  $st.showProjectsHTML();
//  
//  return false;
//}); // end click

$st.select.$btnTop.hide();

$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    $st.select.$btnTop.fadeOut(1000);
  } else {
    $st.select.$btnTop.fadeIn(1000);
  }  
});// end scroll