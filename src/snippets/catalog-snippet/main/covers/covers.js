$(document).on( 'click', '#covers a, #optionCategory + .coverTiles a', function( event ) {
  showLoading('#main');
  var $this = $(this),
      category = $this.attr('data-cat'),
      categoryName = $this.find('.tile__name')[0].innerHTML;
  // Заполняем и обновляем кэш при клике.
  st.breadcrumb.category.short_name = category;
  st.breadcrumb.category.name = categoryName;
  
  $st.buildAndShowCategoryHTML(category, categoryName);
  
  event.preventDefault();
});// end click