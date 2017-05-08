//// Объект проектов.
//var projectsResource = function( params ) {
//  var that = catalogResource( params ),
//      projectTileHtml = params.projectTileHtml;
//  
//  delete params.styleStock;
//  delete params.path;
//  // У плиток проектов другой стиль.
//  delete params.tileHtml;
//  
//  that.buildTiles = function() {
//    var finalHtml = '<div class="projects__works">',
//        stock = params.stock;
//    finalHtml +=  '<div class="container">';
//    finalHtml += '<ul class="listWorks" role="group" itemscope  itemtype="https://schema.org/Thing">';
//
//    stock.map(function( item ) {
//      var html = projectTileHtml,
//          name = item.name,
//          description = item.description,
//          short_name = 'projects/' + item.short_name + '/' + item.short_name.toLowerCase() + '_1';
//      
//      html = insertProperty(html, "short_name", short_name);
//      html = insertProperty(html, "project", item.short_name);
//      html = insertProperty(html, "name", name);
//      html = insertProperty(html, "description", description);
//      html = insertProperty(html, "amountImgs", item.amount);
//
//      finalHtml += html;
//    });// end params.stock.map
//    
//    finalHtml += '</ul></div></div>';
//    
//    return finalHtml;
//  };
//  
//  return that;
//};// end projectsResource
//
//
//st.showProjectsHTML = function() {
//  smartApp.getProjects().done(function( projects ) {
//    smartApp.getTileProject().done(function( projectTileHtml ) {
//      var myProjects = projectsResource({
//        name: 'Проекты',
//        stylePlace: 'mainContent__projects projects',
//        idPlace: 'contentProjects',
//        stock: projects,
//        projectTileHtml: projectTileHtml,
//        geolocation: '#main',
//        func: 'html'
//      });
//      
//      myProjects.presentResource();
//    });
//  });
//};// end st.showProjectsHTML