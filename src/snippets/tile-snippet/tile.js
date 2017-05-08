$(document).on('mouseover', '.tile', function() {
  if (!Modernizr.csstransitions) {
    $(this)
        .find('.tile__description, .sample__description')
        .stop()
        .animate({
          height: "70%",
          borderBottomWidth: 2,
          boxShadow: '0 5px 20px rgba(0, 0, 0, .5)',
          padding: '5%'
        }, 1000);
  }
});

$(document).on('mouseout', '.tile', function() {
  if (!Modernizr.csstransitions) {
    $(this)
        .find('.tile__description, .sample__description')
        .stop()
        .animate({
          height: 0,
          borderBottomWidth: 0,
          boxShadow: 0,
          padding: 0
        }, 1000);
  }
});