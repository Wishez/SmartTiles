function buildTilesViewHtml(arrayItems, tileHtml, styleTiles, urlPath) { 
  var finalHtml =  (styleTiles == "firm") ? '<div class="coverTiles coverTiles-firm">' : '<div class="coverTiles">';
  finalHtml += container + '<ul class="tiles__tilesList tilesList">';
 
  arrayItems.map(function(item) {
    // Извлекаем из каждой категории данные.
    var html = tileHtml;
    var name = "" + item.name;
    var description = item.description;
    var short_name = "";
      
    // При определённом типе - свой url.
    // Также устанавливаю при определённом типе атрибуты data-cat и data-firm.
    switch(urlPath) {
      // URL для категорий.
      case 'category':
        short_name = item.short_name + '/' + item.short_name;
        
        html = insertProperty(html, "category", item.short_name);
        // Либо data-firm будет пустовать, категория загрузилась из каталога, раздела "Фирмы".
        // Либо в некоторых плитках категории будет кэшированное значение фирмы, но это же не критично. Ведь так?
        html = insertProperty(html, "firm", st.breadcrumb.firm.short_name);
        
        break;
      // URL для фирм категории.
      case 'firm':
        short_name = st.breadcrumb.category.short_name + "/" + item.short_name + "/" + item.short_name;
        
        html = insertProperty(html, "category", st.breadcrumb.category.short_name);
        html = insertProperty(html, "firm", item.short_name);
        
        break;
      // URL для коллекций фирмы.
      case 'collection':
        short_name = st.breadcrumb.category.short_name + "/" + 
        st.breadcrumb.firm.short_name + "/" + item.short_name + "/" + item.short_name;
        
        html = insertProperty(html, "category", st.breadcrumb.category.short_name);
        html = insertProperty(html, "firm", st.breadcrumb.firm.short_name);
        html = insertProperty(html, "collection", item.short_name);
        
        break;
      // URL для фирм в каталоге.
      case 'firms':
        var cats = item.categories;
        short_name = cats[0] + '/' +
          item.short_name + '/' +
          item.short_name;
        
        html = insertProperty(html, "category", cats.toString());
        html = insertProperty(html, "firm", item.short_name);
        
        break;
    }
             
    html = insertProperty(html, "short_name", short_name);
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "description", description);
    
    finalHtml += html;
  }); // end arrayItems.map
  
  finalHtml += '</ul></div></div>';                  
  
  return finalHtml;
}// end buildTilesViewHtml