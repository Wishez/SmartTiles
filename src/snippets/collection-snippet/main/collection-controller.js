// Инициализация слайдера
$('#collectionSamples').slick({
  dots: true,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }  
    }
  ] 
}); // end slick

// Добавляем увеличение картинок.
$('.collectionSlider__listTiles').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  }
});