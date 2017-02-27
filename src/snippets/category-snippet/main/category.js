// Объект, от которого наследуются ОДИНОЧНЫЕ категории,
// фирмы и коллекции.
var singleResource = function( params ) {
  /* params  
     styleName: string(otional[heading-firm]),
     stylesPlace: string(classes),
     idPlace: string(id),
     stock: array,
     styleStock: string(classes),
     path: string,
     tileHtml: tileHtml,
     geolocation: string(selector),
 */
  
  var that = catalogResource( params );
  
  // Необязательные параметры.
  delete params.name;
  delete params.func;
  // Кэшированные данные о последних передвижениях.
  that._categoryName = '<span itemprop="name">' + st.breadcrumb.category.name + '</span>';
  that._firmName = '<span itemprop="name">' + st.breadcrumb.firm.name + '</span>';
  that._collectionName = '<span itemprop="name">' + st.breadcrumb.collection.name + '</span>';

  // Шаблоны элементов нав. цепочки.
  that._breadcrumbElements = {
    list: '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">',
    listFirm: '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm" itemscope itemtype="http://schema.org/BreadcrumbList">',
    bcElemActive: '<li class="breadcrumb__breadcrumbItem breadcrumbItem active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" ',
    bcElem: '<li data-cat="" data-firm="" class="breadcrumb__breadcrumbItem breadcrumbItem" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" ',
    bcRefer: '<a class="breadcrumbItem__refer" href="#" itemprop="item">',
    ids: {
      bcCategory: 'id="bcCategory">',
      bcFirm: 'id="bcFirm">'
    },
    solidElements: {
      homeAndCatalogBC: ""
    }
  };
  // Визитная карточка, одна на все одиночные ресурсы.
  that._myVisitCard = '<div   class="collection__contact"><div class="container">' + 
          '<div class="contact__visitCard" itemscope itemtype="http://schema.org/Organization"><div class="visitCard__header"></div>' +
          '<div class="visitCard__body">' +
          '<h3 class="body__title">Контакты</h3>' +
          '<p class="body__contacts">' +
          '<a class="contacts__tel" href="tel:8-495-909-50-20" itemprop="telephone">8-495-909-50-20</a>' + 
          ' <a class="contacts__email" href="mailto:connect@smart-tiles.ru" itemprop="email"> connect@smart-tiles.ru</a>' +
          '</p></div></div></div>';
  
   that.homeAndCatalogBC = that._breadcrumbElements.bcElem +  'id="bcHome">' +     that._breadcrumbElements.bcRefer   + '<span itemprop="name">Главная</span>' + '</a><meta itemprop="position" content="1" /></li>' + that._breadcrumbElements.bcElem + 'id="bcCatalog">' + that._breadcrumbElements.bcRefer + '<span itemprop="name">Каталог</span>' + '</a><meta itemprop="position" content="2" /></li>';
  
  // Функция, которая будет переопределяться.
  that._buildBreadcrumb = function() {

  };

  that.presentResource = function() {
    var breadcrumb = that._buildBreadcrumb(),
        heading = that.buildHeading(),
        tiles = that.buildTiles();
   
    var finalHTML = that.position + 
        '<div class="container">' + breadcrumb + heading +  '</div>' + 
        tiles + that.positionCloseTag;
   
    $(params.geolocation).html(finalHTML);
  };
  
  return that;
};
// Объект категорий, которые выбираются в 
// каталоге и на домашней странице.
var catalogAndHomeCategory = function( params ) {
  var that = singleResource( params );
  
  // Имя для заголовка.
  that._name = that._categoryName;
  
  var categoryBC = that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcCategory +  that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = that._breadcrumbElements.list +   that.homeAndCatalogBC;
    
    finalHTML += categoryBC;
    
    return finalHTML;
  };
  
  return that;
};

st.buildHomeAndCatalogCategory = function() {
  // Получаем данные о фирмах в json формате.
  smartApp.getCategoryFirms().done(function( firms ) {
    smartApp.getTile().done(function( tileHtml ) {
      // Массив с фирмами, которые пренадлежат категориям.
      var arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      firms.forEach(function( firm ) {
        // Маccив категорий, которые принадлежат фирме.
        firm.categories.forEach(function( cat ) {
          if ( cat == st.breadcrumb.category.short_name ) {
            arrayItems.push(firm);
          }
        }); // end map
      });// end map
      
      
      var category = catalogAndHomeCategory({
        idPlace: 'category',
        stock: arrayItems,
        styleStock: 'coverTiles-firm',
        path: 'firm',
        tileHtml: tileHtml,
        geolocation: '#main'
      });
      
      category.presentResource();
    });
  });
};

// Объект категории фирмы.
var categoryFirm = function( params ) {
  var that = singleResource( params );
  
  that._name = that._categoryName ;
  
  var bcFirmCategory = that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcFirm +  that._breadcrumbElements.bcRefer + that._firmName + '</a><meta itemprop="position" content="3" />' + that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcCategory +  that._name + '<meta itemprop="position" content="4" /></li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = that._breadcrumbElements.list +   that.homeAndCatalogBC;
    
    finalHTML += bcFirmCategory;
    
    return finalHTML;
  };
  
  return that;
};// end collectionCategory

st.buildCategoryOfFirmHTML = function() {
  // Получаю данные с плитками
  smartApp.getCategoryFirms().done(function( categories ) {
    // Получаю шаблон плиток.
    smartApp.getTile().done(function( tileHtml ) {
      // Создаю массив нужных коллекций категории фирмы.
      var collections = [];
      // Заполняю этот массив.
      categories.forEach( function ( categoryFirm ) {
        if (categoryFirm.short_name == st.breadcrumb.firm.short_name) {
          
          collections = categoryFirm.collections.filter( function( collection ) {
             return collection.category === st.breadcrumb.category.short_name;
          });// end map 
        }
      });// end categoryFirmsItems.map
       
      var category =  categoryFirm({
             stylePlace: 'mainContent__category',
             idPlace: 'categoryCollections',
             stock: collections,
             styleStock: 'coverTiles-firm',
             path: 'collection',
             tileHtml: tileHtml,
             geolocation: '#main'});
      
      category.presentResource();
    });// end getTile
  });// end getCategoryFirms 
};