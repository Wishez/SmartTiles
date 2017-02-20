$(document).on('click', '#options a', function(e) {
  showLoading('#main');
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'), 
      headingName = $this.find('.option__variant')[0].innerHTML;
      
      st.buildHomeCategories({name: headingName, arrayCategories: categories});
  
  e.preventDefault();
});