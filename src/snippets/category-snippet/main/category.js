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
st.buildAndShowCategoryHTML = function(category, categoryName) {
  var finalHTML = '<section class="mainContent__category category" id="category">';
  finalHTML += container;
  // Получаем кусок html-ля плитки.
  smartApp.getTile().done(function( tileHtml ) {
  // Получаем данные о фирмах в json формате.
   smartApp.getFirmsItems().done(function( firmsItems ) {
      // Массив с фирмами, которые пренадлежат категориям.
      st.arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      firmsItems.map(function(firm) {
        // Маccив категорий, к которы принадлежит фирма.
        var categoriesOfFirm = firm.categories;
        categoriesOfFirm.map(function(cat) {
          if (cat == category) {
            return st.arrayItems.push(firm);
          }
        }); // end map
      });// end map

      //  Строим навигационную цепочку с сатегорией
      var breadcrumb = buildBreadcrumbViewHTML("", categoryName, "", "", "");
      // Потом строится heading 
      var heading = buildHeadingViewHTML("", categoryName);
      // Строим плитки с фирмами.
      var categoryItems = buildTilesViewHtml(st.arrayItems, tileHtml, "firm");
      
     // Компануем.
     finalHTML += breadcrumb + heading + '</div>' + categoryItems + '</section>';
     console.log(finalHTML);
     // И последний штрих.
     $('#main').html(finalHTML);
    });// end getFirmsItems
  });// end getTile
};

$(document).on('click', '#category a', function(e) {
  showLoading("#main");
  // Собираем информацию
  
  var $this = $(this),
      cat = $this.attr('data-cat'),
      firm = $this.attr('data-firm'),
      nameCategory = $('#bcCategory')[0].innerHTML;
//      nameFirm = $this.find('')[0].innerHTML;
  console.log(cat, firm, nameCategory, nameFirm);
  
//  st.buildAndViewFirmHtml(cat, 'EGE', 'Травмобезопасный ленолеум', 'Ege'); 
//  setTimeout(function () { $('#bcCategory, #category a').attr('data-cat', category); }, 100);
});
