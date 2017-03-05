$(document).on('click', '#contentProjects a', function() {
  var $this = $(this);
  // Кэшируем нужные данные.
  $st.breadcrumb.project.name = $this.find('.project__name').text();
  $st.breadcrumb.project.short_name = $this.attr('data-project');
  $st.breadcrumb.project.amountImgs = $this.attr('data-amountImgs');
  
  $st.showLoading($st.ids.main);
  
  $st.showProjectHTML();
  
  return false;
});