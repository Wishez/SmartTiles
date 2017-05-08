//// Объект одного проекта.
//var singleProject = function( params ) {
//  /* params  
//     styleName: string(otional),
//     stylesPlace: string(classes),
//     idPlace: string(id),
//     geolocation: string(selector)
// */
//  
//  var that = singleResource( params ),
//      // Колличество изображений в проекте.
//      amount = st.breadcrumb.project.amountImgs,
//      // Короткое имя проекта.
//      short_name = st.breadcrumb.project.short_name;
//  // То-самое-имя, которое передаётся функции,
//  // что отвечает за заголовок.
//  that._name = st.breadcrumb.project.name;
//  // Проект многого не наследует.
//  delete that.buildTiles;
//  delete params.tileHtml;
//  delete params.stock;
//  delete params.styleStock;
//  delete that._breadcrumbElements.ids;
//  delete that._breadcrumbElements.solidElements;
//  delete that._breadcrumbElements.listFirm;
//  delete that._categoryName;
//  delete that._firmName;
//  delete that._collectionName;
//  
//  
//  that._buildBreadcrumb = function() {
//    var finalHTML = that._breadcrumbElements.list +
//      that._breadcrumbElements.bcElem + 'id="bcProjects">' + that._breadcrumbElements.bcRefer + 'Проекты</a><meta itemprop="position" content="1"></li>' +
//      that._breadcrumbElements.bcElemActive + '>' +
//      '<span itemprop="name">' + that._name + '</span>' +
//      '<meta itemprop="position" content="2" /></li></ol>';
//    
//    return finalHTML;          
//  };
//  // Создаю новую функцию, которая принимает из параметров
//  // короткое имя проекта и колличество картинок в нём,
//  // после чего создаёт слайдер и имя этому всему...
//  var buildSlider = function() {
//     var finalHTML = '<div class="singleProject__slider slider" role="region" itemscope itemtype="https://schema.org/Thing">' +
//         '<ul class="slider__slides">',
//         i;
//
//    for (i = 1; i <= amount; i++) {
//      // URL к изображению проекта строится из
//      // короткого имя проекта в нижнем регистре и 
//      // добавлением порядкового номера через нижнее подчёркивание.
//      var html = '<figure class="slides__item" style=" background-image:url(/media/smarttiles/img/projects/' + 
//      short_name + '/' + short_name.toLowerCase()  + '_' + i + '.jpg);"></figure>';
//      
//      finalHTML += html; 
//    }
//    
//    finalHTML += '</ul></div>'
//
//    return finalHTML;
//    
//  };
//  
//  that.presentResource = function() {
//    var breadcrumb = that._buildBreadcrumb(), 
//        heading = that.buildHeading(),
//        slider = buildSlider(),
//        
//        finalHTML = that.position +
//        '<div class="container">' +
//        breadcrumb + 
//        heading + '<div class="clearfix"></div>' +
//        slider + 
//        that._myVisitCard + 
//        '</div>' + that.positionCloseTag;
//    
//        
//    $(params.geolocation).html(finalHTML);
//  };
//  
//  return that;
//};
//
//st.showProjectHTML = function() {
//  var project = singleProject({
//     styleName: 'singleProject__heading',
//     stylesPlace: 'mainContent__singleProject singleProject',
//     idPlace: 'singlProject',
//     geolocation: '#main'
//  });
//  
//  project.presentResource();
//  
//  $('.slider__slides').slick({
//    dots: true,
//    autoplay: true,
//    autoplaySpeed: 2500,
//    responsive: [{
//      breakpoint: 768,
//      settings: {
//        arrows: false
//      }  
//    }]
//  });
//};