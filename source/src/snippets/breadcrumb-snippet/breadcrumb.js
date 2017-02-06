// WARNING! Возможно, в некоторых вызовах этой функции
// categoryName и firmName, которые передадуться в аргументы функции
// будут изменены местами...
var breadcrumbTest = buildBreadCrumbViewHTML("category", "", "", "firm");
console.log(breadcrumbTest);
function buildBreadCrumbViewHTML(categoryName, firmName, collectionName, breadcrumbType) {
  // Получаем шаблон.
  smartApp.getBreadcrumb().done(function(breadcrumbHtml) {
    var finalHTML = "";
    var html = breadcrumbHtml;
    // Пустые элементы навигационной цепочки.
    var bcElemActive = '<li class="breadcrumb__breadcrumbItem breadcrumbItem active">';
    var bcElem = '<li class="breadcrumb__breadcrumbItem breadcrumbItem">';
    var bcRefer = '<a class="breadcrumbItem__refer" href="#">'; 
    
    // Готовые элементы навигационной цепочка 
    var bcCategory = bcElemActive + categoryName + '</li>';
    var bcCategoryFirm = bcElem + bcRefer + categoryName + '</a>' +
        bcElemActive + firmName + '</li>';
    var bcCategoryFirmCollection = bcElem + bcRefer + categoryName + '</a>' +
        bcElem + bcRefer + firmName + '</a>' +
        bcElemActive + collectionName + '</li>';
    // ЭТО не работет, создавай отдельны запрос с отдельным шаблоном!
    // Проверяем стили.
    if (breadcrumbType == "firm") {
      // Преобразовываем в DOM и меняем класс.
      var parseDOM = document.createElement('div');
      var $parseDOM = $(parseDOM);
      var $breadcrumb = $parseDOM.find('#breadcrumb');
      $parseDOM.html(html)
        .find('#breadcrumb')
        .addClass('breadcrumb-firm');
      
      console.log($breadcrumb);
      
      if (firmName === "") {
        var elem = $breadcrumb.append(bcCategory);
        finalHTML = elem;
        console.log(finalHTML);
        return finalHTML;
      } else if (collectionName === "") {
        var elem = $breadcrumb.append(bcCategoryFirm);
        
        finalHTML = elem;
        return finalHTML;
      } else {
         var elem = $breadcrumb.append(bcCategoryFirmCollection);
        finalHTML = elem;
        
        return finalHTML;
      }

    }
    // Проверяем аргументы и возвращаем скомпанованную строку.
    if (firmName === "") {
      html += bcCategory;
      finalHTML += html;
      
      console.log(finalHTML);
      return finalHTML;
    } else if (collectionName === "") {
      html += bcCategoryFirm;
      finalHTML += html;
      
      return finalHTML;
    } else {
      html += bcCategoryFirmCollection;
      finalHTML += html;
      
      return finalHTML;
    }
  });
}
// Используй силу, ЛЮК CREATE elem
