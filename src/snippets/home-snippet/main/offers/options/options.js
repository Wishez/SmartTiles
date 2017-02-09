$(document).on('click', '#options a', function(e) {
  showLoading('#main');
  var $this = $(this);
  var categories = $this.attr('data-cat'),
      headingName = $this.find('.option__variant')[0].innerHTML;
  
  var heading = buildHeadingViewHTML(false, headingName);
  var breadcrumb = buildBreadcrumbViewHTML("", headingName, "", "");
  var bcAndHeading = breadcrumb + heading;
  
  st.buildAndShowCategoriesHTML('#main', categories);
  setTimeout(function() { $('#main').prepend(bcAndHeading); }, 100);
  
  
  
  e.preventDefault();
});