//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
st.buildAndShowCategoriesHTML = function() {
  var $covers = $('#covers');
  var $firms = $('#firms');
  smartApp.getCategories().done(function(categories){
    smartApp.getTile().done(function(tileHtml) {     
      var categoriesViewHtml = buildCategoriesViewHtml(categories, tileHtml);
      
      $covers.html(categoriesViewHtml);
    });
  });
};
function buildCategoriesViewHtml(categories, tileHtml) {
  var finalHtml = '<ul class="tiles__tilesList tilesList">';
  
  categories.map(function(category) {
    var html = tileHtml;
    var name = "" + category.name;
    var short_name = category.short_name + "/" + category.short_name;
    var description = category.description;
    
//    $('.tile').attr("data-cat", category.short_name);
    html = insertProperty(html, "category", category.short_name);
    html = insertProperty(html, "short_name", short_name); 
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    
    finalHtml += html;
  });
  
  finalHtml += '</ul></div>';                  
  
  return finalHtml;
}
  