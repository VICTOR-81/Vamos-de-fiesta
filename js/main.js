$(function(){

  $('.popup-with-form').magnificPopup({
    items: {
           src: '.popup',
           type: 'inline'
        }
  });


  $('.header__btn-contacts').on('click', function(){
    $('.header__top-contacts').slideToggle();
  });
});