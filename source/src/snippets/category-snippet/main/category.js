//= tiles/tiles.js
//st.buidAndShowCategory = function(categoryName) {
//  var cateogryContainer = '#category';
//  smartApp.getCategory().done(function(category) {
//    //buildAndShowBreadcrumb(categoryContainer, categoryName);
//    //buildAndShowHeading(categoryContainer, categoryName);
//    //buildAndShowTiles(categoryContainer, categoryName);
//  });
//}
// В первый аргумент передаётся категория из атрибута data-cat
// Второй аргумент - значение элемента с классом .tile__name 
// По которому кликнули.
st.buildAndShowCategoryHTML = function(category, categoryName) {
  // Получаем шаблон страницы категории
  smartApp.getCategory().done(function(categoryHtml) {
  // Выбираем из шаблона блок категории.
//    var $category = $('#category');
    // Строим заголовок.
//    var heading = buildHeadingViewHTML("firms", categoryName);
    // Строим навигационнаю цепочку.
//    var breadcrumb = buildBreadcrumbViewHTML("category", categoryName);
//    smartApp.getBreadcrumb().done(function(breadcrumbHtml) {
//    });
    // Начинаем преображать шаблон.
    var categoryHTML = categoryHtml;
//    categoryHTML = $category.prepend(heading);
//    categoryHTML = $category.prepend(breadcrumb);
      smartApp.getTile().done(function(tileHtml) {
        // Сохраняем в переменную categoryItems код со всеми фирмами категории
//        var categoryItems = buildCategoryViweHTML(tileHtml, category);
        // Впихиваем их в блок, где должны отображаться фирмы категории
//        categoryHTML = $('#firmsCategory').html(categoryItems);
        // Законченный код отправляем в блок с основным контентом
//        $main.html(categoryHTML);
      });
  });
};
