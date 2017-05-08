// Объект одиночной коллекции.
var singleCollection = function( params ) {
  /* params  
     styleName: string(otional[heading-firm]),
     stylesPlace: string(classes),
     idPlace: string(id),
     stock: array,
     sampleHtml: sampleHtml,
     geolocation: string(selector)
 */
  var that = singleResource( params );
  
  // Все связанные с построение плиток параметры не нужны.
  delete that.buildTiles;
  delete params.tileHtml;
  delete params.path;
  delete params.styleStock;
  
  // Коллекция показывает свои образцы.
  that.buildSamples = function() {
    // Шаблон образца, который будет форматироваться.
    var sampleHtml = params.sampleHtml,
    // Инвентарь коллекции.
        arrayItems = params.stock,
    // Элементы.
        slides = '<div class="collection__collectionSlider collectionSlider">' +
        '<div id="collection"  class="collectionSlider__slides container">' + 
        '<div id="collectionSamples" role="group" itemscope itemtype="https://schema.org/Thing"> >',
        row = '<div class="row" role="row">',
        ul = '<ul class="collectionSlider__listTiles">',
        closeTags = '</div></div></div>',
        finalHtml = slides + row + container + ul,
        visitCard = that._myVisitCard,
    // Нужны для установки путей к изображением.
    // Изображения находяться, определённо, в фирме категории с названием коллекции,
    // поэтому надобность в указание определённого путя - отпадает.
        categoryShortName = st.breadcrumb.category.short_name ,
        firmShortName =  st.breadcrumb.firm.short_name,
        collectionShortName =  st.breadcrumb.collection.short_name,
    // Счётчик для проверки колличества образцов с строке. 
        counter = 6;

    arrayItems.forEach(function( item, i ) {
      // Проверяем сколько образцов в строке
      if ( (i) === counter && (i) !== arrayItems.length ) {
        // При последнем нам конечно же не нужно добавляться закрывающие теги. 
        // Кому "нам" то? Ты здесь один. Ты совсем поехал что-ли?
        finalHtml += "</ul></div></div>" + row + container + ul;
        counter += 6;
      }
      // Извлекаем из каждой категории данные.
      var html = sampleHtml;
      var name = "" + item.name;
      var description = item.description;
      var number = item.num;     
      var short_name = categoryShortName + "/" + firmShortName + "/" + collectionShortName + "/" + number;

      html = insertProperty(html, "short_name", short_name); 
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "description", description);
      html = insertProperty(html, "number", number);

      finalHtml += html;
    }); // end arrayItems.map
  
    finalHtml += '</ul></div></div>' + closeTags;        
    // Контакты...
    finalHtml += visitCard;
  
    return finalHtml;
  };
  
  that.presentResource = function() {
    var breadcrumb = that._buildBreadcrumb(),
        heading = that.buildHeading(),
        tiles = that.buildSamples();
   
    var finalHTML = that.position + 
        '<div class="container">' + breadcrumb + heading +  '</div>' + 
        tiles + that.positionCloseTag;
   
    $(params.geolocation).html(finalHTML);
  };
  
  return that;
};

// Объект колекции фирмы, выбранной в категории.
var collectionCategoryOfFirm = function( params ) {
  var that = singleCollection( params );
  
  that._name = that._collectionName;
  
  var bcFirmCategoryCollection = 
      that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcFirm +  that._breadcrumbElements.bcRefer + that._firmName + '</a><meta itemprop="position" content="3" /></li>' + 
      that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcCategory + that._breadcrumbElements.bcRefer + that._categoryName + '</a><meta itemprop="position" content="4" /></li>' + 
      that._breadcrumbElements.bcElemActive +'>' + that._name + '<meta itemprop="position" content="5" /></li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = that._breadcrumbElements.list +   that.homeAndCatalogBC;
    
    finalHTML += bcFirmCategoryCollection;
    
    return finalHTML;
  };
  
  return that;
};
// Объекект фирмы.
var collectionFirm = function( params ) {
  var that = singleCollection( params );
  
  that._name = that._collectionName;
  
  var bcCategoryFirmCollection = 
      that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcCategory +  that._breadcrumbElements.bcRefer + that._categoryName + '</a><meta itemprop="position" content="3" /></li>' + 
      that._breadcrumbElements.bcElem + that._breadcrumbElements.ids.bcFirm + that._breadcrumbElements.bcRefer + that._firmName + '</a><meta itemprop="position" content="4" /></li>' + 
      that._breadcrumbElements.bcElemActive +'>' + that._name + '<meta itemprop="position" content="5" /></li></ol>';
  
  
  that._buildBreadcrumb = function() {
    var finalHTML = that._breadcrumbElements.list +   that.homeAndCatalogBC;
    
    finalHTML += bcCategoryFirmCollection;
    
    return finalHTML;
  };
  
  return that;
};

// path - путь, который привёл к коллекции
// от категории фирмы, либо от самой фирмы.
// firm or false
st.buildAndShowCollectionHtml = function( path ) {
  // Получить шаблон образца
  smartApp.getSample().done(function( sampleHtml ) {
    // Получить образцы коллекций
    smartApp.getCollectionItems().done(function( collections ) {
      // Объект коллекции json файла, который хранит в себе всю информаци.
      var collectionInfo = collections[0][st.breadcrumb.collection.short_name],
      // Массив образцов нужной коллекции
        samples = collectionInfo.samples,
          // Объект, который будет создаваться в зависимости от, где он был выбран.
          collection,
          id = path === 'firm' ? 'collectionFirm' : 'collectionCategoryFirm',
          params = {
            stylesPlace: 'mainContent__collection',
            idPlace: id,
            stock: samples,
            sampleHtml: sampleHtml,
            geolocation: '#main'  
          };
      // Кэшируем пути бредкрамбов.
      st.breadcrumb.category.short_name = collectionInfo.category.short_name;
      st.breadcrumb.firm.short_name = collectionInfo.firm.short_name;
      st.breadcrumb.category.name = collectionInfo.category.name;
      st.breadcrumb.firm.name = collectionInfo.firm.name;
      
      if ( path == 'firm') {
        collection = collectionFirm( params );
      } else {
        collection = collectionCategoryOfFirm( params );
      }

      collection.presentResource();

      // Инициализируем слайды.
      $('#collectionSamples').slick({
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false
            }  
          }
        ] 
      }); // end slick

      // Добавляем увеличение картинок.
      $('.collectionSlider__listTiles').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
          enabled:true
        }
      });
    });// end getCollectionItems
  });// end getSample
};// end buildAndShowCollectionHtml