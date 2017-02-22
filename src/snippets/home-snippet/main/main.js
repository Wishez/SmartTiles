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
        autoplaySpeed: 2500,
        responsive: [{
              breakpoint: 768,
              settings: {
                arrows: false
              }  
            }
          ]
      });
      // Настраиваем форму.
      settingUpForm();
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