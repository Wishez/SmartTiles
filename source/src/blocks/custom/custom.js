var st = {};

var homeHtml = "snippets/home-snippet.html";
var catalog = "snippets/catigories-snippet.html";

var showLoading = function(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'/></div>";
  $(selector).html(html);
}

$('#contacts').on('click', function(e) {
showLoading('#main');
//  $.get('/snippets/contacts-snippet');
e.preventDefault();
}); // end click
$('#home').on('click', function(e) {
  showLoading('#main');
//  $.get('/snippets/contacts-snippet');
  e.preventDefault();
}); // end click
