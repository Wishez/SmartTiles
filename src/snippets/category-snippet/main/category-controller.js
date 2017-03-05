$(document).on('click', '#category a.tile', function(e) {
  
  var $this = $(this);
  // Кэшируем иформацию о фирме
  $st.breadcrumb.firm.short_name = $this.attr('data-firm');
  $st.breadcrumb.firm.name = $this.find('.tile__name').text();
  
  $st.showLoading($st.ids.main);
  
  $st.buildAndShowFirmHTML();
  
  e.preventDefault();
});// end click

$(document).on('click', '#categoryCollections a.tile', function() {
  
  var $this = $(this);
  
  $st.breadcrumb.collection.name = $this.find('.tile__name').text();
  $st.breadcrumb.collection.short_name = $this.attr('data-col');
  
  $st.showLoading($st.ids.main);
  
  $st.buildAndShowCollectionHtml(false);
  
  return false;
});
