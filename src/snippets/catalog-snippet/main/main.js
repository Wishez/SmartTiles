//= subNav/subNav.js
//= covers/covers.js
//= firms/firms.js
// arrayCategories - массив категорий, извлечённых из data-cat категории на главной странице.
st.buildAndShowCategoriesHTML = function(selector , arrayCategories) {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаеем json с фирмами.
    smartApp.getCategoryFirms().done(function( firms ) {
      // Получаем шаблон плитки.
      smartApp.getTile().done(function(tileHtml) {     
        // Буду собирать в них нужные данные для секций.
        // #category, #firms
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

// Функциаональное программирование...

var catalogRecource = function( spec ) {
/*
 {
   name: string,
   styleName: string(classes),
   stylesPlace: string(classes),
   idPlace: string(id),
   stock: array,
   styleStock: string(class),
   pathToImgs: string,
   tileHtml: string
 }
*/

  var that = {};
  // Какие характеристики у него есть?
  // Имя заголовка и его стиль.
  var name = spec.name;
  var styleName = spec.styleName;
  // Навигация к нему.
  // Место, где он должен быть.
  var geolocation = spec.geolocation;
  // У этого место есть стиль.
  // А также наименнование.
  var position = '<section class="' + spec.stylesPlace + '" id="' + spec.idPlace + '">';
  var positionCloseTag = '</section>';
  // У ресурса есть свой инвентарь и стиль его стиль.
  var stock = spec.stock;
  var styleStock = spec.styleStock;
  // У ресурса есть свой источник с изображениями.
  var pathToImgs = spec.path; 
  // Шаблон плитки.
  var tileHtml = spec.tileHtml;

  
      
  // Что он умеет делать?
  // Умеет представить себя.
  that.buildHeading = function() {
    var heading = '<h2 class="heading ' + styleName + '">';
    heading += name + '</h2>';
  
    return heading;
  };
  // Может указать где он находится.
//  that.buildBreadcrumb = function() {
//    
//  };
  
  // Собирает свой инвентарь.
  that.buildTiles = function() {
    var finalHtml = '<div class="coverTiles' + styleStock + '">';
    finalHtml +=  '<div class="container">';
    finalHtml += '<ul class="tiles__tilesList tilesList">';

    stock.map(function( item ) {
      // Извлекаем из каждой категории данные.
      var html = tileHtml;
      var name = item.name;
      var description = item.description;
      var short_name = "";

      // При определённом типе - свой url.
      // Также устанавливаю при определённом типе атрибуты data-cat и data-firm.
      switch(pathToImgs) {
        // URL для категорий.
        case 'category':
          short_name = item.short_name + '/' + item.short_name;

          html = insertProperty(html, "category", item.short_name);
          // Либо data-firm будет пустовать, категория загрузилась из каталога, раздела "Фирмы".
          // Либо в некоторых плитках категории будет кэшированное значение фирмы, но это же не критично. Ведь так?
          html = insertProperty(html, "firm", st.breadcrumb.firm.short_name);

          break;
        // URL для фирм категории.
        case 'firm':
          short_name = st.breadcrumb.category.short_name + "/" + item.short_name + "/" + item.short_name;

          html = insertProperty(html, "category", st.breadcrumb.category.short_name);
          html = insertProperty(html, "firm", item.short_name);

          break;
        // URL для коллекций фирмы.
        case 'collection':
          short_name = st.breadcrumb.category.short_name + "/" + 
          st.breadcrumb.firm.short_name + "/" + item.short_name + "/" + item.short_name;

          html = insertProperty(html, "category", st.breadcrumb.category.short_name);
          html = insertProperty(html, "firm", st.breadcrumb.firm.short_name);
          html = insertProperty(html, "collection", item.short_name);

          break;
        // URL для фирм в каталоге.
        case 'firms':
          var cats = item.categories;
          short_name = cats[0] + '/' +
            item.short_name + '/' +
            item.short_name;

          console.log(cats[0]);
          html = insertProperty(html, "category", cats.toString());
          html = insertProperty(html, "firm", item.short_name);

          break;
      }

      html = insertProperty(html, "short_name", short_name);
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "description", description);

      finalHtml += html;
    }); // end arrayItems.map

    finalHtml += '</ul></div></div>';                  

    return finalHtml;
  };
  
  // И может прийти в любое место.
  that.presentResurce = function( selector ) {
    var heading = that.buildHeading();
    var tiles = that.buildTiles();
    
    var finalHTML = position + 
        '<div class="container">' + heading +  '</div>' + 
        tiles + positionCloseTag;
    
    $(geolocation).html(finalHTML);
  };
  
  return that;
};

// arrayCategories - массив категорий, извлечённых из data-cat категории на главной странице.
st.buildAndShowCategoriesHTMLTEST = function(selector , arrayCategories) {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function(categories){
    // Получаеем json с фирмами.
    smartApp.getCategoryFirms().done(function( firms ) {
      // Получаем шаблон плитки.
      smartApp.getTile().done(function(tileHtml) {     
        // Буду собирать в них нужные данные для секций.
        // #category, #firms
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