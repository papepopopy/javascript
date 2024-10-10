/*
const a = prompt("태어난 해를 입력해주세요", "")
const num = Number(a)

const b = num%12

let result 
if (b === 0) {result = "원숭이"}
 
alert (`${num}년에 태어났다면 ${result}띠입니다.`)
*/
/*
const rawInput = prompt("태어난 해를 입력해주세요.", "")
const year = Number(rawInput)
const e = year % 12
// 년도 12 배수
let result
if (e === 0) {result = "원숭이"}
if (e === 1) {result = "닭"}
if (e === 2) {result = "개"}
if (e === 3) {result = "돼지"}
if (e === 4) {result = "쥐"}
if (e === 5) {result = "소"}
if (e === 6) {result = "호랑이"}
if (e === 7) {result = "토끼"}
if (e === 8) {result = "용"}
if (e === 9) {result = "뱀"}
if (e === 10) {result = "말"}
if (e === 11) {result = "양"}

alert(`${year}년에 태어났다면 ${result} 띠입니다.`)
*/
/*
const result = (100 > 200)
    ? prompt("값을 입력해주세요", "") : confirm("버튼을 클릭해주세요")
alert(result)
*/
/*
const rawInput = prompt("태어난 해를 입력해주세요")

// 입력한 헤
const year = Number(rawInput)
// split : 차례로 문자배열
const tti = "원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양".split(",")

alert(`${year}년에 태어났다면 ${tti[year % 12]} 띠입니다.`)
*/
/*

const rawInput = prompt("태어난 해를 입력해주세요", "")
const year = Number(rawInput)
const e = year % 12

let result
if (e === 0) {result = "원숭이"}
if (e === 1) {result = "닭"}
if (e === 2) {result = "개"}
if (e === 3) {result = "돼지"}
if (e === 4) {result = "쥐"}
if (e === 5) {result = "소"}
if (e === 6) {result = "호랑이"}
if (e === 7) {result = "토끼"}
if (e === 8) {result = "용"}
if (e === 9) {result = "뱀"}
if (e === 10) {result = "말"}
if (e === 11) {result = "양"}
if (e === 12) {result = "소"}

alert(`${year}년에 태어났다면 ${result} 띠입니다.`)

*/

/*
switch (자료) {
    case 조건A: 
        break
    case 조건B:
        break
    default:
        break
}
*/
/*
// 변수를 선언합니다.
const input = Number(prompt("숫자를 입력하세요.","숫자"))

// 조건문
switch (input % 2) {
    case 0:
        alert("짝수입니다.")
        break
    case 1:
        alert("홀수입니다.")
        break
    default:
        alert("숫자가 아닙니다.")
        break
}
*/
/*
// 변수를 선언합니다.
const date = new Date()
const hour = date.getHours()

// 조건문
switch(true) {
    case hour < 11:
        // 표현식 hour < 11이 참일 때 실행합니다.
        alert("아침 먹을 시간입니다.")
        break
    case hour < 15:
        // 표현식 hour < 11이 거짓이고, 표현식 hour < 15가 참일 때 실행합니다.
        alert("점심 먹을 시간입니다.")
        break
    default:
        // 위의 모든 것이 거짓일 때 실행합니다.
        alert("저녁 먹을 시간입니다.")
        break
}
*/
/*
// 변수를 선언합니다.
const input = prompt("숫자를 입력해주세요", "0")
const number = Number(input)

// 조건문
const result = (number >= 0) ? "0 이상의 숫자입니다." : "0보다 작은 숫자입니다."
alert(result)
*/
/*
// 입력이 문자열이므로 다음과 같은 코드를 사용할 수 있습니다.
const 입력 = prompt("정수를 입력해주세요")
const 끝자리 = 입력[입력.length - 1]

// 끝자리를 비교합니다.
if (끝자리 === "0" ||
    끝자리 === "2" ||
    끝자리 === "4" ||
    끝자리 === "6" ||
    끝자리 === "8" ) {
    alert(`${입력}은 짝수입니다.`)
    } else {
        alert(`${입력}은 홀수입니다.`)
    }

*/
/*
const a = prompt("정수를 입력해주세요")
const num = Number(a)

if (num%2 === 0) {
    alert("짝수")
} else if (num%2 === 1) {
    alert("홀수")
} else {
    alert("숫자를 입력해주세요")
}
*/
/*
const score = Number(prompt("학점을 입력해주세요", "학점"))
if (score === 4.5) {
    alert('ㅊ')
} else if (4.2 <= score && score < 4.5) {
    alert("축하합니다. 당신은 교수님의 사랑입니다.")
} else if (3.5 <= score && score < 4.2) {
    alert("축하합니다. 당신은 현 체제의 수호자입니다.")
} else if (2.8 <= score && score < 3.5) {
    alert("축하합니다. 당신은 일반인입니다.")
} else if (2.3 <= score && score < 2.8) {
    alert("축하합니다. 당신은 일탈을 꿈꾸는 소시민입니다.")
} else if (1.75 <= score && score < 2.3) {
    alert("축하합니다. 당신은 오락문화의 선구자입니다.")
} else if (1.0 <= score && score < 1.75) {
    alert("축하합니다. 당신은 불가촉천민입니다.")
} else if (0.5 <= score && score < 1.0) {
    alert("축하합니다. 당신은 자벌레입니다.")
} else if (0.1 <= score && score < 0.5) {
    alert("축하합니다. 당신은 플랑크톤입니다.")
} else if (0 === score) {
    alert("축하합니다. 당신은 병신입니다.")
} else {
    alert("학점을 다시 입력해주세요")
}
*/