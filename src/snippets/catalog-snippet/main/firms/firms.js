//= tiles/tiles.js
$(document).on('click', '#firms a', function() {
  
  showLoading(st.ids.main);
  
  var $this = $(this),
      // Массив категорий
      categories = $this.attr('data-cat'),
      headingName = $this.find('.tile__name')[0].innerHTML;
  
  st.breadcrumb.firm.short_name = $this.attr('data-firm');
  
  var heading = buildHeadingViewHTML("firm", headingName);
  var breadcrumb = buildBreadcrumbViewHTML("firm", headingName, "", "");
  var bcAndHeading = '<div id="firm">' + container + breadcrumb + heading + '</div></div>';
  
  
  
  st.buildAndShowCategoriesHTML(st.ids.main, categories);
  
  setTimeout(function() { $main.prepend(bcAndHeading); 
  $main.wrapInner('<div class="mainContent__firm"></div>');
                        }, 200);
  return false;
});// end click