$(document).on('click', '#options a', function(e) {
  $st.showLoading('#main');
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'), 
      headingName = $this.find('.option__variant').text();
      
  $st.buildHomeCategories({name: headingName, arrayCategories: categories});
  
  e.preventDefault();
});