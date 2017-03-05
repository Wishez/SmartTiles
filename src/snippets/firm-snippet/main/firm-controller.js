$(document).on('click', '#firm a.tile, #foundCollections a.tile', function() {
  
  var $this = $(this);
  // Кэшируем данные выбранной коллекции.

  $st.breadcrumb.collection.short_name = $this.attr('data-col');
  $st.breadcrumb.collection.name = $this.find('.tile__name').text();
  
  $st.showLoading($st.ids.main);
  
  $st.buildAndShowCollectionHtml('firm');
  
  return false;
});
// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#firmCategories a.tile', function(e) {
  
  var $this = $(this);
 
  $st.breadcrumb.category.short_name = $this.attr('data-cat');
  $st.breadcrumb.category.name = $this.find('.tile__name').text();
  
  $st.showLoading($st.ids.main);
  
  $st.buildCategoryOfFirmHTML();
  
  e.preventDefault();
});// end click