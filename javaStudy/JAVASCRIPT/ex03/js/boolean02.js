/*
// 결과 값 표시 대상 => 콘솔창, HTML 태그 표시
// 진위 여부판별 : Boolean 타입 => true/false

console.log("==비교연산자 결과: true/fales")
const userName = "홍"
if (userName) {
    console.log("값여부 판별:", userName, Boolean(userName))
}
console.log("0 => ", Boolean(0))
console.log("1 => ", Boolean(1))
console.log("-1 => ", Boolean(-1))
console.log("!0 => ", !Boolean(0))
console.log("!!0 => ", !!Boolean(0))
console.log("홍길동",!"홍길동")
console.log(24,!24)
console.log([1,2,3], ![1,2,3])
*/
// 포함여부 판별
const flg = "Javascript".includes("a")
console.log("a 포함 여부 :", flg, !flg)
// *includes : 배열에 특정 요소가 포함하는지 확인하는 함수

if (flg) {
    console.log("문자가 있습니다.")
}

/*
var userName2
console.log("userName2의 데이터가 없을 경우 판별:",Boolean(userName2))

var userName2 = "홍"
console.log("userName2의 데이터가 있을 경우 판별:",Boolean(userName2))

const a = 10
const b = 20

// 관계(비교) 연산의 결과 true / false
console.log(a > b) //false
console.log(a < b) //true

document.write(a > b)
*/