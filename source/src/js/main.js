/**********

  THIRD PARTY

***********/
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery.easing/js/jquery.easing.min.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js
//= ../../bower_components/slick-carousel/slick/slick.min.js
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
  //= ../snippets/firm-snippet/main/firm.js
  //= ../snippets/collection-snippet/main/collection.js
   
  //= ../snippets/breadcrumb-snippet/breadcrumb.js
  //= ../snippets/heading-snippet/heading.js
  //= ../snippets/tile-snippet/tile.js
  //= ../snippets/sample-snippet/sample.js
  // Пока что не знаю, понадобятся ли шаблоны ниже. 
  //= ../snippets/firms-snippet/main/firms.js
  //= ../snippets/covers-snippet/main/covers.js
});//end ready
  
  global.$st = st; 
})(window);