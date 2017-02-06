function buildHeadingViewHTML(headingType, headingName) {
  if (headingType == "firm") {
    smartApp.getHeadingFirm().done(function(headingFirm) {
      var html = headingFirm;  
      html = insertProperty(html, "name", headingName);
      // При добавление класса с помощью addClass функции jQuery
      // html строка конвертируется в объект
      // МОЙ МОЗГ КИПИТ!
      
      return html;
    });
 }
  smartApp.getHeading().done(function(heading) {  
    var html = heading;
    // Есть три стиля, бардовый - firm, бежевый - обычный 
    // И чёрного отенка - for, который, возможно, не понадобится
    html = insertProperty(html, "name", headingName);
    // Возвращаем заголовок с изменённым именем
    return html;
  });
}