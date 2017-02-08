//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
// homeCategories - категории ассортимента на главной странице.
st.buildAndShowCategoriesHTML = function(selector , homeCategories) {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаем шаблон плитки.
    smartApp.getTile().done(function(tileHtml) {     
      var categoriesViewHtml = "";
      
      if (homeCategories) {
        // Создаём массив категорий.
        homeCategories = homeCategories.split(" ");
        
        var sortCategories = [];
        
        categories = categories.forEach(function( category, i) {
          if (category.short_name == homeCategories[i]) {
            sortCategories.push(category);
          }
        });
        
        console.log(homeCategories);
        categoriesViewHtml = buildTilesViewHtml(sortCategories, tileHtml, "");
      } else {
        categoriesViewHtml = buildTilesViewHtml(categories, tileHtml, "");  
      }
      
      $(selector).html(categoriesViewHtml);
    });
  });
}; 