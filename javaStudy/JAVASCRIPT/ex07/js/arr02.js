// 배열 요소 추가 or 삭제하기
const arr1 = ["사과", "귤"]
console.log("arr1", arr1)

arr1.unshift("바나나")
console.log("unshift()", arr1)

arr1.push("딸기")
console.log("push()", arr1 )

// 배열 요소 삭제하기
const shifteValue =arr1.shift() //배열의 첫번째 요소 삭제
console.log("삭제된 요소", shifteValue)
console.log("삭제후 배열", arr1)

const popValue = arr1.pop()
console.log("삭제된 요소", popValue)
console.log("삭제후 배열", arr1)

const arr2 = ["홍길동", "홍길순", "동길이"]
console.log("arr2", arr2)

arr2.splice(1, 0, "동길이홍") //인덱스 1위치에서 0개 삭제 및 추가
console.log(arr2)

arr2.splice(1, 1, "test") //인덱스 1위치에서 1개삭제 및 추가
console.log(arr2)

arr2.splice(1, 1, "test2", "test3") //인덱스 1위치에서 2개삭제 및 추가
console.log(arr2)

// 배열결합
const arr3 = ["홍", "길"]
const arr4 = ["동순이"]
const arr5 = arr3.concat(arr4)
console.log("arr3.concat(arr4):", arr5)

// 스프레드 연산자 : (...)
const arr6 = ["곰", "사자"]
console.log(arr6)
console.log(...arr6)

console.log("스프레드연산,", ([...arr3,arr4]))

// 배열요소를 결합해서 문자열 출력
const arr7 = [2, 4, 8]
console.log("arr7 :", arr7 )
console.log("arr7 :", arr7, typeof(arr7))
console.log("join():", arr7.join(), typeof(arr7.join()))

const arr8 = ["a", "b", "c"]
console.log("join():", arr8.join())
console.log("join():", arr8.join(""))
console.log("join():", arr8.join("_"))

// 배열 요소 검색
const arr10 = ["홍길동1", "홍길동2", "홍길동3"]
console.log(arr10)
console.log("indexOf()", arr10.indexOf("홍길동1"))
console.log("indexOf()", arr10.indexOf("홍길동2"))
console.log("indexOf()", arr10.indexOf("홍길동3"))
console.log("indexOf()", arr10.indexOf("홍길동4"))

console.log("indexOf()", arr10.includes("홍길동1"))
console.log("indexOf()", arr10.includes("홍길동2"))
console.log("indexOf()", arr10.includes("홍길동3"))
console.log("indexOf()", arr10.includes("홍길동4"))