// Используй силу, ЛЮК!
$(document).on('click', '#firm #bcCategory a, #collectionFirm  #bcCategory a', function() {
  var backToLastCategory = st.buildHomeAndCatalogCategory;
  
  backToLastCategory();
  
  return false;
});

$(document).on('click', '#collectionFirm #bcFirm a', function() {
  var backToLastFirm = st.buildAndShowFirmHTML;
  
  backToLastFirm();
  
  return false;
});

$(document).on('click', '#collectionCategoryFirm #bcFirm a, #categoryCollections #bcFirm a', function() {
  var backToLastFirm = st.buildCatalogFirmHTML;
  
  backToLastFirm();
  
  return false;
});

$(document).on('click', '#collectionCategoryFirm #bcCategory a', function() {
  var backToLastCategory = st.buildCategoryOfFirmHTML;
  
  backToLastCategory();
  
  return false;
});