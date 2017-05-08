//$st.showLoading('body');
//$st.loadHomeContent();

$('.exclusive__slides').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }  
      }
    ]
});
//var images = $st.preloadImages();
