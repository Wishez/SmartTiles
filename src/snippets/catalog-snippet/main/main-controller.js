//= subNav/subNav.js

//$(document).on( 'click', '#catalogCovers a, #homeCategories a, #foundCategories a.tile', function() {
//  var $this = $(this);
//
//  // Заполняем и обновляем кэш при клике.
//  $st.breadcrumb.category.name = $this.find('.tile__name').text();
//  $st.breadcrumb.category.short_name = $this.attr('data-cat');
//  // В IE, если сначала загружать картинку загрузки,
//  // а потом кэшировать данные, то странным образом
//  // будет кэшироваться только атрибут категории, и
//  // заголовок будет undefined или пустой. В Chrome и 
//  // остальных браузерах всё работает ШИКАРНО.
//  // Понять это, мне стоило 3 часа...
//  $st.showLoading($st.ids.main);
//
//  $st.buildHomeAndCatalogCategory();
//  
//  return false;
//});// end click
//
//
//$(document).on('click', '#catalogFirms a.tile, #foundFirms a.tile', function() {
//  var $this = $(this);
//  
//  $st.breadcrumb.firm.short_name = $this.attr('data-firm');
//  $st.breadcrumb.firm.name = $this.find('.tile__name').text();
//  
//  $st.showLoading($st.ids.main);
//      
//  $st.buildCatalogFirmHTML();
//  
//  return false;
//});// end click
