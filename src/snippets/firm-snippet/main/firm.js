// Передаём в аргументы короткое имя категории, фирмы и их полные имена.
st.buildAndViewFirmHtml = function(category, firm, categoryName, firmName) {
  var finalHTML = '<section class="mainContent__firm firm">'; 
  // Делаем запросы, получаем список фирм для того чтобы найти нужную и отобразить все её коллекции.
  smartApp.getFirmsItems().done(function( firmsItems ) {
    // Шаблон плитки для коллекций фирмы
    smartApp.getTile().done(function( tileHtml ) {
      // Собираем коллекции фирмы.
      var firmCollections = [];
      firmsItems.map(function( firmItem ) {
        if (firmItem.short_name == firm ) {
          // Распаковываем массив с колекциями.
          var collections = firmItem.collections;

          collections.map(function( collection ) {
            firmCollections.push(collection);
          });            
        }
      });
      // Строим навигационную цепочку, заголовок и плитки  в стиле "THE FIRM". 
      console.log(firmCollections);
      var breadcrumb = buildBreadcrumbViewHTML("firm", categoryName, firmName, "");
      var heading = buildHeadingViewHTML("firm", firmName);
      // Не указываю стиль "firm", потому что секция фирмы, стилизована по-умолчанию.
      var collections = buildTilesViewHtml(firmCollections, tileHtml, "");

      // Компануём всё это дело.
      finalHTML += container + breadcrumb + heading + '</div>' + collections;
      console.log(finalHTML); 

      // Контрольный выстрел.
      $main.html(finalHTML);
      });// end getTile
  });// end getFirmsItems
};