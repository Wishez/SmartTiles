var st = {};

// Выборки
var $main = $('#main');

st.select = {
  $main: $('#main'),
  $btnTop: $('#btnTop')
};

// Частоиспользуемые элементы
var container = '<div class="container">';

// Навигационные индификаторы
st.nav = {
  home: '#home',
  catalog: '#catalog',
  contacts: '#contacts',
  btnUp: '#btnTop'
};
// Индификаторы
st.ids = {
  main: '#main',
  breadcrumb: {
    home: '#bcHome',
    catalog: '#bcCatalog'
  }
};
// Навигационное кэширование.
st.breadcrumb = {
  category: {
    short_name : "",
    name : ""
  },
  firm : {
    short_name : "",
    name : ""
  },
  collection: {
    short_name : "",
    name : ""
  }
};

// Запросики.
var smartApp = (function(){
  // Пути к шаблонам 
  var homeHtml = "snippets/home-snippet/home-snippet.html",
      contactsHtml = "snippets/contacts-snippet/contacts-snippet.html",
      catalogHtml = "snippets/catalog-snippet/catalog-snippet.html",
      categoryHtml = "../snippets/category-snippet/category-snippet.html",
      firmHtml = "snippets/firm-snippet/firm-snippet.html",
      collectionHtml = "snippets/collection-snippet//collection-snippet.html",

      catalogCategories = "data/categories.json",
      firmItems = "data/firms.json",
      allCollections = "data/allCollections.json",
      collectionItems = "data/samples.json",

      breadcrumbHtml = "snippets/breadcrumb-snippet/breadcrumb-snippet.html",
      breadcrumbFirmHtml = "snippets/breadcrumb-snippet/breadcrumb-firm-snippet.html",
      headingHtml = "snippets/heading-snippet/heading-snippet.html",
      headingFirmHtml = "snippets/heading-snippet/heading-snippet-firm.html",
      tileHtml = "snippets/tile-snippet/tile-snippet.html",
      sampleHtml = "snippets/sample-snippet/sample-snippet.html";
                
  return {  
    getHomePattern: function() {
        return $.get(homeHtml);
    },

    getContacts: function() {
        return $.get(contactsHtml);
    },

    getCatalog: function() {
      return $.get(catalogHtml);
    },

    getCategory: function() {
      return $.get(categoryHtml);
    },

    getFirm: function() {
      return $.get(firmHtml);
    },

    getCollection: function() {
      return $.get(collectionHtml);
    },

    getBreadcrumb: function() {
      return $.get(breadcrumbHtml);
    },

    getHeading: function() {
      return $.get(headingHtml);
    },

    getTile: function() {
      return $.get(tileHtml); 
    },

    getSample: function() {
      return $.get(sampleHtml);
    },

    getCategories: function() {
      return $.getJSON(catalogCategories);
    },

    getCategoryFirms: function() {
      return $.getJSON(firmItems);
    },
    
    getAllCollections: function() {
      return $.getJSON(allCollections);
    },

    getCollectionItems: function() {
      return $.getJSON(collectionItems);
    }
  };
})();

var showLoading = function(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'/></div>";
  $(selector).html(html);
};

var switchActiveMenu = function(selector) {
  $('#nav').find('li').removeClass('active');
  $(selector).addClass('active');
};

var loadSelectedMenu = function(selector, smartAppRquest) {
  $(selector).on('click', function(e) {
    showLoading('#main');
    switchActiveMenu(this);
    smartAppRquest().done(function(data){  
      $main.html(data);
    });//end get
    e.preventDefault();
  }); // end click
};

var insertProperty = function(string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  
  return string;
};