//= slides/slides.js
//= contact/contact.js
st.buildAndShowCollectionHtml = function(collection, collectionName) {
  // Шаблон с образцами коллекции.
  smartApp.getCollection().done(function(collectionHtml) {
    // Получить образцы коллекций
    console.log("success collectionHtml");
   smartApp.getCollectionItems().done(function(collectionItems) {
      // Получить шаблон образца
      console.log("success collectionItems");
      smartApp.getSample().done(function( sampleHtml ) {
        console.log("success sampleHtml");
        // Создаём массив нужный образцов коллекций
        var samples = [];
        // Ищем образцы по короткому названию фирмы и запихиваем их в массив образцов.
        // ! не работает
        collectionItems.map(function( firm ) {
          // Если у фирмы есть такая коллекция
          if (firm.hasOwnProperty(collection)) {
            //  Перебираем её образцы.
            firm[collection].map(function( sample ) {
              // Отправляем их в массив.
              return samples.push( sample );
            });
          }
        });
        console.log(samples);
        // Пострить навигационную цепочку передавая кэшированные данные и данные из аргументов функции со обычным стилем.
        // Построить заголовок коллекции. Обычный стиль. Имя коллекции.
        // Создаём строку html со всеми образцами. !Создай функцию buildSamplesViewHTML(array, sampleHtml);
        // Заменяем в collection html, где слайды, {{samples}}
    
        // Запихиваем контент куда надо.
        
      });// end getSample
    });// end getCollectionItems
  });// end getCollection
};// end buildAndShowCollectionHtml
st.buildAndShowCollectionHtml('HSK', 'Helsinki');