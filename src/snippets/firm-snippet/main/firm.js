// Передаём в аргументы короткое имя категории, фирмы и их полные имена.
st.buildAndShowFirmHtml = function(firm, firmName) {
  var finalHTML = '<section class="mainContent__firm firm" id="firm">'; 
  // Делаем запросы, получаем список фирм для того чтобы найти нужную и отобразить все её коллекции.
  smartApp.getCategoryFirms().done(function( categoryItems ) {
    // Шаблон плитки для коллекций фирмы
    smartApp.getTile().done(function( tileHtml ) {
      // Собираем коллекции фирмы.
      var firmCollections = [];
      categoryItems.map(function( firmItem ) {
        if (firmItem.short_name == firm ) {
          // Распаковываем массив с колекциями.
          var collections = firmItem.collections;

          collections.map(function( collection ) {
            firmCollections.push(collection);
          });            
        }
      });
      // Строим навигационную цепочку, заголовок и плитки  в стиле "THE FIRM". 
      var breadcrumb = buildBreadcrumbViewHTML("firm", "categories",  st.breadcrumb.category.name, firmName, "");
      var heading = buildHeadingViewHTML("firm", firmName);
      // Не указываю стиль "firm", потому что секция фирмы, стилизована по-умолчанию.
      var collections = buildTilesViewHtml(firmCollections, tileHtml, "", "collection");

      // Компануём всё это дело.
      finalHTML += container + breadcrumb + heading + '</div>' + collections;

      // Контрольный выстрел.
      $main.html(finalHTML);
      });// end getTile
  });// end getCategoryFirms
};// end buildAndShowFirmHtml

$(document).on('click', '#firm a, #collectionsCategoryFirm a', function(e) {
  showLoading('#main');
  
  var $this = $(this);
  // Кэшируем данные выбранной коллекции.
  st.breadcrumb.collection.short_name = $this.attr('data-col');
  st.breadcrumb.collection.name = $this.find('.tile__name').html();
  st.buildAndShowCollectionHtml(st.breadcrumb.collection.short_name,  st.breadcrumb.collection.name);
  
  e.preventDefault();
});

// Объект фирмы каталога.
var catalogFirm = function( params ) {
  var that = singleResource( params );
  
  that._name = that._firmName;
  
  var firmBC = that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcFirm + that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' +   that.homeAndCatalogBC;
    
    finalHTML += firmBC;
    
    return finalHTML;
  };
  
  return that;
};// end catalogFirm

// Функция которая отображает фирму каталога
st.buildCatalogFirmHTML = function() {
  // Получаем категории.
  smartApp.getCategories().done(function( categories ) {
    smartApp.getCategoryFirms().done(function( firms ) {      
      // Шаблон плитки.
      smartApp.getTile().done(function(tileHtml) {

//        var arrayCategories = arrCategories.split(" "),
          var sortedCategories = [];

        // Отбираем нужные категории.
        firms.forEach(function( firm ) {
          if(firm.short_name == st.breadcrumb.firm.short_name) {
            // У фирмы есть массив categories,
            // в который записаны все принадлежащие категории.
            firm.categories.forEach(function( compareCategory ) {
              // Ищем нужную категорию.
              categories.forEach(function( category ) {
                if (category.short_name == compareCategory ) {
                  sortedCategories.push(category);
                }
              });// end categories.forEach
            });// end arrayCategories.forEach
          }
        });// end firms.forEach

        var firm = catalogFirm({
               styleName: 'heading-firm',
               stylesPlace: 'mainContent__firm firm',
               idPlace: 'firmCategories',
               stock: sortedCategories,
               path: 'category',
               tileHtml: tileHtml,
               geolocation: '#main'
         });

        firm.presentResource();
      });// end smartApp.getTile
    });// end smartApp.getCategoryFirms
  });// end smartApp.getCategories
};// end buildHomeCategories

// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#firmCategories a', function(e) {
  showLoading("#main");
  
  var $this = $(this);
 
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  st.buildCategoryOfFirmHTML();
  
  e.preventDefault();
});// end click

