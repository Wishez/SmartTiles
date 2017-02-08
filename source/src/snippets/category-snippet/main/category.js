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
st.buildAndShowCategoryHTML = function(category, categoryName, styleType) {
  // Получаем шаблон страницы категории
  smartApp.getCategory().done(function(categoryHtml) {
  // Выбираем из шаблона блок категории.
    var $category = $('#firmsCategory');
    var breadcrumb = "";
    var heading = "";
    var finalHTML = categoryHtml;
    
    // Сначала строим breadcrumb
    smartApp.getBreadcrumb().done(function(breadcrumbHtml) {
      breadcrumb = buildBreadcrumbViewHTML(breadcrumbHtml, styleType, categoryName, "", "");
      console.log(breadcrumb);
      
      // Потом строится heading 
      heading = buildHeadingViewHTML(styleType, categoryName);
      console.log(heading);
    // Начинаем преображать шаблон.
//    categoryHTML = $category.prepend(heading);
//    categoryHTML = $category.prepend(breadcrumb);
      // После чего плиточки   
      smartApp.getTile().done(function(tileHtml) {
        smartApp.getFirmsItems().done(function(firmsItems) {
          // Массив с фирмами, которые пренадлежат категориям.
          st.arrayItems = [];
          
          firmsItems.map(function(firm) {
            console.log(firm);
            var categoriesOfFirm = firm.categories;
            // маccив категорий, к которы принадлежит фирма.
            categoriesOfFirm.map(function(cat) {
              if (cat == category) {
                return st.arrayItems.push(firm);
              }
            });
          });
          console.log(st.arrayItems);
          
          var categoryItems = buildTilesViewHtml(st.arrayItems, tileHtml);
          console.log(categoryItems);
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
st.buildAndShowCategoryHTML('CT', 'Ковровая плитка', "firm");
