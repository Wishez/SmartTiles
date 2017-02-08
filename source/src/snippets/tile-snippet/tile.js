function buildTilesViewHtml(arrayItems, tileHtml) {
  var finalHtml = '<ul class="tiles__tilesList tilesList">';
  var html = tileHtml;
  var name = "", short_name = "", description = "";
  arrayItems.map(function(item) {
    // Извлекаем из каждой категории данные.
    name = "" + item.name;
    short_name = item.short_name + "/" + item.short_name;
    description = item.description;
    
//    $('.tile').attr("data-cat", category.short_name);
    // Заменяем данные в шаблоне.
    html = insertProperty(html, "category", category.short_name);
    html = insertProperty(html, "short_name", short_name); 
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    
    finalHtml += html;
  });
  
  finalHtml += '</ul></div>';                  
  
  return finalHtml;
}