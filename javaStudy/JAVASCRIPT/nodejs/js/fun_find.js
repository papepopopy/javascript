// 화살표 함수 : 콜백함수 활용 => (인자 : 함수)
const Arr = ["홍길동", "홍길순", "동길이"]

/*
함수(매개변수, ...) {}
함수(인자값, ...)
배열.find(콜백함수 조건에 맞는 첫번쨰 요소를 반환)
*/

// const find_result = Arr.find((v) => v == "사자") //자료가 없는 경우 null 값이 나옴
const find_result = Arr.find((v) => v == "홍길순") //find_result
console.log("자료가 없는 경우 null 값이 나옴", find_result)

// PS C:\01javaStudy\JAVASCRIPT\nodojs\js> node .\fun_find.js
