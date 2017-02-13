var st = {};
// Пути к шаблонам !Нужно их почтистить
st.homeHtml = "snippets/home-snippet/home-snippet.html";
st.contactsHtml = "snippets/contacts-snippet/contacts-snippet.html";
st.catalogHtml = "snippets/catalog-snippet/catalog-snippet.html";
st.categoryHtml = "../snippets/category-snippet/category-snippet.html";
st.firmHtml = "snippets/firm-snippet/firm-snippet.html";
st.collectionHtml = "snippets/collection-snippet//collection-snippet.html";

st.catalogCategories = "data/categories.json";
st.firmItems = "data/firms.json";
st.collectionItems = "data/samples.json";

st.breadcrumbHtml = "snippets/breadcrumb-snippet/breadcrumb-snippet.html";
st.breadcrumbFirmHtml = "snippets/breadcrumb-snippet/breadcrumb-firm-snippet.html";
st.headingHtml = "snippets/heading-snippet/heading-snippet.html";
st.headingFirmHtml = "snippets/heading-snippet/heading-snippet-firm.html";
st.tileHtml = "snippets/tile-snippet/tile-snippet.html";
st.sampleHtml = "snippets/sample-snippet/sample-snippet.html";
  
st.firmsHtml = "snippets/firms-snippet/firms-snippet.html";
st.coversHtml = "snippets/covers-snippet/covers-snippet.html";
// Выборки
var $main = $('#main');

// Частоиспользуемые элементы
var container = '<div class="container">';

// Навигационные индификаторы
st.nav = {
  home: '#home',
  catalog: '#catalog',
  contacts: '#contacts'
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
  var obj = {};
                
  obj.getHomePattern = function() {
    return $.get(st.homeHtml);
  };
  
  obj.getContacts = function() {
    return $.get(st.contactsHtml);
  };
  
  obj.getCatalog = function() {
    return $.get(st.catalogHtml);
  };
  
  obj.getCategory = function() {
    return $.get(st.categoryHtml);
  };
  
  obj.getFirm = function() {
    return $.get(st.firmHtml);
  };
  
  obj.getCollection = function() {
    return $.get(st.collectionHtml);
  };
  
  obj.getBreadcrumb = function() {
    return $.get(st.breadcrumbHtml);
  };
    
  obj.getHeading = function() {
    return $.get(st.headingHtml);
  };
  
  obj.getTile = function() {
    return $.get(st.tileHtml); 
  };
  
  obj.getSample = function() {
    return $.get(st.sampleHtml);
  };
  // До сих пор не знаю, нужны ли мне эти шаблоны;0.
  obj.getFirms = function() {
    return $.get(st.firmsHtml);
  };
  
  obj.getCovers = function() {
    return $.get(st.coversHtml);
  };
  
  obj.getCategories = function() {
    return $.getJSON(st.catalogCategories);
  };
  
  obj.getCategoryFirms = function() {
    return $.getJSON(st.firmItems);
  };
  
  obj.getCollectionItems = function() {
    return $.getJSON(st.collectionItems);
  };
  
  return obj;
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