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

var collections = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('collections'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/firms.json'
});

$('#search .typeahead').typeahead({
  highlight: true
},
{
  name: 'categories',
  display: 'name',
  source: categories,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_collection">Категории</h3>'
  }
},
{
  name: 'firms',
  display: 'name',
  source: firms,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_firm">Фирмы</h3>'
  }
},
{
  name: 'collections',
  display: 'name',
  source: collections,
  templates: {
    header: '<h3 class="search__caption search__caption-theme_collection">Коллекции</h3>',
    suggestion: function ( collection ) {
      return '<span>' + collection.name + '</span>';
    }
  }
});