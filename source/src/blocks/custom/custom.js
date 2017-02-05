var st = {};

var homeHtml = "snippets/home-snippet/home-snippet.html";
var contactsHtml = "snippets/contacts-snippet/contacts-snippet.html";
var catalogHtml = "snippets/catalog-snippet/catalog-snippet.html";
var categoryHtml = "../snippets/category-snippet/category-snippet.html";
var firmHtml = "snippets/firm-snippet/firm-snippet.html";
var collectionHtml = "snippets/collection-snippet//collection-snippet.html";

var catalogCategories = "data/categories.json";

var breadcrumbHtml = "snippets/breadcrumb-snippet/breadcrumb-snippet.html";
var headingHtml = "snippets/heading-snippet/heading-snippet.html";
var tileHtml = "snippets/tile-snippet/tile-snippet.html";
var sampleHtml = "snippets/sample-snippet/sample-snippet.html";
  
var firmsHtml = "snippets/firms-snippet/firms-snippet.html";
var coversHtml = "snippets/covers-snippet/covers-snippet.html";

var $main = $('#main');


// Запросики.
var smartApp = (function(){
  var obj = {};
                
  obj.getHomePattern = function() {
    return $.get(homeHtml);
  };
  
  obj.getContacts = function() {
    return $.get(contactsHtml);
  };
  
  obj.getCatalog = function() {
    return $.get(catalogHtml);
  };
  
  obj.getCategory = function() {
    return $.get(categoryHtml);
  };
  
  obj.getFirm = function() {
    return $.get(firmHtml);
  };
  
  obj.getCollection = function() {
    return $.get(collectionHtml);
  };
  obj.getBreadcrumb = function() {
    return $.get(breadcrumbHtml);
  };
  obj.getHeading = function() {
    return $.get(headingHtml);
  };
  obj.getTile = function() {
    return $.get(tileHtml); 
  };
  obj.getSample = function() {
    return $.get(sampleHtml);
  };
  // До сих пор не знаю, нужны ли мне эти шаблоны;0.
  obj.getFirms = function() {
    return $.get(firmsHtml);
  };
  obj.getCovers = function() {
    return $.get(coversHtml);
  };
  obj.getCategories = function() {
    return $.getJSON(catalogCategories);
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
// TEST insertProperty. Наверное, надо всё же использовать Mocha.
//smartApp.getTile().done(function(tile) {
//  console.log(tile);
//  var finalHtml = '<div class="container"><ul class="tiles__tilesList tilesList">';
//  var html = tile;
//  html = insertProperty(html, "short_name", "DT"); 
//  html = insertProperty(html, "name", "GO TO THE HELL!");
//  finalHtml += html;
//  finalHtml += '</ul></div>';              
//  console.log(finalHtml);
//  return finalHtml;
//});

