let num_scope = prompt("현재 몇 월입니까?", 1) 
// let mum_scope = prompt("1~12의 숫자만 입력 부탁드립니다.")

if (num_scope < 1 || num_scope > 10) {
    document.write("1에서 10사이 범위에서 벗어났습니다.")
} else {
    document.write("숫자"+ num_scope)
}


// if (mon>=9 && mon<=11) {
//     document.write("독서의 계절 가을")
//     } else if (mon>=6 && mon<=8) {
//         document.write("여행가기 좋은 여름")
//     } else if (mon>=3 && mon<=5) {
//         document.write("햇살 가득한 봄이네요")
//     } else {
//         document.write("스키의 계절 겨울")
//     }
/*
if (mon>=9 && mon<=11)
    document.write("독서의 계절 가을")
    else if (mon>=6 && mon<=8) 
        document.write("여행가기 좋은 여름")
     else if (mon>=3 && mon<=5) 
        document.write("햇살 가득한 봄이네요")
     else 
        document.write("스키의 계절 겨울")
    */

        // 9~ 11
        // 가을
        // 6~8
        // 여름
        // 3~5
        // 봄
        // 그외에 
        // 겨울

    // const a = Number(prompt('월을 입력해 주세요'))

    // if (a>=9 && a<=11) {
    //     alert("가을")
    // } else if (a>=6 && a<=8) {
    //     alert("여름")
    // } else if (a>=3 && a<=5) {
    //     alert("봄")
    // } else if (a>=12 && a<=2) {
    //     alert("겨울")
    // } else {
    //     alert("1~12의 숫자만 입력 부탁드립니다.")
    // }