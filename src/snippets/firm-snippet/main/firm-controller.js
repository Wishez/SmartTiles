$(document).on('click', '#firm a.tile, #foundCollections a.tile', function() {
  $st.showLoading('#main');
  
  var $this = $(this);
  // Кэшируем данные выбранной коллекции.
//  $st.breadcrumb.firm.short_name = $(this).attr('data-firm');
  $st.breadcrumb.collection.short_name = $this.attr('data-col');
  $st.breadcrumb.collection.name = $this.find('.tile__name').html();
  
  $st.buildAndShowCollectionHtml('firm');
  
  return false;
});
// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#firmCategories a.tile', function(e) {
  $st.showLoading("#main");
  
  var $this = $(this);
 
  $st.breadcrumb.category.short_name = $this.attr('data-cat');
  $st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  $st.buildCategoryOfFirmHTML();
  
  e.preventDefault();
});// end click