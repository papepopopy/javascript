/*
연산식 : 산술식, 관계연산, 논리연산, ...
산술식 = > +, -, *, /, %(나머지가 나옴), **(제곱)
단일 연산 : ++, --
관계 연산 : >, >=, <, <=, !=, 같음(==, ===)
shsfldustks : !(NOT), &&(AND), ||(OR)
&&(AND) : 모든 조건이 true =>  true
||(OR) : 모든 조건이 false => false
^(XOR) : 모든 조건인 true 이거나 false 이면 false

삼항 연산자 : 조건식 ? true경우 처리 : flse인 경우 처리
복합형 대입연산자 : +=, -=, *=, /=, %=

*/

//  1. 기억장소 선언
let num1=10, num2=3
let add, sub, mul, div, mod, pow

// 2. 계산 처리
add = num1 + num2
sub = num1 - num2
mul = num1 * num2

div = num1 / num2
mod = num1 % num2
pow = num2 ** num2

console.log(add, sub, mul, div, mod, pow)
let num3 = 10
console.log('num3=' + ++num3)
console.log(num3)

console.log(5>2)
console.log(5<2)
console.log(5!=2)
console.log(5==2)
console.log(5==5)
console.log(5==5, "5==5")
console.log("5=='5'", 5=='5')
console.log("5==='5'", 5==='5')

// not > and > or 순서

console.log("!(not)=>", (5>2), !(5>2))
console.log("&&(and)=>", 5>2 && 5>3 && 5>1)
console.log("||(or)=>", 5<2 || 5<3 || 5>1)
console.log("^(xor)=>", false ^ true)

// true = 1 / false = 0
console.log("^(xor)=>", false ^ false ^ false)
console.log("^(xor)=>", true ^ false ^ false)
console.log("^(xor)=>", true ^ false ^ true)
console.log("^(xor)=>", true ^ true ^ true)
console.log("^(xor)=>", true ^ true)
console.log("^(xor)=>", false ^ false)
console.log("^(xor)=>", true ^ false)
console.log("^(xor)=>", false ^ true)

console.log(10>2 ? "10은 2보다 크다" : '10은 2보다 작다')

let num5 = 1
num5 += 100
console.log(num5)

num5 -= 10
console.log(num5)

