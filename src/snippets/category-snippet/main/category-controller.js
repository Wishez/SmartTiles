$(document).on('click', '#category a.tile, #foundCategories a.tile', function(e) {
  $st.showLoading("#main");
  
  var $this = $(this);
  // Кэшируем иформацию о фирме
  $st.breadcrumb.firm.short_name = $this.attr('data-firm');
  $st.breadcrumb.firm.name = $this.find('.tile__name').html();
  
  $st.buildAndShowFirmHTML();
  
  e.preventDefault();
});// end click

$(document).on('click', '#categoryCollections a.tile', function() {
  $st.showLoading('#main');
  
  var $this = $(this);
  
  $st.breadcrumb.collection.name = $this.find('.tile__name').html();
  $st.breadcrumb.collection.short_name = $this.attr('data-col');
  
  $st.buildAndShowCollectionHtml(false);
  
  return false;
});
