

$(function(){


//Placeholder

var img = $('img'),
    preloader = $('.loaders'),
    loadImg = 0;

console.log(img.length)

for (var i = 0; i < img.length; i++) {
  img_copy = new Image();
  img_copy.src = img[i].src;
  img_copy.onload = load_img();
  img_copy.error = load_img();
}

function load_img(){
  loadImg++;
  if (loadImg == img.length){
    setTimeout(hidePreloader,1000)
  }
}

function hidePreloader(){
  $('.loaders').fadeOut(1000);
}



//////////////////////////////////////
//         Login/Register           //
//////////////////////////////////////


  //Tabs
    $('.tab').click(function(){
      var data = $(this).attr('data-tab');

      $('.label').removeClass('valid invalid');
      $('.tab-container').fadeOut(0);
      $('.tab-container input').focusout().val('');
      $('#'+data+'').fadeIn(200);

      $('.tab').removeClass('active');
      $(this).addClass('active')
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

  //Form image change

  $('.form__button').click(function(){
    var inputLogin = $(this).parent().find('input[type="text"]');
    var inputPass = $(this).parent().find('input[type="password"]');

    //Valid login
    if (inputLogin.val().length == 0){
      $('.label--name').removeClass('valid');
      $('.label--name').addClass('invalid');
    }else {
      $('.label--name').removeClass('invalid');
      $('.label--name').addClass('valid');
    }

    //Valid pass
    if (inputPass.val().length == 0){
      $('.label--pass').removeClass('valid');
      $('.label--pass').addClass('invalid');
    }else {
      $('.label--pass').removeClass('invalid');
      $('.label--pass').addClass('valid');
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

  $('form *').removeClass('active valid invalid')
  $('input').val('');

})






})//end ready function
