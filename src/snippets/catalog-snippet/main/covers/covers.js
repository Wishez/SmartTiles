$(document).on( 'click', '#covers a', function( event ) {
  showLoading('#main');
  var $this = $(this),
      category = $this.attr('data-cat'),
      categoryName = $this.find('.tile__name')[0].innerHTML;
  
  console.log(categoryName);
  $st.buildAndShowCategoryHTML(category, categoryName);
  // Передай нав цеп данные.
  setTimeout(function () { $('#bcCategory, #category a').attr('data-cat', category); }, 100);
  event.preventDefault();
});// end click