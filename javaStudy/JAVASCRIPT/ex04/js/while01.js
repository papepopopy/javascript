// 특정구간을 반복처리 : for -> 일정한 횟수, while ->조건
/*
while(조건식) {
    참인동안 반복처리할 내용
}

*합넌도 수행하지 않을 수도 있다.

*/
/*
while(true) {
    console.log("무한반복")
}
*/
/*
var loop_cnt = -10

while(loop_cnt > 0) {
    console.log("무한 반복", loop_cnt)

    loop_cnt--
}
console.log("while() outer")
*/

// 최소 1번 반복 수행
let loop_cnt = -10

do {
    console.log("반복 처리")
} while(loop_cnt > 0)