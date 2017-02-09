$(document).on( 'click', '#covers a', function( event ) {
  showLoading('#main');
  var $this = $(this),
      category = $this.attr('data-cat'),
      categoryName = $this.find('.tile__name')[0].innerHTML;
  
  console.log(categoryName);
  $st.buildAndShowCategoryHTML(category, categoryName);
  // Передай нав цеп данные.
  event.preventDefault();
});// end click