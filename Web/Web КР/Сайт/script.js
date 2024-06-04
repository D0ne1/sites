$(document).ready(function(){

mobile();

  $(window).scroll(function(){
    if($(this).scrollTop() >= 250){
      $('.top-btn').css('opacity','1');
      $('.top-btn').css('visibility','visible')
    } else {
      $('.top-btn').css('opacity','0');
      $('.top-btn').css('visibility','hidden');
    }
  });

  $('.top-btn').click(function(){
    $('body,html').animate({scrollTop: 0}, 700);
  });

  $(document).resize(function(){
    mobile();
  })

});

  function mobile(){
    console.log('test')
    if(window.innerWidth < 600){
      $('mobile').css('visibility','visible');
    } else {
      $('mobile').css('visibility','hidden')
    }
  }

window.onload = function(){
  $('preloader').css('opacity','0')
  $('preloader').css('visibility','hidden')
}

$(document).ready(function(){
  $('.imgs_1_1').hover(function(){
    console.log('test')
  })
  $('.imgs_1_1').click(function(){
    window.location.replace('http://google.com')
  })
});
