var categories = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/categories.json'
});

var firms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/firms.json'
});

var collection = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '/data/allCollections.json'
});

$('#search .typeahead').typeahead({
  highlight: true
},
{
  name: 'categories',
  display: 'name',
  source: categories,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_categories">Категории</h3>'
  }
},
{
  name: 'collection',
  display: 'name',
  source: collection,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_collections">Коллекции</h3>'
  }
},
{
  name: 'firms',
  display: 'name',
  source: firms,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_firms">Фирмы</h3>'
  }
});

st.search = function( value ) {
  var matches = {
    categories : [],
    firms: [],
    collections: []
  };
  
  smartApp.getCategories().done(function( categories ) {
    smartApp.getCategoryFirms().done(function( firms ) {
      smartApp.getAllCollections().done(function( collections ) {
        categories.forEach(function( category ) {
          if (category.name.toLowerCase() == value.toLowerCase()) {
            matches.categories.push(category);
          }
        }); // end categories.forEach     
        
        firms.forEach(function( firm ) {
          if (firm.name.toLowerCase() == value.toLowerCase()) {
            matches.firms.push( firm );
          }
        }); // end firm.forEach
        
         collections.forEach(function( collection ) {
          if (collection.name.toLowerCase() == value.toLowerCase()) {
            matches.collections.push(collection);
          }
        }); // end collection.forEach
        
        // Проверить на наличие совпадений в мессивах.
        // Выстроить плитки.
        // Подумать на счёт экземляров
        // Добавить сообщение об ненахождение искомого.
        // Добавить строчку, что искал пользователь.
        console.log(matches.categories);
        console.log(matches.firms);
        console.log(matches.collections);
      });// end smartApp.getAllCollections
    });// end smartApp.getCategoryFirms
  });// end smartApp.getCategories
  
}

$(document).on('submit', '#search', function() {
  var value = $(this).find('#searchInput').val();
  console.log(value);
  st.search(value);
  
  return false;
}); 