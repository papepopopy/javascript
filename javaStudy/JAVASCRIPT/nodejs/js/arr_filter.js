/*

배열 .filter(콜백함수)
조건을 만족하는 데이터의 배열 생성

*/
const num = [10, 20, 30,40]
const newArr = [10, 20, 30, 40].filter((data) => data >= 30)
console.log("30이상", newArr) // 30이상 [ 30, 40 ]

const newArr2 = num.filter(function(data) {
    return data <= 30
})
console.log("30 이하 : ", newArr2) // 30 이하 :  [ 10, 20, 30 ]