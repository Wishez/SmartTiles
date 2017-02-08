$(document).on('click', '#options a', function(e) {
  showLoading('#main');
  var categories = $(this).attr('data-cat');
  st.buildAndShowCategoriesHTML('#main', categories);
  e.preventDefault();
});