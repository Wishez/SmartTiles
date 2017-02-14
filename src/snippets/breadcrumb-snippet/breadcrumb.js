// WARNING! Возможно, в некоторых вызовах этой функции
// categoryName и firmName, которые передадуться в аргументы функции
// будут изменены местами...
function buildBreadcrumbViewHTML(styleType, categoryName, firmName, collectionName) {    
    // Шаблоны элементов нав. цепочки.
    var bcElemActive = '<li class="breadcrumb__breadcrumbItem breadcrumbItem active"';
    var bcElem = '<li data-cat="" data-firm="" class="breadcrumb__breadcrumbItem breadcrumbItem" ';
    var bcRefer = '<a class="breadcrumbItem__refer" href="#">'; 
    //Индификаторы навигационных элементов.
    var idBcCategory = 'id="bcCategory">';
    var idBcFirm = 'id="bcFirm">';
    var idBcHome = 'id="bcHome">';
    var idBcCatalog = 'id="bcCatalog">';
  
  
    // Готовые элементы навигационной цепочка 
    var homeAndCatalogBC = bcElem + idBcHome + bcRefer   + "Главная" + "</a></li>" +
      bcElem + idBcCatalog + bcRefer + "Каталог" + "</a></li>";

    var bcCategory = bcElemActive + idBcCategory + categoryName + '</li></ol>';
    var bcCategoryFirm = bcElem + idBcCategory + bcRefer + categoryName +
        '</a>' + bcElemActive + idBcFirm + firmName + '</li></ol>';
    var bcCategoryFirmCollection = bcElem + idBcCategory + bcRefer + categoryName + '</a>' + 
      bcElem + idBcFirm + bcRefer + firmName + '</a>' +
      bcElemActive + '>' + collectionName + '</li></ol>';
  
    // Стороим основу навигационной цепочки
    // в соответсвие со стилем.
    var finalHTML =  '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' + homeAndCatalogBC;
    if(styleType === "firm") {
      finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' + homeAndCatalogBC;
    }
  
    if (firmName === "") {    
      finalHTML += bcCategory;
        
      return finalHTML;
    } else if (collectionName === "") {
      finalHTML += bcCategoryFirm;
      
      return finalHTML;
    } else {
      finalHTML += bcCategoryFirmCollection;
      
      return finalHTML;
    }
}                        
// Используй силу, ЛЮК!
$(document).on('click', '#bcCategory a', function() {
  var cat = st.breadcrumb.category.short_name,
      categoryName = st.breadcrumb.category.name;
 
  st.buildAndShowCategoryHTML(cat, categoryName);
  
  return false;
});

$(document).on('click', '#bcFirm a', function() {
  var firm = st.breadcrumb.firm.short_name,
      firmName = st.breadcrumb.firm.name;
  
  st.buildAndShowFirmHtml(firm, firmName);
  
  return false;
  
});