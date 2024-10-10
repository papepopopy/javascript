// 문자열 다루기: 위치 지정하여 선택하기

/*
console.log("javascript".slice(0,4)) //0 ~ n-1
console.log("javascript".slice(0))

console.log("0123450".slice(3,-1)) // 345
*/

/*
console.log("javascript".substring(8))
*/
/*
console.log("0123450".substring(1,5)) //1234
console.log("0123450".substring(3,-1)) //012

console.log("0123450".substr(4,6)) //(시작번호, 갯수)
*/
// 문자열 변환
/*
console.log("image1.png".replace("1.png","2.png"))

const inputText = "홍\n길동123456789"
// const inputText = "홍길동\n줄 바꾸는 기능"
// const inputText = "홍길동\ttep키 기능"
// const inputText = "홍길동 \\ \\ \\능"
// const inputText = "홍길동 \"능"

// console.log(inputText)
console.log(inputText.replace("\n" ,""))
var name = "1 2 3 4 5 6"
// var name1 = name.replace(' ',"")
// var name2 = name.replace(' ',",")
var name1 = name.replaceAll(' ',"")
var name2 = name.replaceAll(' ',",")
console.log(name)
console.log(name1)
console.log(name2)
*/
/*
var tel = "010-1234-7899"
var tel_number = tel.replace(/-/g,"") //정규식 표현
console.log(tel_number)
*/
/*
텍스트 영역에 입력한 전화번호의 하이픈(-)을 제거한 내용 표시하기
*/

document.querySelector("#sendBtn").addEventListener("click", ()=>{
    // html에서 tel input요소의 값 읽기
    const tel = document.querySelector("#tel").value
    // console.log(tel)

    // alert("야레야레")

    const tel_number = tel.replace(/-/g, "") //기호 제거
    alert(`전화번호는 ${tel_number}입니다.`)
})