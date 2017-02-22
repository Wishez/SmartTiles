$(document).on('submit', '#search', function() {
  var value = $(this).find('#searchInput').val();
  console.log(value);
  $st.search(value);
  
  return false;
}); 

var categories = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../build/data/categories.json'
  //../data/categories.json
});

var firms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../build/data/firms.json'
  //../data/allCollections.json
});

var collection = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../build/data/allCollections.json'
  //../data/allCollections.json
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