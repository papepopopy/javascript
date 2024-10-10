
// 화살표 함수
let fun01 = (name, age) => `이름 : ${name}, 나이 : ${age}`
let fun02 = (num1) => num1*100

let rs1 = fun01("홍길동", 10)
let rs2 = fun02(3)

console.log(rs1)
console.log(rs2)

console.log(fun01("홍길동", 10))
console.log(fun02(3))

// myPrint() 함수 호출
myPrint(fun01)

// 일반 함수 정의
function myPrint(f01) {
    // f01 = (name, age) => `이름 : ${name}, 나이 : ${age}`
    let name = prompt("이름 : ","")
    let age = prompt("나이 : ", "")

    let prn_str = f01(name, age)
    console.log(prn_str)
}