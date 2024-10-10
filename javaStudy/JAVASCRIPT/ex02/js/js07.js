/*

체중 상태 알아보기

철수의 신장 :  180
철수의 체중 :  74

적정 체중 = (본인 신장 - 100) x 0.9

적정체중 72인 경우
결과 판별 : 적정 체중 2 초과

*/
/*
const a = 180
const b = 74
const c = (a - 100)*0.9

console.log("적정 체중 = ", (a - 100)*0.9)
console.log("초과한 몸무게 = ", b-c)
// console.log(b>c ? b-c + "초과" : "정상")
*/

let userH, userW, userName
userName = prompt("이름 : ", "")
userH = prompt("신장 : ", "0")
userW = prompt("체중 : ", "0")

// let userH = 180
// let userW = 74
let avgW = (userH - 100)*0.9

// console.log(userName+"신장 = "+userH+"cm")
// console.log(userName+"체중 = "+userW+"kg")
// console.log(userName+"체중 = "+avgW+"kg")

// 백틱(`)으로 템플릿 리터럴 적용 시 : 표현식 => ${변수/연산}
// document.write("<h2>" + userName+"</h2>")
document.write(`<h2>${userName}</h2>`)
document.write(`<p>${userName}님 신장 = ${userH}cm</p>`)
document.write(`<p>${userName}님 체중 = ${userW}kg</p>`)
document.write(`<p>${userName}님 체중 = ${avgW}kg</p>`)

// console.log(userW>avgw ? (userW-avgw)+"초과":"정상")
console.log((userW>avgW) ? (userW-avgW)+"초과":(userW<avgW) ? (avgW-userW)+"미달" : "정상")
