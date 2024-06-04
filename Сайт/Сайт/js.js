$(document).ready(function(){
  var now = new Date(),
    clock = [];

  clock[0] = now.getHours()
  clock[1] = now.getMinutes()
  clock[2] = now.getSeconds()

  setInterval(function(){
    if(clock[2] == 59){
      clock[2] = 0;
      if (clock[1] == 59) {
        clock[1] = 0;
        if (clock[2] == 24) {
          clock[0] = 0;
          clock[1] = 0;
          clock[2] = 0;
        }
        clock[0]++;
      }
      clock[1]++;
    }
    clock[2]++;
    $('#clock').text('Время: ' + clock[0] + ':' + clock[1] + ':' + clock[2])
  }, 1000);
  });

function save(){

  var name = $('#name').val(),
      name2 = $('#name2').val(),
      date = $('#date').val(),
      login = $('#login').val(),
      error = [],
      patt = new RegExp(/[А-яёЁ]/),
      patt1 = new RegExp(/[A-z0-9]/),
      pattD = new RegExp(/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/);

  if(!(name.length > 1 && name.length < 32 && patt.test(name))) {
    error.push('Ошибка в имени');
  }
  if(!(name2.length > 1 && name2.length < 32 && patt.test(name))) {
    error.push('Ошибка в фамилии');
  }
  if(!(date.length > 1 && date.length < 32 && pattD.test(date))){
    error.push('Ошибка в дате');
  }
  if(!(login.length > 1 && login.length < 16 && patt1.test(login))) {
    error.push('Ошибка в логине');
  }
  console.log(date)
  if (error.length == 0) {
    console.log('Если бы у меня был сервер, я бы работал')
    $.cookie('name', name, {expires: 99999});
    $.cookie('name2', name2, {expires: 99999});
    $.cookie('date', date, {expires: 99999});
    $.cookie('login', login, {expires: 99999});
  } else {
    for(let i = 0; i < error.length; i++){
      console.error(error[i]);
    }
  }
}
