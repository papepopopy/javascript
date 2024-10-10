// 단일 기억장소 : 일반 변수
// 복수 기억장소 : 배열구조, 객체구조
// - 배열구조 => "[데이터1,...]" 표시
// - 객체구조 => "{'key':'value',...}" 표시

const myArray = ['팽귄', '고래', '참치']
console.log(myArray)

// const가 구조상 소용이 없다
myArray[0] = '100'

// 배열구조 데이터 보기
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])


const myObj = {id:20,name:'홍길동'}

// const가 구조상 소용이 없다
myObj.id = 10

console.log(myObj)
console.log(myObj.id)
console.log(myObj.name)

console.log(myObj['id'])
console.log(myObj['name'])