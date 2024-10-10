// 변수 : 단일 기억장소
// 상수 : 기억장소에 넣을 값
// 변수 이름 규칙 : 영자숫자특수문자(_) 혼영 가능 / 첫자는 영문자, _시작 / 키워드는 사용불가
// ex) a, a_01, _myName


// 대입문(할당문)
// 변수 = 상수
// 변수 = 수식
// 변수 = 변수

// 1. 변수 = 상수
var a = 10 // var = 선언문
var b = 20 //a(기억장소)에 10(숫자)을 보관

var b
b = 20

console.log(a,b) // a, b기억장소의 값을 콘솔화면 출력

// 마지막 값만 기억
a = 100
b = 200

console.log(a,b)

var c = a+b // 연산식
console.log(c)

console.log('a='+a, 'b='+b) // ''안 텍스트 숫자로 나오지 않음

a = b // 변수 = 변수
console.log('a='+a,'b='+b)


// 문자열 연산자 : "+" => 연결
let myName = '홍길순'
let address = '부산시'
console.log('당신의 이름은', myName)
