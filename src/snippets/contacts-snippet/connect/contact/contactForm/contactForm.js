function settingUpForm() {
  st.select.form.$labels = $('.controller__label');
  st.select.form.$inputs = $('#contact');
  
  console.log(st.select.form.$inputs);
//  st.select.form.$labels.hide();
}

$('#contact').on('change', '.controller', function(e) {
   var $this = $(this);
//   if (e.target.val().length != 0) {
  console.log(st.select.form.$inputs);
     $('.controller__label').slideUp();
//   }
});
$("body")
 .on("input propertychange", ".contactForm__controller" ,function(e) {
  $(this).toggleClass(".contactForm__controller-filled",!! $(e.target).val());})
 .on("focus", ".contactForm__controller",function() {
  $(this).addClass(".contactForm__controller-focused");})
 .on("blur", ".contactForm__controller",function() {
  $(this).removeClass(".contactForm__controller-focused");});