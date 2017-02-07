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
// ! Выполняй ajax запросы в одной функции, строя цепочку из них,
// Передавая возвращаемые в запросах данные в функции,
// которые строят фрагменты html. В последнем запросе
// запихивай их в на главную страничку^_^!

st.buildAndShowCategoryHTML = function(category, categoryName, headingType, breadcrumbType) {
  // Получаем шаблон страницы категории
  smartApp.getCategory().done(function(categoryHtml) {
  // Выбираем из шаблона блок категории.
    var $category = $('#category');
    // Строим заголовок.
    if (headingType === "firm") {
      // Сначала строятся breadcrumb
      // Потом строится heading
      smartApp.getHeadingFirm().done(function(headingFirmHtml) {
        var heading = buildHeadingViewHTML(headingFirmHtml, headingType, categoryName);
        // После чего плиточки  
        
      });
    }
//    buildHeadingViewHTML("", categoryName);
    // Строим навигационнаю цепочку.
//    buildBreadcrumbViewHTML(categoryName, "", "", false);
    console.log();
    // Начинаем преображать шаблон.
    var categoryHTML = categoryHtml;
    console.log(categoryHTML);
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
st.buildAndShowCategoryHTML('CT', 'Ковровая плитка');
