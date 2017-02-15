$(document)
  .on('input propertychange', '.contactForm__controller', function(e) {
    $(this).toggleClass('contactForm__controller-filled', !! $(e.target).val()); 
  })
  .on('focus', '.contactForm__controller', function() {
    $(this).addClass('contactForm__controller-focused');
  })
  .on('blur', '.contactForm__controller', function() {
    $(this).removeClass('contactForm__controller-focused');
  });

//$('#phoneNumber').mask('+0(000)-00-00');