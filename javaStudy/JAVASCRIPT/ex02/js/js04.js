// *데이터 값에 이름을 지정하여 사용할 경우 
// *수정불가능한 상수를 사용할 경우
// const 변수는 초기화

// 변수 선언 > var 변수, ... let 변수,...

// const myString = '홍길동'
// myString = '홍길순'
// console.log('myString=', myString)

// 범위는 기본적으로 변수를 사용할 수 있는 위치를 의미

// var 변수 선언 범위 
// *함수 외부 선언: 전역  / *함수 내부 선언: 함수 범위

// 오전과 오후 구분

// const date = new Date()
// const hour = date.getHours()

// // if 조건문
// if (hour < 12) {
    // 표현식 hour < 12가 참일 때 실행합니다.
//     alert('오전입니다.')
// }

// if (hour >= 12) {
    // 표현식 hour >= 12가 참일 때 실행합니다.
//     alert('오후입니다.')
// }

// const date =new Date()
// const hour = date.getHours()

// if (hour < 12) {
//     // alert('오전')
//     document.write('오전')
// } else {
//     document.write('오후')
// }
/*
// 변수를 선언합니다.
const date = new Date()
const hour = date.getHours()

// 중첩 조건문
if (hour < 11) {
    // 표현식 hour < 11이 참일 때 실행합니다.
    alert('아침을 먹을 시간입니다.')
} else {
    // 표현식 hour < 11이 거짓일 때 실행됩니다.
    if (hour < 15) {
        alert('점심 먹을 시간입니다.')
        } else {
        alert('저녁을 먹을 시간입니다.')
    }
}
*/
/*
const a = (prompt('첫 번째 숫자', ''))       
const b = (prompt('두 번째 숫자', ''))

if (a > b) {
    alert('첫 번째로 입력한 숫자가 더 큽니다.')
} else if(a === b) {
    alert('두 숫자가 같습니다.')
} else {
    alert('두 번째로 입력한 숫자가 더 큽니다.')
}
*/
// const x = 9

// if (x > 10) {
//     if (x < 20) {
//         console.log('조건에 맞습니다.')
//     }
// } else {
//     console.log('조건에 맞지 않습니다.')
// }

const x = 18

if(x>10 && x<20) {
    console.log('조건에 맞습니다.')
}