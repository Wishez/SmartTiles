// WARNING! Возможно, в некоторых вызовах этой функции
// categoryName и firmName, которые передадуться в аргументы функции
// будут изменены местами...
//var breadcrumbTest = buildBreadcrumbViewHTML("category", "firm", "col", false);

function buildBreadcrumbViewHTML(categoryName, firmName, collectionName, breadcrumbType) {
    var finalHTML = "";
    var html = "";
    
    // Шаблоны элементов нав. цепочки.
    var bcElemActive = '<li class="breadcrumb__breadcrumbItem breadcrumbItem active">';
    var bcElem = '<li data-cat="" data-firm="" class="breadcrumb__breadcrumbItem breadcrumbItem"';
    var bcRefer = '<a class="breadcrumbItem__refer" href="#">'; 
    //Индификаторы навигационных элементов.
    var idBcCategory = 'id="bcCategory">';
    var idBcFirm = 'id=bcFirm>';
    // Готовые элементы навигационной цепочка 
    var bcCategory = bcElemActive + categoryName + '</li>';
    var bcCategoryFirm = bcElem + idBcCategory + bcRefer + categoryName +
        '</a>' + bcElemActive + firmName + '</li>';
    var bcCategoryFirmCollection = bcElem + idBcCategory + bcRefer + categoryName + '</a>' + 
      bcElem + idBcFirm + bcRefer + firmName + '</a>' +
      bcElemActive + collectionName + '</li>';
  
  // Есть навигационная цепочка с бардовым цветом,
  // А есть с бежевым. Проверяем на желание сделать
  // Бардовою цепочку.
  if (breadcrumbType == "firm") {
    smartApp.getBreadcrumbFirm().done(function(breadcrumbHtml) {
      html = breadcrumbHtml;
      
      if (firmName === "") {
        html += bcCategory;
        finalHTML = html;

        return finalHTML;
      } else if (collectionName === "") {
        html += bcCategoryFirm;
        finalHTML = html;
        
        return finalHTML;
      } else {
        html += bcCategoryFirmCollection;
        finalHTML = html;
        
        return finalHTML;
      }
    });
  } else {    
    smartApp.getBreadcrumb().done(function(breadcrumbHtml) {
      html = breadcrumbHtml;

      // Проверяем аргументы и возвращаем скомпанованную строку.
      if (firmName === "") {
        html += bcCategory;
        finalHTML = html;

        return finalHTML;
      } else if (collectionName === "") {
        html += bcCategoryFirm;
        finalHTML = html;
        
        return finalHTML;
      } else {
        html += bcCategoryFirmCollection;
        finalHTML = html;
        
        return finalHTML;
      }
    });
  }                        
}
// Используй силу, ЛЮК!