$(document).on('click', '#subNav .subCategory__refer, #btnTop' , function() {
  var $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  
  return false;
});// end click

//loadSelectedMenu(st.nav.contacts, smartApp.getContacts);

$(document).on('click', st.nav.contacts, function() {
   showLoading(st.ids.main);
   switchActiveMenu(this);
  
   smartApp.getContacts().done(function( contactsHtml ){  
     $main.html(contactsHtml);
     
     settingUpForm();
   });//end get
  
  return false;
});

$(document).on('click', st.nav.home + ', ' + st.ids.breadcrumb.home, function() {
  showLoading(st.ids.main);
  switchActiveMenu(home);
  
  st.loadHomeContent();
  
  return false;
}); // end click

$(document).on('click', st.nav.catalog + ', ' + st.ids.breadcrumb.catalog , function() {
  showLoading(st.ids.main);
  switchActiveMenu(catalog);
  
  smartApp.getCatalog().done(function(catalog) {
    st.select.$main.html(catalog);
    st.buildAndShowCatalog();
  });
  
  return false;
}); // end click

st.select.$btnTop.hide();

$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    st.select.$btnTop.fadeOut(1000);
  } else {
    st.select.$btnTop.fadeIn(1000);
  }  
});// end scroll