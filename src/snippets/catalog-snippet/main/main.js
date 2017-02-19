//= subNav/subNav.js

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
          
        
          
          var sortCategories = [];
          
          // Проходим по каждой категории в переданном массиве.
          arrayCategories.forEach(function( compareCategory ) {
            // Ищем нужную категорию.
            categories.forEach(function( category, i ) {
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

var catalogResource = function( spec ) {
/*
 {
   name: string,
   styleName: string(classes),
   stylesPlace: string(otional[heading-firm]),
   idPlace: string(id),
   stock: array,
   styleStock: string(classes),
   path: string,
   tileHtml: string,
   geolocation: string(selector),
   func: 'functuion'(html, append and another functions)
 }
*/

  var that = {},
  // Какие характеристики у него есть?
  // Имя заголовка и его стиль.
      name = spec.name,
      styleName = spec.styleName ? spec.styleName : "",
  // Место, где он должен быть.
      geolocation = spec.geolocation,
  // И каким способом должно прийти.
      func = spec.func ? spec.func : "",
  // У этого место есть стиль.
  // А также наименнование.
      position = '<section class="' + spec.stylesPlace + '" id="' + spec.idPlace + '">',
      positionCloseTag = '</section>',
  // У ресурса есть свой инвентарь и стиль его стиль.
      stock = spec.stock,
      styleStock = spec.styleStock ? spec.styleStock : "",
  // У ресурса есть свой источник с изображениями.
      pathToImgs = spec.path,
  // Шаблон плитки.
      tileHtml = spec.tileHtml;

  // Думаю, что позицию понадобиться изменить.
  that.position = position;
  that.positionCloseTag = positionCloseTag;
  // Что он умеет делать?
  // Умеет представить себя.
  that.buildHeading = function() {
    var heading = '<h2 class="heading ' + styleName + '">';
    heading += name + '</h2>';
  
    return heading;
  };
  // Навигация к нему.
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
  that.presentResource = function() {
    var heading = that.buildHeading();
    var tiles = that.buildTiles();
    
    var finalHTML = that.position + 
        '<div class="container">' + heading +  '</div>' + 
        tiles + positionCloseTag;
    if ( func == 'append' ){
      $(geolocation).append(finalHTML);
    } else {
      $(geolocation).html(finalHTML);
    }
  };
  
  return that;
};


// arrayCategories - массив категорий, извлечённых из data-cat категории на главной странице.
st.buildAndShowCatalog = function() {
  // Получаем json-файл со всеми категориями.
  smartApp.getCategories().done(function( categories ){
    // Получаеем json с фирмами.
    smartApp.getCategoryFirms().done(function( firms ) {
      // Получаем шаблон плитки.
      smartApp.getTile().done(function( tileHtml ) {     
        
        var catalogCategories = catalogResource({
               name: 'Покрытия',
               stylesPlace: 'mainContent__covers covers',
               idPlace: 'catalogCovers',
               stock: categories,
               path: 'category',
               tileHtml: tileHtml,
               geolocation: '#main',
               func: "append"});
        
        
        var catalogFirms = catalogResource({
               name: 'Фирмы',
               styleName: 'heading-firm',
               stylesPlace: 'mainContent__firms firms',
               idPlace: 'catalogFirms',
               stock: firms,
               path: 'firms',
               tileHtml: tileHtml,
               geolocation: '#main',
               func: "append"});
  
        catalogCategories.presentResource();
        catalogFirms.presentResource();
      });// end getTile
    });// end getCategoryFirms
  });// end getCategories
};// end buildAndShowCategoriesHTML

$(document).on( 'click', '#catalogCovers a, #homeCategories a', function( event ) {
  showLoading('#main');
  var $this = $(this),
      category = $this.attr('data-cat'),
      categoryName = $this.find('.tile__name')[0].innerHTML;
  // Заполняем и обновляем кэш при клике.
  st.breadcrumb.category.short_name = category;
  st.breadcrumb.category.name = categoryName;
  
  $st.buildAndShowCategoryHTML(category, categoryName);
  
  event.preventDefault();
});// end click

$(document).on('click', '#catalogFirms a', function() {
  
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