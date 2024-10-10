// 프로그램 흐름 미리 그려보기 
// console.log(Math.floor(Math.random()*100))

// HTML 요소 JS와 연결
var _try = document.querySelector("#try")
var _btnCheck = document.querySelector("#check")
var _reset = document.querySelector("#reset")
var _display = document.querySelector("#display")
var _counter = document.querySelector("#counter")

/*
console.log(_try)
console.log(_check)
console.log(_reset)
console.log(_display)
console.log(_counter)
*/

// 이벤트 등록하기
// 확인버튼에 이벤트 등록하기
/*
_btnCheck.addEventListener("click",() => {
    var userNum = _try.value
    alert(`사용자가 입력한 수 :  ${userNum}`)
    finding()
})
*/
_btnCheck.addEventListener("click",finding)

/*
// 확인버튼 이벤트 연결하기
_btnCheck.addEventListener('click',()=> {
    var userNum = _try.value
    alert(`사용자가 입력한 수 : ${userNum}`)
})
*/
/*
//숫자 입력란에서 enter키 이벤트 등록하기
_try.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        alert("키 누름")
    }
})
*/


// 숫자 입력란에서 enter 키 이벤트 등록하기
_try.addEventListener("keypress", (e)=> {
    // e: 이벤트가 발생한 객체의 정보가 전달됨.
    // 여기서는 key의 기본정보중 keycode값이 키를 구분해줌
    if(e.keyCode == 13) {
        // var userNum = _try.value
        // alert(`사용자가 입력한 숫자: ${userNum}`)
        finding()
    }
})


// 입력받은 숫자에 대한 조건 처리하는 함수
function finding() {
    var userNum = _try.value
    // alert(`사용자가 입력한 수 : ${userNum}`)

    if(userNum >= 1 && userNum <= 100) {
        
    } else {
        alert("1과 100사이의 숫자를 입력하세요.")
    }
  }


// 다시 버튼 클릭시 수행할 함수정의
function fun_reset() {
    window.location.reload()
    // alert("reset 버튼 클릭")
}

// 컴퓨터 숫자 발생 1~100 무작위
// var rnd = Math.ceil(Math.random()*100)+1
var rnd = Math.floor(Math.random()*100)+1
console.log("컴퓨터가 발생한 숫자 : ",rnd)