function 알림(parameters){
    document.getElementById('alert').style.display = parameters;
}

var cnt = 0;

      $(".badge").on("click", function () {
        cnt += 1;
        if (cnt % 2 == 0) {
          $(".badge").html("Dark");
          $(".dark").css({'background': 'white','color': 'black'});
        } else {
          $(".badge").html("Light");
          
        }
      });

      function 아이디() {
        document.getElementById("title").innerHTML = "아이디 입력";

        document.getElementById("alert").style.display = "block";
      }

     
      /*var, let, const   var는 변수를 계속 변경이 가능하지만 let은 재선언이 불가능 const는 재선언 재할당 둘다 안됨(상수)*/
      var 이름 = 'kim';
      let 