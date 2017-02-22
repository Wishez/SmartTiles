//= subNav/subNav.js
$(document).on( 'click', '#catalogCovers a, #homeCategories a', function( event ) {
  $st.showLoading('#main');
  
  var $this = $(this);
  
  // Заполняем и обновляем кэш при клике.
  $st.breadcrumb.category.short_name = $this.attr('data-cat');
  $st.breadcrumb.category.name = $this.find('.tile__name').html();
  

  $st.buildHomeAndCatalogCategory();
  
  event.preventDefault();
});// end click

$(document).on('click', '#catalogFirms a.tile, #foundFirms a.tile', function() {
  
  $st.showLoading($st.ids.main);
  
  var $this = $(this);
  
  $st.breadcrumb.firm.short_name = $this.attr('data-firm');
  $st.breadcrumb.firm.name = $this.find('.tile__name').html();
      
  $st.buildCatalogFirmHTML();
  
  return false;
});// end click
