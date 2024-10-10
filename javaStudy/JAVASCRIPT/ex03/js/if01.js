/*

제어문 : 흐름의 방향을 제어
if, switch, while, for

1. 
- if (조건식) 참인 경우 처리
- if (조건식) 참인 경우
- if (조건식) {참인 경우}

2.
- if (조건식) 참인경우 else 거짓인 경우
- if (조건식) 참인경우  
    else 
    거짓인 경우

    if (조건식) {
        ckadlsruddn
    } else {
        거짓인 경우
    }

3.
else if
- if (조건식1) 
    참인경우 1
    else if (조건식2)
        참인경우2
    else 
    거짓인 경우

*/


/*
const myPrice = 5

if (myPrice>=50) {
    console.log("50보다 같거나 크다")
    console.log('단순 if문입니다.')
    }

console.log("다음 문장 수행...")

const num1 = 0
if (num1>0)
    console.log("0이거나 크다")
else {
    console.log("0이거나 작다")
    
}
console.log("----")

let num2
num2 = prompt("숫자1:",0)

if (num2%2==0)
    // console.log(`입력한 숫자 ${num2}는(은) 짝수`)
    // alert("참")
    // alert(`입력한 숫자 ${num2}는(은) 짝수`)
    document.write(`입력한 숫자 ${num2}는(은) 짝수`)
else {
    // console.log(`입력한 숫자 ${num2}는(은) 홀수`)
    // alert("거짓")
    // alert(`입력한 숫자 ${num2}는(은) 홀수`)
    document.write(`입력한 숫자 ${num2}는(은) 홀수`)
}
*/
// console.log(`입력한 숫자는(은) ${num2}`)
/*
const a = Number(prompt("숫자를 입력해주세요", ""))

if (a > 0) {
    alert("입력한 숫자는 양수입니다.")
} else if (a === 0) {
    alert("입력한 숫자는 0입니다.")
} else {
    alert("입력한 숫자는 음수입니다.")
}
*/


/*
90 이상 : A학점 
80 이상 : B학점 
70 이상 : C학점 
60 이상 : D학점 
50 이상 : F학점 

*/
/*
let score
score = prompt("점수 : ",0)

if (score>=90)
document.write(`<h3>A학점</h3>`)
else if(score>=80)
document.write(`<h3>B학점</h3>`)
else if(score>=70)
document.write(`<h3>C학점</h3>`)
else if(score>=60)
document.write(`<h3>D학점</h3>`)
else 
document.write(`<h3>F학점</h3>`)

score = console.log(score)
*/

const a = Number(prompt("숫자를 입력하세요.",""))

if (a%2===0) {
    alert("입력한 숫자는 짝수입니다.")
} else {
    alert("입력한 숫자는 홀수입니다.")
}