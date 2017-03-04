$st.setPolifillForPlaceholder();

$('.searchForm__btnSearch').hover( function() {
  if(!Modernizr.csstransitions) {
      $(this).stop().animate({
        backgroundColor : '#74ff86'
      }, 500);
   }
 },
  function() {
      if(!Modernizr.csstransitions) {
        $(this).stop().animate({
          backgroundColor : '#76bdff'
      }, 500);
  }
});// end hover

$('#nav li').mouseover( function() {
  if(!Modernizr.csstransitions) {
      $(this).stop().animate({
        backgroundColor: "#dfa76e"
      }, 500);
   }
 })
  .mouseout( function() {
      if(!Modernizr.csstransitions) {
        $(this).stop().animate({
          backgroundColor: 'transparent'
        }, 500);
      }
});
  
