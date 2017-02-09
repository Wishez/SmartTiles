$(document).on('click', '#options a', function(e) {
  showLoading('#main');
  var $this = $(this);
  var categories = $this.attr('data-cat'),
      headingName = $this.find('.option__variant')[0].innerHTML;
  
  var heading = buildHeadingViewHTML(false, headingName);
  var breadcrumb = buildBreadcrumbViewHTML("", headingName, "", "");
  console.log(heading);
  console.log(breadcrumb);
  
  st.buildAndShowCategoriesHTML('#main', categories);
  
  var bcAndHeading = "" + breadcrumb + heading;
  $main.delay(10).queue(function (next) {
    $(this).prepend(bcAndHeading);
    next();
  });
  e.preventDefault();
});