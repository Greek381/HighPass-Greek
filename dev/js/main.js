ymaps.ready(init);
function init(){
   var myMap = new ymaps.Map("map", {
  center: [55.76771858792652,37.64136415543363],
  zoom: 14
   });
   var myPlacemark = new ymaps.Placemark([55.76771858792652,37.64136415543363], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/marker.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-7, -42]

    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
}

//закрытие всплывающего окна на карте
// $(document).ready(function() {
//   $('#btn__close').click( function(){
//   $('contacts-content-address').animate({opacity: 0}, 198,
//     function(){
//       $(this).css('display', 'none');
//   });
// });
// });

//валидация email
$(function() {
  $(".about-form__btn").on("click", validate);
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  function sendForm() {
    $(".error").text("Email отправлен").fadeIn();
  }
  function validate() {
    var email = $(".about-form-input").val();
    var $error = $(".error");
    $error.text("");

    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text("Недопустимый формат");
    }
    return false;
  }
});

//всплывашка на карте
$('.contacts-content-address').on('click', function(event) {
  event.preventDefault;
  $(this).toggleClass('contacts-content-address-active');
});
