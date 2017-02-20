var singleResource = function( params ) {
  var that = catalogResource( params );
  
  delete params.func;
  // К одиночному ресурсу добавляется навигационная цепочка.
  that._category = params.category;
  that._firm = params.firm;
  that._collection = params.collection;
  
  that._breadcrumbElements = {
    // Шаблоны элементов нав. цепочки.
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

var catalogAndHomeCategory = function( params ) {
  var that = singleResource( params );
  
  that._category = params.category;
  that._name = st.breadcrumb.category.name;
  
  var categoryBC = that._breadcrumbElements.bcElemActive + that._breadcrumbElements.ids.bcCategory + st.breadcrumb.category.name + '</li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' +   that.homeAndCatalogBC;
    
    finalHTML += categoryBC;
    
    return finalHTML;
  };
  
  return that;
};

var catalogFirm = function( params ) {
  var that = singleResource( params );
  
  return that;
}

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
      
      console.log(arrayItems);
      
      var category = catalogAndHomeCategory({
        category: short_name,
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

// В первый аргумент передаётся категория из атрибута data-cat, которое хранит короткое имя категории
// Второй аргумент - значение элемента с классом .tile__name 
// По которому кликнули.
st.buildAndShowCategoryHTML = function(category, categoryName) {
  var finalHTML = '<section class="mainContent__category category" id="category">';
  finalHTML += container;

  // Получаем кусок html-ля плитки.
  smartApp.getTile().done(function( tileHtml ) {
  // Получаем данные о фирмах в json формате.
   smartApp.getCategoryFirms().done(function( categoryFirms ) {
      // Массив с фирмами, которые пренадлежат категориям.
      var arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      categoryFirms.map(function( firm ) {
        // Маccив категорий, к которы принадлежит фирма.
        var categoriesOfFirm = firm.categories;
        categoriesOfFirm.map(function(cat) {
          if (cat == category) {
            return arrayItems.push(firm);
          }
        }); // end map
      });// end map
  
      //  Строим навигационную цепочку с сатегорией
      var breadcrumb = buildBreadcrumbViewHTML(false, "categories", categoryName, "", "");
      // Потом строится heading 
      var heading = buildHeadingViewHTML("", categoryName);
      // Строим плитки с фирмами.
      var categoryItems = buildTilesViewHtml(arrayItems, tileHtml, "firm", 'firm');
   
     // Компануем.
     finalHTML += breadcrumb + heading + '</div>' + categoryItems + '</section>';
     
     // И последний штрих.
     $('#main').html(finalHTML);
    });// end getcategoryFirms
  });// end getTile
};// end buildAndShowCategoryHTML

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
  
  st.buildAndShowFirmHtml(st.breadcrumb.firm.short_name, st.breadcrumb.firm.name);
  
  e.preventDefault();
});// end click

// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#categoriesFirm a', function(e) {
  showLoading("#main");
  
  var $this = $(this);
 
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  st.buildAndShowCollectionsCategoryHTML(st.breadcrumb.category.short_name, st.breadcrumb.category.name);
  
  e.preventDefault();
});// end click
