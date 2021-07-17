
$(document).ready(function(){

  function addZero(number){
    return number.toString().length == 1 ? "0" +  number.toString() :  number;
  }

  let intrval = null;

  $('#strtBtn').click(function(){

    if($(this).text() === "Pause"){
      $(this).text("Resume");
      clearInterval(intrval);
      return;
    }


    $(this).text("Pause");
    $('#stpBtn').show();

    intrval = setInterval(function(){
      let hour = Number($('#hour').text());
      let mint = Number($('#mint').text());
      let second = Number($('#second').text());
      let mili = Number($('#mili').text());

      if( mili >= 9){
        mili = 0;

        if(second >= 59){
          second = 0

          if( mint >= 59){
            mint = 0;
            hour += 1;
          }else{
            mint += 1;
          }
          
        }else{
          second += 1;
        }
       
      }else{
        mili += 1;
      }

      $('#mili').text(addZero(mili));
      $('#second').text(addZero(second));
      $('#mint').text(addZero(mint));
      $('#hour').text(addZero(hour));

    }, 100)

  });

  $('#stpBtn').click(function(){
    $('#strtBtn').text("Start");
    $(this).toggle();

    let hour = Number($('#hour').text());
    let mint = Number($('#mint').text());
    let second = Number($('#second').text());
    let mili = Number($('#mili').text());

    $('#output').text(`You Take : ${hour} H, ${mint} M, ${second} S, ${mili * 100} ms`);

    clearInterval(intrval);

    $('#mili').text("00");
    $('#second').text("00");
    $('#mint').text("00");
    $('#hour').text("00");

  });

});