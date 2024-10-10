/*

// 문자열 길이
console.log("홍길동은 부산에 있습니다.".length)
console.log("홍길동은 부산에 있습니다. " .length)
*/

// textarea 영역
let textarea = document.querySelector("textarea")
let str_len =  document.querySelector(".str_len")

// 이벤트 핸들러 구성
// 텍스트를 입력할 때 마다 함수를 수행 : onKeyUp()
textarea.addEventListener("keyup", onKeyUp) //이벤트 중료 , 수행

function onKeyUp() {

    console.log("aaaaa")
    const inputText = textarea.value
    str_len.innerText = inputText.length
}
