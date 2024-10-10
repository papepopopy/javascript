// const num = document.getElementsByTagName(".box").length
// console.log(num)

// DOM 액세스 타이밍 처리 실행
// DOMContentLoaded ; 페이지가 표시되는 시점
// "load" : 페이지 모든 리소스(사진, 사운드, 동영상등)로딩이 된 후 발생

window.addEventListener("DOMContentLoaded", () => {
    const boxNum = document.querySelectorAll(".container .box").length
    console.log(`.box 요소의 개수는 ${boxNum}입니다.`)
})

/*
const boxNum = document.querySelectorAll(".container .box").length
console.log(`.box 요소의 개수는 ${boxNum}입니다.`)
*/