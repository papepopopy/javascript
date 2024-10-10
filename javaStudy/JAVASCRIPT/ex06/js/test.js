// 변수 = 상수, 산술식, 변수, 함수식
/*
// 3. 인자가 있고, 반환 값이 있는 함수
let fun05 = (num1, num2) =>  num1+num2
let fun06 = (num1, num2) =>  {
  return num1+num2
}

console.log(fun05(100, 50))
console.log(fun06(100, 80))
*/
let fun05 = (num1, num2) => num1 + num2

console.log(fun05(100,20))



// 4. 가변 인자
// let fun07 = (...values) => console.log(values)
// let fun08 = (...values) => {
//   for (const value of values){
//     console.log(value)
//   }
// }
// fun07(10)
// fun07(10,20)
// fun07(10,20,30)
// fun08(10)
// fun08(10,20)
// fun08(10,20,30)

/*
// 4. 가변 인자
let fun07 = (...values) => console.log(values)
let fun08 = (...values) => {
  for (const value of values){
    console.log(value)
  }
}
fun07(10)
fun07(10,20)
fun07(10,20,30)
fun08(10)
fun08(10,20)
fun08(10,20,30)
*/