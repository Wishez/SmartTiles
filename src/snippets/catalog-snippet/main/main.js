//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
//= for/for.js
// homeCategories - массив категорий, извлечённых из data-cat категории на главной странице.
st.buildAndShowCategoriesHTML = function(selector , homeCategories) {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаеем json с фирмами.
    smartApp.getCategoryFirms().done(function( firms ) {
      // Получаем шаблон плитки.
      smartApp.getTile().done(function(tileHtml) {     
        // Буду собирать в них нужные данные для секций.
        // #category, #firm, #for
        var categoriesViewHtml = "";
        var firmsViewHtml = "";
        // Проверяем - с главной ли страницы выбрали категорию.
        if (homeCategories) {
          // Создаём массив категорий.
          homeCategories = homeCategories.split(" ");

          var sortCategories = [];

          categories = categories.forEach(function( category, i) {
            if (category.short_name == homeCategories[i]) {
              sortCategories.push(category);
            }
          });

          categoriesViewHtml = buildTilesViewHtml(sortCategories, tileHtml, "");
          // Селектор указывается, только если понадобиться получить и вставить категории в определённое, которое вам-мне захочется,  место.
          $(selector).html(categoriesViewHtml);
        } else {
          // Сооружаем категории, фирмы и покрытия "для чего нибудь" для коталога.
          categoriesViewHtml = buildTilesViewHtml(categories, tileHtml, "");
          firmsViewHtml = buildTilesViewHtml(firms, tileHtml, "firm");
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