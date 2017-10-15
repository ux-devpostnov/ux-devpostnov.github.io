

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

    //Valid username
    if (inputLogin.val().length == 0){
      $('.label__icon--name').removeClass('valid');
      $('.label__icon--name').addClass('invalid');
    }else {
      $('.label__icon--name').removeClass('invalid');
      $('.label__icon--name').addClass('valid');
    }

    //Valid pass
    if (inputPass.val().length == 0){
      $('.label__icon--pass').removeClass('valid');
      $('.label__icon--pass').addClass('invalid');
    }else {
      $('.label__icon--pass').removeClass('invalid');
      $('.label__icon--pass').addClass('valid');
    }


    //Valid login and pass
    if (inputPass.val().length != 0 && inputLogin.val().length != 0) {
      $('.login-page').fadeOut(700);
      $('.thanks').fadeIn(700);
    }

  })

//thanks return
$('.thanks__button').click(function(){
  $('.thanks').fadeOut(700);
  $('.login-page').fadeIn(700);

  $('.label__icon').removeClass('active valid invalid')
  $('.login input').val('').focusout();

})






})//end ready function
