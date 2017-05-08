// Всплывающие метки и их стили при фокусе и при заполненном поле. 
$(document)
  .on('input propertychange', '.contactForm__controller', function(e) {
    $(this).toggleClass('contactForm__controller-filled', !! $(e.target).val());
    
    var $nameInput = $('#id_name');
    var str = $nameInput.val();
  
    // Преобразуем первую букву в имени пользователя.
    str = str
           .toLowerCase()
           .split(' ')
           .map( function( word ) {
             return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
           })
           .join(' ');
  
    $nameInput.val(str);
  })
  .on('focus', '.contactForm__controller', function() {
    $(this).addClass('contactForm__controller-focused');
  })
  .on('blur', '.contactForm__controller', function() {
    $(this).removeClass('contactForm__controller-focused');
  });

var domains = ['gmail.com', 'aol.com', 'yahoo.com', 'mail.ru', 'yandex.ru', 'list.ru'];
var topLevelDomains = ["com", "net", "org", "ru", "io"];

// Хелпер для валидации введённого почтовго ящика.
$(document).on('blur', '#id_email', function() {
  $(this).mailcheck({
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    suggested: function(element, suggestion) {
      $('#helper').html('Возможно, вы имели в виду <b><i>' + suggestion.full + "</b></i>?");
    },
    empty: function(element) {
       $('#helper').html("");
    }
  });
});

$('#id_phone').mask('0 (000) 000 00 00');