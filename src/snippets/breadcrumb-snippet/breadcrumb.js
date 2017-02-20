function buildBreadcrumbViewHTML(styleType, begining, firstName, secondName, thirdName) {    
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
    // Элементы для последовательности 'categories'.
    var bcCategory = bcElemActive + idBcCategory + firstName + '</li></ol>';
    var bcCategoryFirm = bcElem + idBcCategory + bcRefer + firstName +
        '</a>' + bcElemActive + idBcFirm + secondName + '</li></ol>';
    var bcCategoryFirmCollection = bcElem + idBcCategory + bcRefer + firstName + '</a></li>' + 
      bcElem + idBcFirm + bcRefer + secondName + '</a></li>' +
      bcElemActive + '>' + thirdName + '</li></ol>';
    // Элементы для последовательности 'firms'.
    var bcFirm = bcElemActive + idBcFirm + firstName + '</li></ol>';
    var bcFirmCategory = bcElem + idBcFirm  + bcRefer + firstName +
      '</a>' + bcElemActive + idBcCategory + secondName + '</li></ol>';
    var bcFirmCategoryCollection = bcElem + idBcFirm + bcRefer + firstName + '</a></li>' + 
      bcElem + idBcCategory + bcRefer + secondName + '</a></li>' +
      bcElemActive + '>' + thirdName + '</li></ol>';
  
    var finalHTML = ""; 
    
    // В соответсвие со стилем.
    if(styleType == "firm") {
      finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' + homeAndCatalogBC;
    } else {
      finalHTML =  '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' + homeAndCatalogBC;
    }
  
  
    // Стороим навигационную цепочку в указанной последовательности.
    switch (begining) {
      case 'categories': 
        if (secondName === "") {    
          finalHTML += bcCategory;
        
          return finalHTML;
        } else if (thirdName === "") {
          finalHTML += bcCategoryFirm;
      
          return finalHTML;
        } else {
          finalHTML += bcCategoryFirmCollection;
      
          return finalHTML;
        }   
        break;
      case 'firms': 
        if (secondName === "") {    
          finalHTML += bcFirm;
        
          return finalHTML;
        } else if (thirdName === "") {
          finalHTML += bcFirmCategory;
      
          return finalHTML;
        } else {
          finalHTML += bcFirmCategoryCollection;
      
          return finalHTML;
        }   
        break;
    }
}                        
// Используй силу, ЛЮК!
$(document).on('click', '#bcCategory a', function() {
  var backToLastCategory = st.buildHomeAndCatalogCategory;
  
  backToLastCategory( st.breadcrumb.category.short_name );
  
  return false;
});

$(document).on('click', '#bcFirm a', function() {
  var firm = st.breadcrumb.firm.short_name,
      secondName = st.breadcrumb.firm.name;
  
  st.buildAndShowFirmHtml(firm, secondName);
  
  return false;
});