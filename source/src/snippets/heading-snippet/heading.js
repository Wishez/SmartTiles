function buildHeadingViewHTML(string, headingType, headingName) {
  var finalHTML = "";
  
  string = insertProperty(string, "name", headingName);
  finalHTML += string
  
  return finalHTML;
}
//var result = buildHeadingViewHTML("<h2 class='heading'>{{name}}</h2>", false, "Hello, I'm result!");
//console.log(result);