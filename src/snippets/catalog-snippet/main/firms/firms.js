//= tiles/tiles.js
$(document).on('click', '#firms a', function() {
  
  showLoading(st.ids.main);
  
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'),
      headingName = $this.find('.tile__name')[0].innerHTML;
  
  st.breadcrumb.firm.short_name = $this.attr('data-firm');
  st.breadcrumb.firm.name = headingName;
  
  var heading = buildHeadingViewHTML("firm", headingName);
  var breadcrumb = buildBreadcrumbViewHTML("firm", "categories", headingName, "", "");
  var bcAndHeading = container + breadcrumb + heading + '</div>';
  
  
  
  st.buildAndShowCategoriesHTML(st.ids.main, categories);
  
  setTimeout(function() { $main.prepend(bcAndHeading); 
  $main.wrapInner('<div id="categoriesFirm" class="mainContent__firm"></div>');}, 200);
  
  return false;
});// end click