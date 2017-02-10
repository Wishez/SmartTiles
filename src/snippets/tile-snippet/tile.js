function buildTilesViewHtml(arrayItems, tileHtml, typeTile) {
  var isTypeFirm = (typeTile == "firm"); 
  var finalHtml =  isTypeFirm ? '<div class="coverTiles coverTiles-firm">' : '<div class="coverTiles">';
  finalHtml += container + '<ul class="tiles__tilesList tilesList">';
  // short_name определяет url картинки и устанавливается в атрибуты data-cat и data-firm...
  var name = "", short_name = "", description = "",
      categoryShortName = st.breadcrumb.category.short_name;
 
  arrayItems.map(function(item) {
    // Извлекаем из каждой категории данные.
    var html = tileHtml;
    name = "" + item.name;
    description = item.description;
    // Проверяем, нужно ли устанавливать данные в data-firm.
    if (isTypeFirm) {
      short_name = categoryShortName + "/" + item.short_name + "/" + item.short_name;
          
      html = insertProperty(html, "category", categoryShortName);
      html = insertProperty(html, "firm", item.short_name);
      html = insertProperty(html, "short_name", short_name);
    } else {
      short_name = item.short_name + "/" + item.short_name;
      
      html = insertProperty(html, "category", item.short_name);
      html = insertProperty(html, "short_name", short_name); 
    }
    
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    
    finalHtml += html;
  }); // end arrayItems.map
  
  finalHtml += '</ul></div></div>';                  
  
  return finalHtml;
}// end buildTilesViewHtml