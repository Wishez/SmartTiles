//= tiles/tiles.js
//st.buidAndShowCategory = function(categoryName) {
//  var cateogryContainer = '#category';
//  smartApp.getCategory().done(function(category) {
//    //buildAndShowBreadcrumb(categoryContainer, categoryName);
//    //buildAndShowHeading(categoryContainer, categoryName);
//    //buildAndShowTiles(categoryContainer, categoryName);
//  });
//}
// ! Выполняй ajax запросы в одной функции, строя цепочку из них,
// Передавая возвращаемые в запросах данные в функции,
// которые строят фрагменты html. В последнем запросе
// запихивай их в на главную страничку^_^!

// В первый аргумент передаётся категория из атрибута data-cat, которое хранит короткое имя категории
// Второй аргумент - значение элемента с классом .tile__name 
// По которому кликнули.
// Заметка: в обработчике события щелчка мыши
// Извлекай данные плитки data-cat и data-firm
// Присваивай их навигационной цепочке!
st.buildAndShowCategoryHTML = function(category, categoryName, styleType) {
  // Получаем шаблон страницы категории
  smartApp.getCategory().done(function(categoryHtml) {
  // Выбираем из шаблона блок категории.
    var $category = $('#firmsCategory');
    var breadcrumb = "";
    var heading = "";
    var finalHTML = "";
    
    // Сначала строим breadcrumb
    smartApp.getBreadcrumb().done(function(breadcrumbHtml) {
      // Получаем кусок html-ля плитки.
      smartApp.getTile().done(function(tileHtml) {
      // Получаем данные о фирмах в json формате.
       smartApp.getFirmsItems().done(function(firmsItems) {
          // Массив с фирмами, которые пренадлежат категориям.
          st.arrayItems = [];
          //  Строим навигационную цепочку с сатегорией
          breadcrumb = buildBreadcrumbViewHTML(breadcrumbHtml, styleType, categoryName, "", "", "");
          // Потом строится heading 
          heading = buildHeadingViewHTML(styleType, categoryName);
          console.log(heading);
          console.log(breadcrumb);
         
          // Находим фирмы, которые принадлежат категории
          firmsItems.map(function(firm) {
            // Маccив категорий, к которы принадлежит фирма.
            var categoriesOfFirm = firm.categories;
            categoriesOfFirm.map(function(cat) {
              if (cat == category) {
                return st.arrayItems.push(firm);
              }
            });
          });
          // Строим плитки с фирмами.
          var categoryItems = buildTilesViewHtml(st.arrayItems, tileHtml, "firm");
          console.log(categoryItems);
         // Запихиваем плитки в полученный шаблон категории.
         categoryHtml += categoryItems;
         // Компануем.
         finalHTML = breadcrumb + heading + categoryHtml;
         
         // И последний штрих.
         $('#main').html(finalHTML);
        });
        // Впихиваем их в блок, где должны отображаться фирмы категории
//        categoryHTML = $('#firmsCategory').html(categoryItems);
        // Законченный код отправляем в блок с основным контентом
//        $main.html(categoryHTML);
    console.log();
      });
    });
  });
};
st.buildAndShowCategoryHTML('CT', 'Ковровая плитка', "");
