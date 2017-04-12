$(document).on('submit', '#search', function() {
  
  var $input = $(this).find('#searchInput'); 
  var value = $input.val();
  
  $st.showLoading($st.ids.main);

  $st.search(value);
  
  $input.val('');
  return false;
}); 

var categories = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '/media/smarttiles/data/categories.json'
});

var firms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '/media/smarttiles/data/firms.json'
});

var collection = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '/media/smarttiles/data/allCollections.json'
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