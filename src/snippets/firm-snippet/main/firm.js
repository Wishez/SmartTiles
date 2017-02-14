// Передаём в аргументы короткое имя категории, фирмы и их полные имена.
st.buildAndShowFirmHtml = function(firm, firmName) {
  var finalHTML = '<section class="mainContent__firm firm" id="firm">'; 
  // Делаем запросы, получаем список фирм для того чтобы найти нужную и отобразить все её коллекции.
  smartApp.getCategoryFirms().done(function( categoryItems ) {
    // Шаблон плитки для коллекций фирмы
    smartApp.getTile().done(function( tileHtml ) {
      // Собираем коллекции фирмы.
      var firmCollections = [];
      categoryItems.map(function( firmItem ) {
        if (firmItem.short_name == firm ) {
          // Распаковываем массив с колекциями.
          var collections = firmItem.collections;

          collections.map(function( collection ) {
            firmCollections.push(collection);
          });            
        }
      });
      // Строим навигационную цепочку, заголовок и плитки  в стиле "THE FIRM". 
      var breadcrumb = buildBreadcrumbViewHTML("firm", "categories",  st.breadcrumb.category.name, firmName, "");
      var heading = buildHeadingViewHTML("firm", firmName);
      // Не указываю стиль "firm", потому что секция фирмы, стилизована по-умолчанию.
      var collections = buildTilesViewHtml(firmCollections, tileHtml, "", "collection");

      // Компануём всё это дело.
      finalHTML += container + breadcrumb + heading + '</div>' + collections;

      // Контрольный выстрел.
      $main.html(finalHTML);
      });// end getTile
  });// end getCategoryFirms
};// end buildAndShowFirmHtml

$(document).on('click', '#firm a, #collectionsCategoryFirm a', function(e) {
  showLoading('#main');
  
  var $this = $(this);
  // Кэшируем данные выбранной коллекции.
  st.breadcrumb.collection.short_name = $this.attr('data-col');
  st.breadcrumb.collection.name = $this.find('.tile__name').html();
  st.buildAndShowCollectionHtml(st.breadcrumb.collection.short_name,  st.breadcrumb.collection.name);
  
  e.preventDefault();
});


