//= offers/offers.js

// Загружаем домашнюю страницу.
showLoading('#main');
st.loadHomeContent = function() {
  smartApp.getHomePattern().done(function(data) {
    $main.html(data);
    // Инициализируем карусель. 
    $('.exclusive__slides').slick({
      dots: true
    });
    // Загружаем кусочек всего сайта,
    // который встваляется здесь и не только
    smartApp.getContacts().done(function(data) {
      $main.append(data);                         
    });
    $main.focus();
  });// end get
}; // end loadHomeContent
st.loadHomeContent();
st.loadMenuContent = function(htmlSnippet) {
//    $.get(htmlSnippet, )
};

st.loadCatalog = function() {
  
};