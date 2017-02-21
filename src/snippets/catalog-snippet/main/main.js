//= subNav/subNav.js

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
   tileHtml: tileHtml,
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

  // Некоторые переменные понадобиться изменить.
  that.position = position;
  that.positionCloseTag = positionCloseTag;
  that._name = name;
  // Что он умеет делать?
  // Умеет представить себя.
  that.buildHeading = function() {
    var heading = '<h2 class="heading ' + styleName + '">';
    heading += that._name + '</h2>';
  
    return heading;
  };

  // Собирает свой инвентарь.
  that.buildTiles = function() {
    var finalHtml = '<div class="coverTiles ' + styleStock + '">';
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
  
  var $this = $(this);
  
  // Заполняем и обновляем кэш при клике.
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name')[0].innerHTML;
  

  st.buildHomeAndCatalogCategory();
  
  event.preventDefault();
});// end click

$(document).on('click', '#catalogFirms a', function() {
  
  showLoading(st.ids.main);
  
  var $this = $(this);
  
  st.breadcrumb.firm.short_name = $this.attr('data-firm');
  st.breadcrumb.firm.name = $this.find('.tile__name')[0].innerHTML;
      
  st.buildCatalogFirmHTML();
  
  return false;
});// end click