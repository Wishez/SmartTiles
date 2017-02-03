$('#logo').on('click', function(e) {
  showLoading('#main');
  st.loadHomeContent();
  e.preventDefault();
}); // end click