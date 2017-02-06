function buildHeadingViewHTML(headingType, headingName) {
    smartApp.getHeading().done(function(heading) {
      var html = heading;
      console.log(typeof(html));
      
      var styleHeading = "heading-";
      var $heading = $('.heading');
      // Есть три стиля, бардовый - firm, бежевый - обычный 
      // И чёрного отенка - for, который, возможно не понадобится
      if (headingType == "firm") {
        styleHeading += headingType;
        
        html = insertProperty(html, "name", headingName);
        console.log(html);
        // При добавление класса с помощью addClass функции jQuery
        // html строка конвертируется в объект
        // МОЙ МОЗГ КИПИТ!
      
        console.log($heading);
        return html;
      } 
      html = insertProperty(html, "name", headingName);
      console.log(html);
//      // Возвращаем заголовок с именем
      return html;
    }); // Нужно получить определлёный тип заголовка
}

var headingTest = buildHeadingViewHTML("firm", "Категория");