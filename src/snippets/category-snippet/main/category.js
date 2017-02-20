// Объект, от которого наследуются ОДИНОЧНЫЕ категории,
// фирмы и коллекции.
var singleResource = function( params ) {
  var that = catalogResource( params );
  
  // Необязательные параметры.
  delete params.name;
  delete params.func;
  // Кэшированные данные о последних передвижениях.
  that._categoryName = st.breadcrumb.category.name;
  that._firmName = st.breadcrumb.firm.name;
  that._collectionName = st.breadcrumb.collection.name;
  
//  that._categoryShortName = st.breadcrumb.category.short_name;
//  that._firmShortName = st.breadcrumb.firm.short_name;
//  that._collectionShortName = st.breadcrumb.collection.short_name;
//  
  // Шаблоны элементов нав. цепочки.
  that._breadcrumbElements = {
    bcElemActive: '<li class="breadcrumb__breadcrumbItem breadcrumbItem active" ',
    bcElem: '<li data-cat="" data-firm="" class="breadcrumb__breadcrumbItem breadcrumbItem"  ',
    bcRefer: '<a class="breadcrumbItem__refer" href="#">',
    ids: {
      bcCategory: 'id="bcCategory">',
      bcFirm: 'id="bcFirm">'
    },
    solidElements: {
      homeAndCatalogBC: ""
    }
  };
  
   that.homeAndCatalogBC = that._breadcrumbElements.bcElem +  'id="bcHome">' +     that._breadcrumbElements.bcRefer   + "Главная" + "</a></li>" + that._breadcrumbElements.bcElem + 'id="bcCatalog">' + that._breadcrumbElements.bcRefer + "Каталог" + "</a></li>"
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
  
  var categoryBC = that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcCategory + that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' +   that.homeAndCatalogBC;
    
    finalHTML += categoryBC;
    
    return finalHTML;
  };
  
  return that;
};

st.buildHomeAndCatalogCategory = function( short_name ) {
  // Получаем данные о фирмах в json формате.
  smartApp.getCategoryFirms().done(function( firms ) {
    smartApp.getTile().done(function( tileHtml ) {
      // Массив с фирмами, которые пренадлежат категориям.
      var arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      firms.forEach(function( firm ) {
        // Маccив категорий, которые принадлежат фирме.
         console.log(firm);
        firm.categories.forEach(function( cat ) {
          console.log(cat);
          if ( cat == short_name ) {
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
};


st.buildCategoriesFirm = function( arrCategories ) {
  /* spec
     {
       arrayCategories: string
     }
  */
  // Получаем категории.
  smartApp.getCategories().done(function( categories ) {
    // Шаблон плитки.
    smartApp.getTile().done(function(tileHtml) {
      var arrayCategories = arrCategories.split(" "),
          sortedCategories = [];
      
      // Отбираем нужные категории.
      arrayCategories.forEach(function( compareCategory ) {
        // Ищем нужную категорию.
        categories.forEach(function( category ) {
          if (category.short_name == compareCategory ) {
            sortedCategories.push(category);
          }
        });// end categories.forEach
      });// end arrayCategories.forEach


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
  });// end smartApp.getCategories
};// end buildHomeCategories

var collectionsCategory = function( params ) {
  var that = singleResource( params );
  
  that._name = that._categoryName;
  
  var bcFirmCategory = that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcFirm +  that._breadcrumbElements.bcRefer + that._firmName + '</a>' + that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcCategory + that._name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' +   that.homeAndCatalogBC;
    
    finalHTML += bcFirmCategory;
    
    return finalHTML;
  };
  
  return that;
};

st.buildCollectionsCategory = function() {
//  // Получаю данные с плитками
  smartApp.getCategoryFirms().done(function( categories ) {
//    // Получаю шаблон плиток.
    smartApp.getTile().done(function( tileHtml ) {
//       Создаю массив нужных коллекций категории фирмы.
      var collections = [];
      // Заполняю этот массив.
      categories.forEach( function ( categoryFirm ) {
        if (categoryFirm.short_name == st.breadcrumb.firm.short_name) {
          
          collections = categoryFirm.collections.map( function( collection ) {
            if ( collection.category == st.breadcrumb.category.short_name ) {
              return collection;                        
            }
          });// end map 
        }
      });// end categoryFirmsItems.map
      
      console.log(collections);
      
      var category = collectionsCategory({
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


st.buildAndShowCollectionsCategoryHTML = function(category, categoryName) {
  // Получаю данные с плитками
  smartApp.getCategoryFirms().done(function( categoryFirmsItems ) {
    // Получаю шаблон плиток.
    smartApp.getTile().done(function( tileHtml ) {
      // Создаю массив нужных коллекций категории фирмы.
      var collections = [];
      // Заполняю этот массив.
      categoryFirmsItems.forEach( function ( categoryFirm ) {
        if (categoryFirm.short_name == st.breadcrumb.firm.short_name) {
          
          collections = categoryFirm.collections.map( function( collection ) {
            if ( collection.category == category ) {
              return collection;                        
            }
          });// end map 
        }
      });// end categoryFirmsItems.map
      
      // Строю навигационную цепочку.
      var breadcrumb = buildBreadcrumbViewHTML(false, "firms", st.breadcrumb.firm.name, categoryName, "");
      
      // Мастерю заголовок.
      var heading = buildHeadingViewHTML(false, categoryName);
      
      // Материализую заполненный массив.
      var collectionsTilesHtml = buildTilesViewHtml( collections, tileHtml, "firm", "collection");
      
      // Компоную всё это чудо, оборачивая его в контейнер.
      var finalHTML = '<section id="collectionsCategoryFirm">' + container + breadcrumb + heading + '</div>' +  collectionsTilesHtml + '</section>';
      
      // Рендерю его на странице.
      $(st.ids.main).html(finalHTML);
    });// end getTile
  });// end getCategoryFirms 
};


$(document).on('click', '#category a.tile', function(e) {
  showLoading("#main");
  
  var $this = $(this);
  // Кэшируем иформацию о фирме
  st.breadcrumb.firm.short_name = $this.attr('data-firm');
  st.breadcrumb.firm.name = $this.find('.tile__name').html();
  
  st.buildCollectionsCategory();
  st.buildAndShowFirmHtml(st.breadcrumb.firm.short_name, st.breadcrumb.firm.name);
  
  e.preventDefault();
});// end click

// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#firmCategories a', function(e) {
  showLoading("#main");
  
  var $this = $(this);
 
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  st.buildCollectionsCategory();
//  st.buildAndShowCollectionsCategoryHTML(st.breadcrumb.category.short_name, st.breadcrumb.category.name);
  
  e.preventDefault();
});// end click
