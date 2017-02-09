// Передаём в аргументы короткое имя категории, фирмы и их полные имена.
st.buildAndViewFirmHtml = function(category, firm, categoryName, firmName) {
  var finalHTML = ""; 
  // Делаем запросы, получаем список фирм для того чтобы найти нужную и отобразить все её коллекции.
  // ! ОБОЙДИСЬ без шаблона фирм
  smartApp.getFirmsItems().done(function( firmsItems ) {
    // Шаблон для фирмы.
    smartApp.getFirm().done(function( firmHtml ) {
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
        var collections = buildTilesViewHtml(firmCollections, tileHtml, "firm");
        
        // Компануём всё это дело.
        finalHTML += breadcrumb + heading + collections;
        console.log(finalHTML); 
        
        // Контрольный выстрел.
        
      });// end getTile
    });// end getFrim
  });// end getFirmsItems
};
st.buildAndViewFirmHtml('CL', 'EGE', 'Травмобезопасный ленолеум', 'Ege');