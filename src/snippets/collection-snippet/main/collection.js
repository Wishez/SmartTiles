//= slides/slides.js
//= contact/contact.js
st.buildAndShowCollectionHtml = function(collection, collectionName) {
  // Шаблон с образцами коллекции.
  smartApp.getCollection().done(function(collectionHtml) {
    // Получить образцы коллекций
   smartApp.getCollectionItems().done(function(collectionItems) {
      // Получить шаблон образца
      smartApp.getSample().done(function( sampleHtml ) {
        // ВНИМАНИЕ: Вместо "EGE" подставь кешированное значение фирмы, когда функция пройдёт тесты. st.breadcrumb.firm.short_name
        // Массив образцов нужной коллекции
        var samples = collectionItems[0][st.breadcrumb.firm.short_name][collection];
        console.log(st.breadcrumb.firm.short_name);
        console.log(samples);
        // Пострить навигационную цепочку передавая кэшированные данные и данные из аргументов функции со обычным стилем.
        var breadcrumb = buildBreadcrumbViewHTML(false, "categories", st.breadcrumb.category.name, st.breadcrumb.firm.name, collectionName);
        // Построить заголовок коллекции. Обычный стиль. Имя коллекции.
        var heading = buildHeadingViewHTML("", collectionName);
        // Создаём строку html со всеми образцами.
        var collectionSamples = buildSamplesViewHTML(samples, sampleHtml);
        // Заменяем в collection html, где слайды, {{samples}}
        collectionHtml = insertProperty(collectionHtml , "samples", collectionSamples);
        
        // Собираем всё вместе.
        var finalHtml = container + breadcrumb + heading + '</div>' + collectionHtml;
        // Запихиваем контент куда надо.
        $('#main').html(finalHtml);
        
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
      });// end getSample
    });// end getCollectionItems
  });// end getCollection
};// end buildAndShowCollectionHtml
//st.buildAndShowCollectionHtml('HSK', 'Helsinki');