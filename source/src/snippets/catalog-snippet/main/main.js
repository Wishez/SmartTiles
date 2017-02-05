//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
st.buildAndShowCategoriesHTML = function() {
  var $covers = $('#covers');
  smartApp.getCategories().done(function(categories){
    smartApp.getTile().done(function(tileHtml) {     
        
      var categoriesViewHtml = buildCategoriesViewHtml(categories, tileHtml);
      console.log(categoriesViewHtml);
      
      $covers.html(categoriesViewHtml);
    });
  });
};
function buildCategoriesViewHtml(categories, tileHtml) {
  var finalHtml = '<ul class="tiles__tilesList tilesList">';
  categories.map(function(category) {
    var html = tileHtml;
    var name = "" + category.name;
    var short_name = category.short_name;
    var description = category.description;
//    console.log(html, name, short_name,description);
    html = insertProperty(tileHtml, "short_name", short_name); 
//    console.log(html);
    html = insertProperty(tileHtml, "name", name);
//    console.log(html);
    html = insertProperty(tileHtml, "description", description);
//    console.log(html);
    finalHtml += html;
  });
  finalHtml += '</ul></div>';                  
  return finalHtml;
}
  