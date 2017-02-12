$('.listTiles__tile').on('click', function(e) {
  e.preventDefault();
}); // end click

function buildSamplesViewHTML(arrayItems, sampleHtml) {
  // Шаблон элемента.
  var row = '<div class="row">';
  var ul = '<ul class="collectionSlider__listTiles">';
  var closeTags = '</ul></div></div>';
  var finalHtml = row + container + ul;
  var categoryShortName = st.breadcrumb.category.short_name;
  var firmShortName = st.breadcrumb.firm.short_name;
  var collectionShortName = st.breadcrumb.collection.short_name;
  console.log(categoryShortName, firmShortName, collectionShortName);
  // Счётчик для проверки колличества образцов с строке. 
  var counter = 6;

  arrayItems.forEach(function( item, i ) {
    // Проверяем сколько образцов в строке
    if ( (i) == counter && (i) != arrayItems.length ) {
      // При последнем нам конечно же не нужно добавляться закрывающие теги. 
      // Кому "нам" то? Ты здесь один. Ты совсем поехал что-ли?
      finalHtml += closeTags + row + container + ul;
      counter += 6;
    }
    // Извлекаем из каждой категории данные.
    var html = sampleHtml;
    var name = "" + item.name;
    var description = item.description;
    var number = item.num;     
    var short_name = categoryShortName + "/" + firmShortName + "/" + collectionShortName + "/" + number;
   
    html = insertProperty(html, "short_name", short_name); 
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    html = insertProperty(html, "number", number);
    
    finalHtml += html;
  }); // end arrayItems.map
  
  finalHtml += closeTags;                  
  
  return finalHtml;
}// end buildTilesViewHtml
