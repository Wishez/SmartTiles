var st = {};

// Выборки
var $main = $('#main');

st.select = {
  $main: $('#main'),
  $btnTop: $('#btnTop')
};

// Частоиспользуемые элементы
var container = '<div class="container">';
st.elements = {
  container: '<div class="container">'
};

// Навигационные индификаторы
st.nav = {
  home: '#home',
  catalog: '#catalog',
  contacts: '#contacts',
  service: '#service',
  projects: '#projects',
  btnUp: '#btnTop'
};
// Индификаторы
st.ids = {
  main: '#main',
  breadcrumb: {
    home: '#bcHome',
    catalog: '#bcCatalog',
    projects: '#bcProjects'
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
  },
  project: {
    short_name: "",
    name: "",
    amountImgs: 0
  }
};

// Запросики.
var smartApp = (function(){
  // Пути к шаблонам 
  var homeHtml = "snippets/home-snippet/home-snippet.html",
      contactsHtml = "snippets/contacts-snippet/contacts-snippet.html",
      catalogHtml = "snippets/catalog-snippet/catalog-snippet.html",
      serviceHtml = "snippets/service-snippet/service-snippet.html",
      collectionHtml = "snippets/collection-snippet//collection-snippet.html",

      catalogCategories = "data/categories.json",
      firmItems = "data/firms.json",
      allCollections = "data/allCollections.json",
      collectionItems = "data/samples.json",
      projects = "data/projects.json",

      tileHtml = "snippets/tile-snippet/tile-snippet.html",
      projectTileHtml = "snippets/project-snippet/project-snippet.html",
      sampleHtml = "snippets/sample-snippet/sample-snippet.html";
                
  return {  
    getHomePattern: function() {
        return $.get(homeHtml);
    },

    getContacts: function() {
        return $.get(contactsHtml);
    },
    
    getService: function() {
      return $.get(serviceHtml);
    },

    getCatalog: function() {
      return $.get(catalogHtml);
    },
    
    getCollection: function() {
      return $.get(collectionHtml);
    },
    
    getTile: function() {
      return $.get(tileHtml); 
    },
    
    getTileProject: function() {
      return $.get(projectTileHtml);
    },

    getSample: function() {
      return $.get(sampleHtml);
    },

    getCategories: function() {
      return $.getJSON(catalogCategories);
    },
    // !!!Исправить название здесь и во всех функциях!!!
    getCategoryFirms: function() {
      return $.getJSON(firmItems);
    },
    
    getAllCollections: function() {
      return $.getJSON(allCollections);
    },

    getCollectionItems: function() {
      return $.getJSON(collectionItems);
    },
    
    getProjects: function() {
      return $.getJSON(projects);
    }
  };
})();

st.showLoading = function(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'/></div>";
  $(selector).html(html);
};

st.switchActiveMenu = function(selector) {
  $('#nav').find('li').removeClass('active');
  $(selector).addClass('active');
};

var insertProperty = function(string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  
  return string;
};

st.setPolifillForPlaceholder = function() {
  if (!Modernizr.input.placeholder) {
    $.getScript('js/jquery.html5support.min.js')
      .done(function() {
          $.html5support();
          $.placeholder();
      })
      .fail(function() {
        console.log('Placeholder is not supported.');
      });
  } 
};