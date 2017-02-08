function buildTilesViewHtml(arrayItems, tileHtml, typeTile) {
  var isTypeFirm = (typeTile == "firm"); 
  var finalHtml =  isTypeFirm ? '<div class="coverTiles coverTiles-firm">' : '<div class="coverTiles">';
  finalHtml += '<ul class="tiles__tilesList tilesList">';
  var name = "", short_name = "", description = "";
  arrayItems.map(function(item) {
    // Извлекаем из каждой категории данные.
    var html = tileHtml;
    name = "" + item.name;
    short_name = item.short_name + "/" + item.short_name;
    description = item.description;
    
    if (isTypeFirm) {
      html = insertProperty(html, "firm", item.short_name);
    } else {
      html = insertProperty(html, "category", item.short_name);
    }
    html = insertProperty(html, "short_name", short_name); 
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    
    finalHtml += html;
  });
  
  finalHtml += '</ul></div>';                  
  
  return finalHtml;
}