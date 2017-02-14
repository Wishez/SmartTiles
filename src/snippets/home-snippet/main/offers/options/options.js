$(document).on('click', '#options a', function(e) {
  showLoading('#main');
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'), 
      headingName = $this.find('.option__variant')[0].innerHTML;
  
  var heading = buildHeadingViewHTML(false, headingName);
  var breadcrumb = buildBreadcrumbViewHTML(false, "categories", headingName, "", "");
  var bcAndHeading = '<div id="optionCategory">' + container + breadcrumb + heading + '</div></div>';
  
  st.buildAndShowCategoriesHTML('#main', categories);
  
  setTimeout(function() { $('#main').prepend(bcAndHeading); }, 200);
  
  e.preventDefault();
});