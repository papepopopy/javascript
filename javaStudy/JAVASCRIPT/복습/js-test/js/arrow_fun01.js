/*

화살표 함수 : "=>"
함수를 간략히 기술, this를 묶을 수 있음, 콜백함수 처리 가능, 함수 자체를 인자값으로 사용 가능, 익명 함수

변수 = 상수, 산술식, 변수, 함수식

*/

// 인자가 없고, 반환 값이 없는 함수
const fun01 = () => console.log("화살표함수 01")
console.log(fun01)

const fun02 = () => {
    for (i=1; i<=3; i++) {
        console.log(i)
    }
}

// 익명(화살표) 함수 호출

console.log(fun01())
console.log(fun02())



// 인자가 있고, 반환 값이  없는 함수