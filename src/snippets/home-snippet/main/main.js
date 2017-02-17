//= offers/offers.js

// Загружаем домашнюю страницу.
showLoading(st.ids.main);
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
st.loadHomeContent();