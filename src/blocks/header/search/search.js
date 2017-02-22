st.search = function( value ) {
  var matches = {
    categories : [],
    firms: [],
    collections: []
  },  
      $main = $('#main'),
      finalHTML = "",
      // Нужные плитки.
      categoriesTilesHTML, 
      firmsTilesHTML,
      collectionsTilesHTML,
      // Длинны массивов.
      lenCats,
      lenFirms,
      lenCollections,
      // Проверка на присутсвующих в них сущностей.
      checkCats,
      checkFirms,
      checkCollections;
  
  smartApp.getCategories().done(function( categories ) {
    smartApp.getCategoryFirms().done(function( firms ) {
      smartApp.getAllCollections().done(function( collections ) {
        smartApp.getTile().done(function( tileHtml ) {
          categories.forEach(function( category ) {
            if (category.name.toLowerCase() == value.toLowerCase()) {
              matches.categories.push(category);
            }
          }); // end categories.forEach     

          firms.forEach(function( firm ) {
            if (firm.name.toLowerCase() == value.toLowerCase()) {
              matches.firms.push( firm );
            }
          }); // end firm.forEach

           collections.forEach(function( collection ) {
            if (collection.name.toLowerCase() == value.toLowerCase()) {
              matches.collections.push(collection);
            }
          }); // end collection.forEach

          lenCats = matches.categories.length;
          lenFirms = matches.firms.length;
          lenCollections = matches.collections.length;
          
          checkCats = lenCats !== 0;
          checkFirms = lenFirms !== 0;
          checkCollections = lenCollections !== 0;
          console.log(checkCats, checkFirms,  checkCollections);
          // Проверить на наличие совпадений в мaссивах.
          // Выстроить плитки.
          if ( checkCats || checkCollections || checkFirms ) {
            finalHTML = '<h3 class="text-center heading" style="font-size: 2.5em;">Вы искали: <strong>' + value + '</strong></h3>';
            finalHTML += '<h4 class="text-center heading" style="font-size: 2em;">Вы нашли:</h4>';
            // Переделать!
//            categoriesTilesHTML = checkCats ? buildTilesViewHtml(matches.categories, tileHtml, false, 'category') : "";
//            
//            firmsTilesHTML = checkFirms ? ;
//            
//            collectionsTilesHTML = checkCollections ? buildTilesViewHtml(matches.collections, tileHtml, false, 'collection') : "";
//            
//            finalHTML += categoriesTilesHTML + firmsTilesHTML + collectionsTilesHTML;
            
             st.select.$main.html(finalHTML);
          } else {
            finalHTML = '<p class="text-center mo-matches">Вы искали: <strong>' + value +'</strong>.</br>';
            finalHTML += 'По вашему запросу ничего не найдено.</p>';
            
            st.select.$main.html(finalHTML);  
          }
          
          // Подумать на счёт экземляров
          // Добавить сообщение об ненахождение искомого.
          // Добавить строчку, что искал пользователь.
        });
      });// end smartApp.getAllCollections
    });// end smartApp.getCategoryFirms
  });// end smartApp.getCategories
};