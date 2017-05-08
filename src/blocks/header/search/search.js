//st.showFoundElementsHTML = function( params ) {
//  /* spec
//    elem: 'firms', 'categories', 'collections',
//    stock: array
//  */
//  smartApp.getTile().done(function( tileHtml ) {
//    var stock = params.stock,
//        foundElements;
//    switch(params.elem) {
//      case 'categories':
//        foundElements = catalogResource({
//               name: 'Категории',
//               stylesPlace: 'mainContent__foundCategories',
//               idPlace: 'foundCategories',
//               stock: stock,
//               path: 'category',
//               tileHtml: tileHtml,
//               geolocation: '#main',
//               func: "append"});
//
//        break;
//      case 'firms':
//        foundElements = catalogResource({
//               name: 'Фирмы',
//               stylesPlace: 'mainContent__foundFirms',
//               idPlace: 'foundFirms',
//               stock: stock,
//               path: 'firms',
//               tileHtml: tileHtml,
//               geolocation: '#main',
//               func: "append"});
//
//        break;
//      case 'collections':
//        foundElements = catalogResource({
//             name: 'Коллекции',
//             stylesPlace: 'mainContent__foundCollections',
//             idPlace: 'foundCollections',
//             stock: stock,
//             path: 'collections',
//             tileHtml: tileHtml,
//             geolocation: '#main',
//             func: "append"});
//        break;
//    }
//    
//    foundElements.presentResource();        
//  });// end getTile
//};

//
//st.search = function( value ) {
//  // Массивы, которые будут заполняться при совпадении.
//  var matches = {
//    categories : [],
//    firms: [],
//    collections: []
//  },  
//      $main = $('#main'),
//      finalHTML = "",
//      // Нужные плитки.
//      categoriesTilesHTML, 
//      firmsTilesHTML,
//      collectionsTilesHTML,
//      // Длинны массивов.
//      lenCats,
//      lenFirms,
//      lenCollections,
//      // Проверка на присутсвующих в них сущностей.
//      checkCats,
//      checkFirms,
//      checkCollections;
//  
////  smartApp.getCategories().done(function( categories ) {
////    smartApp.getCategoryFirms().done(function( firms ) {
////      smartApp.getAllCollections().done(function( collections ) {
////        smartApp.getTile().done(function( tileHtml ) {
////          // Регулярное выражение для проверки на совпадение.
////          var regex = new RegExp(value.toLowerCase(), 'i'); 
////          categories.forEach(function( category ) {
////            // Проверяем категории.
////            if ( regex.test( category.name ) ) {
////              matches.categories.push(category);
////            }
////          }); // end categories.forEach     
////
////          firms.forEach(function( firm ) {
////            // Проверяем фирмы.
////            if ( regex.test( firm.name ) ) {
////              matches.firms.push( firm );
////            }
////          }); // end firm.forEach
////
////           collections.forEach(function( collection ) {
////             // Проверяем коллекции.
////             if ( regex.test( collection.name )) {
////               matches.collections.push( collection );
////             }
////          }); // end collection.forEach
////
////          lenCats = matches.categories.length;
////          lenFirms = matches.firms.length;
////          lenCollections = matches.collections.length;
////          
////          checkCats = lenCats !== 0;
////          checkFirms = lenFirms !== 0;
////          checkCollections = lenCollections !== 0;
////      
////          // Проверить на наличие совпадений в мaссивах.
////          if ( checkCats || checkCollections || checkFirms ) {
////            st.showLoading(st.ids.main);
////            // Переделат ь!
////            if ( checkCats ) {
////              st.showFoundElementsHTML({
////                stock: matches.categories,
////                elem: 'categories'
////              });
////            } 
////
////            if ( checkFirms ) {
////              st.showFoundElementsHTML({
////                stock: matches.firms,
////                elem: 'firms'
////              });
////            }
////            if ( checkCollections ) {
////              st.showFoundElementsHTML({
////                stock: matches.collections ,
////                elem: 'collections'
////              });
////            }
////            
////            $main.find(':first-child').remove();
////          } else {
////            finalHTML = '<p class="text-center no-matches">Вы искали: <strong>' + value +'</strong>.</br>';
////            finalHTML += 'Но ничего не нашли:(.</p>' +
////              '<div class="not-found-gif"><img class="img-respinsive center-block" src="/media/smarttiles/img/not-found.gif" alt="Not found:(."></img></div>';
////            
////            st.select.$main.html(finalHTML);  
////          }
////      
////        });
////      });// end smartApp.getAllCollections
////    });// end smartApp.getCategoryFirms
////  });// end smartApp.getCategories
////};