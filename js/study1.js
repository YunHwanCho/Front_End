var count = 5;

      setInterval(function () {
        count -= 1;
        if (count > 0) {
          document.querySelector("#time").innerHTML = count;
        } else {
          $("alert").hide();
        }
      }, 1000);

      








function 알림(parameters) {
  document.getElementById("alert").style.display = parameters;
}

$('.slide-2').on('click',function(){
  $('.slide-container').css({transform :'translateX(-100vw)'});
})

$('.slide-3').on('click',function(){
  $('.slide-container').css({transform :'translateX(-200vw)'});
})

$('.slide-1').on('click',function(){
  $('.slide-container').css({transform :'translateX(0vw)'});
})

var now = 1;

$('.next').on('click',function(){
  if(now == 1){
    $('.slide-container').css({transform :'translateX(-100vw)'});
    now = 2;
  }else if(now ==2){
    $('.slide-container').css({transform :'translateX(-200vw)'});
    now = 3;
  }else{
    $('.slide-container').css({transform :'translateX(0vw)'});
    now = 1;
  }

})




var cnt = 0;

$(".badge").on("click", function () {
  cnt += 1;
  if (cnt % 2 == 0) {
    $(".badge").html("white");
    $(".white").css({ background: "white", color: "black" });
    

  } else {
    $(".badge").html("Dark");
    $(".white").css({ background: "black", color: "white" });
  } 
});

function 아이디() {
  document.getElementById("title").innerHTML = "아이디 입력";

  document.getElementById("alert").style.display = "block";
}

/*var, let, const   var는 변수를 계속 변경이 가능하지만 let은 재선언이 불가능 const는 재선언 재할당 둘다 안됨(상수)*/
var 이름 = "kim";

let age = "24";
const region = "서울";

var input = 60000;
var money = 0;
if (input >= 50000) {
  money = input * 1.2 * 1.2;
} else {
  plus = money + money * 0.15 * 0.2;
  money = money + plus;
}

console.log(money);

$('form').on('submit', function(){
  var 입력한값 = document.getElementById('email').value;
  if(document.getElementById('email').value == ''){
    alert('다시 입력하세요');

  }
  if(/\S+@\S+.\S+/.test(입력한값)){
    alert('이메일 형식으로 입력')

  }
  });




  window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
      $('navbar-brand').css('font-size', '20px');
    
  
    }
  
  });


  $('.lorem').on('scroll', function(){
    var 스크롤양  = $('.lorem').scrollTop;
    var 실제높이  = $('.lorem').scrollHeight;
    var 높이 = $('.lorem').clientHeight;
    if(스크롤양 + 높이 < 실제높이){
      alert('그만 내리셈')
    }
  })


