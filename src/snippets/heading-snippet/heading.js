function buildHeadingViewHTML(styleType, headingName) {
  var finalHTML = '<h2 class="heading">';

  if (styleType === "firm") {
    finalHTML = '<h2 class="heading heading-firm">';
  }
  
  finalHTML += headingName + '</h2>';
  
  return finalHTML;
}