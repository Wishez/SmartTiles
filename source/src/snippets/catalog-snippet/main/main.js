//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
st.buildAndShowCategoriesHTML = function() {
  var $covers = $('#covers');
  var $firms = $('#firms');
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаем шаблон плитки.
    smartApp.getTile().done(function(tileHtml) {     
      var categoriesViewHtml = buildTilesViewHtml(categories, tileHtml);
      
      $covers.html(categoriesViewHtml);
    });
  });
}; 