// 화살표 함수 : "=>"
// 함수를 간략히 기술, 
// this를 묶을 수 있음, 콜백함수처리 가능
// 함수자체를 인자값으로 사용 가능
// 익명 함수

// 변수 = 상수, 산술식, 변수, 함수식


// 3. 인자가 있고, 반환 값이 있는 함수
let fun05 = (num1, num2) =>  num1+num2
let fun06 = (num1, num2) =>  {
  return num1+num2
}

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



// let result = fun05(100,50)
// let result2 = fun06(1000,500)
// console.log( result, result2 )


/*
fun03("홍길동",12)
fun04(1,3)
*/
/*
console.log(fun01)
// 익명(화살표) 함수 호출
console.log(fun01())
console.log(fun02())
*/