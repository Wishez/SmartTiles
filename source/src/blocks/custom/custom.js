var st = {};

var homeHtml = "snippets/home-snippet/home-snippet.html";
var catalogHtml = "snippets/catigories-snippet/catigories-snippet.html";
var contactsHtml = "snippets/contacts-snippet/contacts-snippet.html";

var showLoading = function(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'/></div>";
  $(selector).html(html);
}

var switchActiveMenu = function(selector) {
  $('#nav').find('li').removeClass('active');
  $(selector).addClass('active');
}