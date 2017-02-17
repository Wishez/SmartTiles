$('#logo').on('click', function(e) {
  showLoading('#main');
  st.loadHomeContent();
  e.preventDefault();
}); // end click

$("#navbarToggle").click(function (event) {
    $(event.target).focus();
});

$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable").collapse('hide');
    }
});