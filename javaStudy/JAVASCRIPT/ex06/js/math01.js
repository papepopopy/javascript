/*
// 수학객체
console.log(Math.abs(1),Math.abs(-1))
console.log(Math.max(10,50,90,100))
console.log(Math.min(10,50,90,100))

console.log(Math.round(10.54),Math.round(10.44)) //반올림
console.log(Math.floor(10.94), Math.floor(10.24)) //내림
console.log(Math.ceil(10.84), Math.ceil(10.14)) //올림
console.log(Math.trunc(10.84), Math.trunc(10.14)) //소수점 없애기
console.log(Math.PI)
console.log("---") 
for(i=1; i<=5; i++) {
    console.log(Math.ceil(Math.random()*3))
}
*/
var arr_str = ["1","2","3","4","5"]
// console.log(arr_str)
// console.log(arr_str[2])

for(i=1;i<=5;i++) { 
    // console.log(arr_str)
    var i = (Math.floor(Math.random()*5))//1~5
    console.log(arr_str[i])//1~5

}