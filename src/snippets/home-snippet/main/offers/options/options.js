$(document).on('click', '#options a', function(e) {
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'), 
      headingName = $this.find('.option__variant').text();
      
  $st.showLoading($st.ids.main);
  
  $st.buildHomeCategories({name: headingName, arrayCategories: categories});
  
  e.preventDefault();
});