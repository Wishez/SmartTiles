/**********

  THIRD PARTY

***********/
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery.easing/js/jquery.easing.min.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js
//= ../../bower_components/slick-carousel/slick/slick.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../bower_components/mailcheck/src/mailcheck.min.js
/**********

  CUSTOM

***********/
(function(global) {
 //= ../blocks/custom/custom.js
 $(function() {
  //= ../blocks/header/header.js

  //= ../snippets/home-snippet/main/main.js
  //= ../snippets/catalog-snippet/main/main.js
  //= ../snippets/category-snippet/main/category.js
  //= ../snippets/contacts-snippet/connect/connect.js
  //= ../snippets/firm-snippet/main/firm.js
  //= ../snippets/collection-snippet/main/collection.js
  //= ../snippets/breadcrumb-snippet/breadcrumb.js
  //= ../snippets/heading-snippet/heading.js
  //= ../snippets/tile-snippet/tile.js
  //= ../snippets/sample-snippet/sample.js
  });//end ready
  
  global.$st = st; 
})(window);