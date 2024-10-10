// 독립된 단위 프로그램


// 함수 호출
// numberPrint()

// 함수 정의
/*
// 1. 인자가 없는 함수
function numberPrint() {
    for (i=1; i<=3; i++) {
        console.log(i)
    }

}

// 2. 인자가 있는 함수
function numberPrint2(start, end) {
    for (i=start; i<=end; i++) {
        console.log(i)
    }
}

function numberPrint2(start, end) {
    for (i=start; i<=end; i++) {
        console.log(i)
    }
}
*/
// 3. 인자가 있고, 반환값이 있는 함수
let result = sum(1000,10)
console.log(result)

function sum(num1, num2) {
    return (num1 + num2)
}
