//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
// arrayCategories - массив категорий, извлечённых из data-cat категории на главной странице.
st.buildAndShowCategoriesHTML = function(selector , arrayCategories) {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаеем json с фирмами.
    smartApp.getCategoryFirms().done(function( firms ) {
      // Получаем шаблон плитки.
      smartApp.getTile().done(function(tileHtml) {     
        // Буду собирать в них нужные данные для секций.
        // #category, #firms, #for
        var categoriesViewHtml = "";
        var firmsViewHtml = "";
        // Проверяем - с главной ли страницы выбрали категорию.
        if (arrayCategories) {
          // Создаём массив категорий.
          arrayCategories = arrayCategories.split(" ");
          
          console.log(arrayCategories);
          
          var sortCategories = [];
          
          // Проходим по каждой категории в переданном массиве.
          arrayCategories.forEach(function( compareCategory ) {
            // Ищем нужную категорию.
            categories.forEach(function( category, i ) {
              
              console.log(category.short_name, compareCategory);
              
              console.log(category.short_name == compareCategory);
              
              if (category.short_name == compareCategory ) {
                sortCategories.push(category);
              }
            });// end categories.forEach
            
          });// end arrayCategories.forEach
          
          

          categoriesViewHtml = buildTilesViewHtml(sortCategories, tileHtml, "", "category");
          // Селектор указывается, только если понадобиться получить и вставить категории в определённое, которое вам-мне захочется,  место.
          $(selector).html(categoriesViewHtml);
        } else {
          // Сооружаем категории, фирмы и покрытия "для чего нибудь" для коталога.
          categoriesViewHtml = buildTilesViewHtml(categories, tileHtml, "", "category");
          firmsViewHtml = buildTilesViewHtml(firms, tileHtml, "firm", "firms");
          // Пускаем в расход готовые плитки.
          $("#covers").html(categoriesViewHtml);
          $("#firms").append(firmsViewHtml);
          // Нужен функционал, который даётся при стиле "firm", но вот сами стили не заходят в дизайн.
          $('.coverTiles').removeClass('coverTiles-firm');
        }
        
        
      });// end getTile
    });// end getCategoryFirms
  });// end getCategories
};// end buildAndShowCategoriesHTML