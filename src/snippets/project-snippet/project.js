$(document)
  .on('mouseover', '.listWorks__item', function() {
    if (!Modernizr.csstransitions) {
      $(this)
        .find('.projectBody__description')
        .stop()
        .animate({ 
          width: "50%",
          color: '#76bdff',
          padding: '3%'
      }, 1000);
    }
  })
  .on('mouseout', '.listWorks__item', function() {
    if (!Modernizr.csstransitions) {
      $(this)
        .find('.projectBody__description')
        .stop()
        .animate({
          width: 0,
          color: 'transparent',
          padding: 0
        }, 1000);
    }
  });