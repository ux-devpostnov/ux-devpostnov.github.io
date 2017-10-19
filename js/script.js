

$(function(){


//Preloader

var img = $('img'),
    preloader = $('.loaders'),
    loadImg = 0;

for (var i = 0; i < img.length; i++) {
  img_copy = new Image();
  img_copy.src = img[i].src;
  img_copy.onload = load_img;
  img_copy.error = load_img;
}

function load_img(){
  loadImg++;
  if (loadImg == img.length){
    setTimeout(hidePreloader,1000)
  }
}

function hidePreloader(){
  preloader.fadeOut(1000);
}



//////////////////////////////////////
//         Login/Register           //
//////////////////////////////////////


  //Tabs
    $('.tab').click(function(){
      var data = $(this).attr('data-tab');

      //show and hide content
      $('.tab-container').fadeOut(0);
      $('#'+data+'').fadeIn(200);

      //Switch active class
      $('.tab').removeClass('active');
      $(this).addClass('active')


      // Unable focus input
      $('.tab-container input').focusout().val('');

      //remove all interactive animation
      $('.label__icon').removeClass('valid invalid');

    })


  //Form placeholder

  $('.form__input').focusin(function(){
    //animated label
    $(this).parent().children('.label__placeholder').addClass('active');
    $(this).parent().addClass('active');
  })

  $('.form__input').focusout(function(){
    //disable aninated if field is empty
    if ($(this).val().length == 0){
      $(this).parent().children('.label__placeholder').removeClass('active');
      $(this).parent().removeClass('active');
    }
  })



  //Enable input
  $('.label').click(function(){
    console.log()
    $(this).children('input').focus();
  })



  //Form image change dependens contains input

  $('.form__button').click(function(){
    var inputLogin = $(this).parent().find('input[type="text"]');
    var inputPass = $(this).parent().find('input[type="password"]');

    //Valid form
    if (inputPass.val() == 'admin' && inputLogin.val() == 'admin') {
      $('.label__icon--name,.label__icon--pass').addClass('valid');
      $('.login-page').fadeOut(700);
    }else{
      $('.label__icon--name,.label__icon--pass').addClass('invalid');
    }

  })


  //nav switch .active

  $('.nav__link').click(function() {
    $('.nav__link').removeClass('active');
    $(this).addClass('active');

    //switch tab-content
  });


  //menu
  $('.top-panel__icon--menu').click(function() {
    $(this).toggleClass('active');

    $('.sidebar').toggleClass('active')
    $('.content').toggleClass('move');
  });


  //hide context menu
  $(document).click(function(e) {
    if (!e.target.closest('.user-block')){
      $('.user-menu').removeClass('active')
    }else if (e.target == $('.user-block')[0] || e.target == $('.user-block__avatar')[0] || e.target == $('.top-panel__icon--arrow')[0]){
      $('.user-menu').toggleClass('active')
    }else{
      $('.user-menu').addClass('active')
    }
    e.stopPropagation();





  });





//debug

$(document).click(function(e) {
console.log(e.target)
});



})//end ready function
