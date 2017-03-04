// Загружаем домашнюю страницу.
st.loadHomeContent = function() {
  smartApp.getHomePattern().done(function( homeContentHtml ) {
    // Запрашиваем шаблон с контактами и формой.
    smartApp.getContacts().done(function( contactsHtml ) {
      // Компануем страницу.
      var finalHTML = homeContentHtml + contactsHtml; 
      st.select.$main.html( finalHTML );
      // Инициализируем карусель. 
      $('.exclusive__slides').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
              breakpoint: 768,
              settings: {
                arrows: false
              }  
            }
          ]
      });
      // Настраиваем форму.
      st.settingUpForm();
      st.setPolifillForPlaceholder();
    });// end getContacts
  });// end getHomePettern
}; // end loadHomeContent

st.buildHomeCategories = function( spec ) {
  /* spec
     {
       arrayCategories: string,
       name: string
     }
  */
  // Получаем категории.
  smartApp.getCategories().done(function( categories ) {
    // Шаблон плитки.
    smartApp.getTile().done(function(tileHtml) {
      var arrayCategories = spec.arrayCategories.split(" "),
          // Имя выбранной категории, если что.
          name = spec.name,
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
      
      var homeCategories = catalogResource({
             name: name,
             stylesPlace: 'mainContent__homeCategories',
             idPlace: 'homeCategories',
             stock: sortedCategories,
             path: 'category',
             tileHtml: tileHtml,
             geolocation: '#main'
       });
      
      homeCategories.presentResource();
    });// end smartApp.getTile
  });// end smartApp.getCategories
};// end buildHomeCategories

//// Загружает картинки.
//st.preloadImages = function() {
//  smartApp.getCollectionItems().done(function( collections) {
//    smartApp.getCategoryFirms().done(function( firms ) {       
//      smartApp.getCategories().done(function( categories ) {
//        var images = [],
//            colsKeys = Object.keys(collections[0]);
//
//        // Перебираем ключи.
//        colsKeys.forEach(function(key) {
//          // Получаем коллекцию по ключу.
//          var col = collections[0][key],
//          // Путь к картинке коллекции.
//              src = col.category.short_name + "/" + col.firm.short_name + "/" + key + '.jpg';
//          
//          images.push(new Image(src));
//          // Перебираем информациию о коллекции.
//          col.samples.forEach(function( sample ) {
//            // Путь к картинкам образцов коллекции.
//            src = col.category.short_name + "/" + col.firm.short_name + "/" + key + "/" + sample.num + '.jpg';
//
//            images.push(new Image(src));
//          });
//        });
//
//        firms.forEach(function(firm) {
//          // Путь к картинками фирм.
//          var src = firm.categories[0] + '/' +
//              firm.short_name + '/' +
//              firm.short_name + '.jpg';
//
//          images.push(new Image(src));
//        });
//        
//        categories.forEach(function( category ) {
//          // Путь к картинками категории.
//          var src = category.short_name + '/' + category.short_name + '.jpg';
//          
//          images.push(new Image(src));
//        });
//        
//        return images;      
//      });// end smartApp.getCategories
//    });// end smartApp.getCategoryFirms
//  });// end smartApp.getCollectionItems
//};// end st.preloadImages