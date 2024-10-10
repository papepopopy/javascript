/*
// 입력한 숫자가 3의 배수이고, 6의 배수인 숫자 판별하기
var num =prompt("숫자 입력 : ", 0)

console.log(num, num/3, num%3)

if (num%3 === 0 &&  num%6) {
    document.write(`입력되어진 숫자 ${num}은 3의 배수이자 6의 배수 입니다.`)
    } else { 
        document.write(`입력하신 숫자 ${num}은 3의 배수이자 6의 배수에 해당되어지지 않습니다.`)
    }

*/
/*
메세지 창 : alert("메세지")
입력 창 : prompt("메세지", "값")
판별 여부 창 : confirm("메세지")
*/
/*
// 확인버튼 : true / 취소버튼 : false
var isOk = confirm("정말로 회원 탈퇴 하시겠습니까?")
console.log(isOk)
 
if (isOk) {
    alert("탈퇴 처리 하였습니다.")
    } else {
        alert("탈퇴 취소하였습니다.")
    }
*/

// 입력한 숫자가 양수, 0, 음수 판별
var number = prompt("숫자입력 : ","0")
console.log(number)

if (number > 0) {
    document.write("양수")
    } else if (number == 0) {
        document.write("0")
    } else {
        document.write("음수")
    }