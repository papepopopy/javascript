var count = 0; // 0
var randomNumber = Math.floor(Math.random()*100) + 1 // 1~100 랜덤한 숫자
console.log(randomNumber) //컴퓨터가 입력한 숫자

document.querySelector("#try").onkeypress = function(e) {
    console.log(e)

    if (e.keyCode == 13 || e.which == 13) { // enter 클릭 시
        finding(); // 확인 버튼 클릭!
        return false; // 다시 시도
    }
}

function finding() {
    var userNumber = document.querySelector("#try").value //try 필드이 값 = userNumber
    // console.log(userNumber)

    /*
    // if절을 이용하여 userNumber에 1 ~ 100까지의 숫자만 들어가도록 조건 적용
    if (userNumber >= 1 && userNumber <= 100) {
        console.log(userNumber);
    } else {
        alert("1과 100 사이의 숫자를 입력하세요")
    }
    */
   
    if (userNumber >= 1 && userNumber <= 100) {
        if(randomNumber > userNumber){
            // 컴퓨터 숫자가 더 클 경우 UP으로 표시
            console.log("UP")
            document.querySelector("#display").innerHTML = "UP"
            document.querySelector("#try").value = ""; //입력되어진 숫자를 없앰
        } else if (randomNumber < userNumber) {
            // 사용자의 숫자가 더 클경우 DOWN으로 표시
            console.log("DOWN")
            document.querySelector("#display").innerHTML = "DOWN"
            document.querySelector("#try").value = ""; //입력되어진 숫자를 없앰
        }
        else {
            // 숫자가 일치하는 경우
            console.log("맞췄습니다.")
            document.querySelector("#display").innerHTML ="<h1>맞췄습니다.</h1>"
        }
        count++; // 휫수가 추가됨
        document.querySelector("#counter").innerHTML ="시도 횟수 : " + count +"회";

    } else {
        alert("1과 100 사이의 숫자를 입력하세요")
    }
}