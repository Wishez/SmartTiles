// WARNING! Возможно, в некоторых вызовах этой функции
// categoryName и firmName, которые передадуться в аргументы функции
// будут изменены местами...
// В строку передаётся фрагмент breadcrumb с
// основными ссылками - Гланая и Каталог. 
function buildBreadcrumbViewHTML(string, styleType,categoryName, firmName, collectionName) {
    var finalHTML =  '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb">' + string;
    if(styleType === "firm") {
      finalHTML = '<ol id="breadcrumb" class="mainContent__breadcrumb breadcrumb breadcrumb-firm">' + string;
    }
    
    // Шаблоны элементов нав. цепочки.
    var bcElemActive = '<li class="breadcrumb__breadcrumbItem breadcrumbItem active" ';
    var bcElem = '<li data-cat="" data-firm="" class="breadcrumb__breadcrumbItem breadcrumbItem" ';
    var bcRefer = '<a class="breadcrumbItem__refer" href="#">'; 
    //Индификаторы навигационных элементов.
    var idBcCategory = 'id="bcCategory">';
    var idBcFirm = 'id=bcFirm>';
    // Готовые элементы навигационной цепочка 
    var bcCategory = bcElemActive + idBcCategory + categoryName + '</li></ol>';
    var bcCategoryFirm = bcElem + idBcCategory + bcRefer + categoryName +
        '</a>' + bcElemActive + idBcFirm + firmName + '</li></ol>';
    var bcCategoryFirmCollection = bcElem + idBcCategory + bcRefer + categoryName + '</a>' + 
      bcElem + idBcFirm + bcRefer + firmName + '</a>' +
      bcElemActive + '>' + collectionName + '</li></ol>';

    if (firmName === "") {    
      finalHTML += bcCategory;
        
      return finalHTML;
    } else if (collectionName === "") {
      finalHTML += bcCategoryFirm;
      
      return finalHTML;
    } else {
      finalHTML = bcCategoryFirmCollection;
      
      return finalHTML;
    }
}                        
// Используй силу, ЛЮК!