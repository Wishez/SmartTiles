// Передаём в аргументы короткое имя категории, фирмы и их полные имена.

// Объект фирмы каталога.
var catalogFirm = function( params ) {
  var that = singleResource( params );
  
  that._name = that._firmName;
  
  var bcFirm = that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcFirm + that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' +   that.homeAndCatalogBC;
    
    finalHTML += bcFirm;
    
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
          var sortedCategories = [],
              firm;

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

        firm = catalogFirm({
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

// Объект фирмы категории.
var firmCategory = function( params ) {
  var that = singleResource( params );
  
  that._name = that._firmName;
  
  var bcCategoryFirm = 
      that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcCategory + that._breadcrumbElements.bcRefer +  that._categoryName + '</a></li>' +
      that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcFirm + that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' +   that.homeAndCatalogBC;
    
    finalHTML += bcCategoryFirm;
    
    return finalHTML;
  };
  
  return that;
};// end catalogFirm

st.buildAndShowFirmHTML = function() {
  smartApp.getCategoryFirms().done(function( firms ) {
    smartApp.getTile().done(function( tileHtml ) {
       var arrayItems = [],
           firm;
      
       firms.map(function( firm ) {
        if (firm.short_name == st.breadcrumb.firm.short_name ) {
          // Распаковываем и обрабатываем массив с колекциями.
          firm.collections.map(function( collection ) {
            arrayItems.push(collection);
          });// end firm.collections.map           
        }
      });// end firms.map
      
      firm = firmCategory({
         styleName: 'heading-firm',
         stylesPlace: 'mainContent__firm firm',
         idPlace: 'firm',
         stock: arrayItems,
         path: 'collection',
         tileHtml: tileHtml,
         geolocation: '#main'
      });

      firm.presentResource();
    });// end smartApp.getTile
  });// end smartApp.getCategoryFirms
};// st.buildAndShowFirmHTML
//#collectionsCategoryFirm a
$(document).on('click', '#firm a', function() {
  showLoading('#main');
  
  var $this = $(this);
  // Кэшируем данные выбранной коллекции.
  st.breadcrumb.collection.short_name = $this.attr('data-col');
  st.breadcrumb.collection.name = $this.find('.tile__name').html();
  
  st.buildAndShowCollectionHtml('firm');
  
  return false;
});
// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#firmCategories a.tile', function(e) {
  showLoading("#main");
  
  var $this = $(this);
 
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  st.buildCategoryOfFirmHTML();
  
  e.preventDefault();
});// end click

