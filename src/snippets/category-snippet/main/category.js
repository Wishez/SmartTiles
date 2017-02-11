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
   smartApp.getCategoryFirms().done(function( categoryFirms ) {
      // Массив с фирмами, которые пренадлежат категориям.
      st.arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      categoryFirms.map(function( firm ) {
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
     
     // И последний штрих.
     $('#main').html(finalHTML);
    });// end getcategoryFirms
  });// end getTile
};// end buildAndShowCategoryHTML

$(document).on('click', '#category a.tile', function(e) {
  showLoading("#main");
  // Собираем информацию
  var $this = $(this),
      cat = st.breadcrumb.category.short_name,
      firm = $this.attr('data-firm'),
      nameCategory = st.breadcrumb.category.name,
      nameFirm = $this.find('.tile__name').html();
  console.log(cat, firm, nameCategory, nameFirm);
  // Кэшируем иформацию о фирме
  st.breadcrumb.firm.short_name = firm;
  st.breadcrumb.firm.name = nameFirm;
  
  st.buildAndViewFirmHtml(cat, firm, nameCategory, nameFirm); 
});// end click
