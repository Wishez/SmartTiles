//$(document).on('submit', '#search', function() {
//  
//  var $input = $(this).find('#searchInput'); 
//  var value = $input.val();
//  
//  $st.showLoading($st.ids.main);
//
//  $st.search(value);
//  
//  $input.val('');
//  return false; 
//});  

var categories = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: '/api/v0/categories/?format=json'
});
//127.0.0.1:8080
var firms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: '/api/v0/firms/?format=json'
});
//  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
//  queryTokenizer: Bloodhound.tokenizers.whitespace,
//  url: '127.0.0.1:8080/api/v0/firms/?format=json'

//datumTokenizer: function(datum) {
//    return Bloodhound.tokenizers.obj.whitespace(datum.name);
//  },
//  queryTokenizer: Bloodhound.tokenizers.whitespace,
//  remote: {
//    url: '/api/v0/collections/?format=json'
//  } 
var collections = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: '/api/v0/collections/?format=json'
});


$('#search .typeahead').typeahead({
  highlight: true,
  minLength: 0
},
{
  name: 'categories',
  display: 'name',
  source: categories,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_categories">Категории</h3>'
  },
  limit: 10
},
{
  name: 'collections',
  display: 'name',
  source: collections,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_collections">Коллекции</h3>'
  },
  limit: 10
},
{
  name: 'firms',
  display: 'name',
  source: firms,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_firms">Фирмы</h3>'
  },
  limit: 10
});