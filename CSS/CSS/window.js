$(document).ready(function(){

  $('#open_window').click(function(){
    $('.window').css('display','block')
    setTimeout(function(){
      $('.window').css('opacity','1')
    }, 1)
  });

  $('#close_window').click(function(){
    $('.window').css('opacity','0')
    setTimeout(function(){
      $('.window').css('display','none')
    }, 250)
  });

  $('#shadow').click(function(){
    $('.window').css('opacity','0')
    setTimeout(function(){
      $('.window').css('display','none')
    }, 250)
  });

  $('body').append("<div style='position: absolute; user-select: none; bottom: 10px; left: 0; right: 0; margin: auto; text-align: center; opacity: 0.6; font-size: 14px;'>Copyright (c) 2019 All Rights Reserved, SkillTris</div>")

});
