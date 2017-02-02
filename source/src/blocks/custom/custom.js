var st = {};

var homeHtml = "snippets/home-snippet/home-snippet.html";
var catalogHtml = "snippets/catalog-snippet/catalog-snippet.html";
var contactsHtml = "snippets/contacts-snippet/contacts-snippet.html";


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
  }
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


