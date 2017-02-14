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
      var arrayItems = [];

      // Находим фирмы, которые принадлежат категории
      categoryFirms.map(function( firm ) {
        // Маccив категорий, к которы принадлежит фирма.
        var categoriesOfFirm = firm.categories;
        categoriesOfFirm.map(function(cat) {
          if (cat == category) {
            return arrayItems.push(firm);
          }
        }); // end map
      });// end map
  
      //  Строим навигационную цепочку с сатегорией
      var breadcrumb = buildBreadcrumbViewHTML("", categoryName, "", "", "");
      // Потом строится heading 
      var heading = buildHeadingViewHTML("", categoryName);
      // Строим плитки с фирмами.
      var categoryItems = buildTilesViewHtml(arrayItems, tileHtml, "firm", 'firm');
   
     // Компануем.
     finalHTML += breadcrumb + heading + '</div>' + categoryItems + '</section>';
     
     // И последний штрих.
     $('#main').html(finalHTML);
    });// end getcategoryFirms
  });// end getTile
};// end buildAndShowCategoryHTML

st.buildAndShowCollectionsCategoryHTML = function(category, categoryName) {
  // Получаю данные с плитками
  smartApp.getCategoryFirms().done(function( categoryFirmsItems ) {
    // Получаю шаблон плиток.
    smartApp.getTile().done(function( tileHtml ) {
      // Создаю массив нужных коллекций категории фирмы.
      var collections = [];
      // Заполняю этот массив.
      categoryFirmsItems.forEach( function ( categoryFirm ) {
        if (categoryFirm.short_name == st.breadcrumb.firm.short_name) {
          
          collections = categoryFirm.collections.map( function( collection ) {
            if ( collection.category == category ) {
              return collection;                        
            }
          });// end map 
        }
      });// end categoryFirmsItems.map
      console.log(collections);
      // Строю навигационную цепочку.
      var breadcrumb = buildBreadcrumbViewHTML(false, st.breadcrumb.firm.name, categoryName, "");
      console.log(breadcrumb);
      // Мастерю заголовок.
      var heading = buildHeadingViewHTML(false, categoryName);
      console.log(heading);
      // Материализую заполненный массив.
      var collectionsTilesHtml = buildTilesViewHtml( collections, tileHtml, "firm", "collection");
      console.log(collectionsTilesHtml);
      // Компоную всё это чудо, оборачивая его в контейнер.
      var finalHTML = '<section id="collectionsCategoryFirm">' + container + breadcrumb + heading + '</div>' +  collectionsTilesHtml + '</section>';
      
      // Рендерю его на странице.
      $(st.ids.main).html(finalHTML);
    });// end getTile
  });// end getCategoryFirms 
};

$(document).on('click', '#category a.tile', function(e) {
  showLoading("#main");
  
  var $this = $(this);
  // Кэшируем иформацию о фирме
  st.breadcrumb.firm.short_name = $this.attr('data-firm');
  st.breadcrumb.firm.name = $this.find('.tile__name').html();
  
  st.buildAndShowFirmHtml(st.breadcrumb.firm.short_name, st.breadcrumb.firm.name);
  
  e.preventDefault();
});// end click

// Когда выбираешь какую-нибудь категорию, строются  коллекциии фирмы выбранной категории. 
$(document).on('click', '#categoriesFirm a', function(e) {
  showLoading("#main");
  
  var $this = $(this);
 
  st.breadcrumb.category.short_name = $this.attr('data-cat');
  st.breadcrumb.category.name = $this.find('.tile__name').html();
  
  st.buildAndShowCollectionsCategoryHTML(st.breadcrumb.category.short_name, st.breadcrumb.category.name);
  
  e.preventDefault();
});// end click
