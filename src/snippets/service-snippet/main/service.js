st.showServiceHTML = function() {
  smartApp.getService().done(function( serviceHtml ) {
    st.select.$main.html( serviceHtml );
  });// end smartApp.getService
};// end st.showServiceHTML