// 객체 복사하기
const obj1 = {
    result : true,
    membar : [
        {id: 1, name: "여우"},
        {id: 2, name: "호랑이"},
        {id: 3, name: "사자"}
    ]
}

console.log(obj1)
console.log(obj1.result)
console.log(obj1.membar[0])
console.log(obj1.membar[0].id)
console.log(obj1.membar[0].name)

// 객체복사 : Object.assign({}, 복사대상 개체)
const copiedObj1 = Object.assign({}, obj1)
console.log("--copied", copiedObj1)

// 스프레드 연사자를 이용하여 객체 복사
const copiedObj2 = {...obj1}
console.log("--copied obj2 : ", copiedObj2)

// 객체속성 확인
const userData = {
    id: 1,
    name: "길순",
    age: 10,
    test01: null, // 해당하는 값이 없는 상태 (참조형)
    test02: undefined //데이터가 아예 없는 상태 
}

var isOk = userData.hasOwnProperty("name") //true
console.log(isOk)

isOk = userData.hasOwnProperty("address") //false
console.log(isOk)

console.log("id" in userData) //true
console.log("gender" in userData) //false

// 속성에 값여부 확인
console.log(userData.id!=null) //true
console.log(userData.test01!=null) //false

// 객체 요소 값 확인
console.log(Object.keys(userData)) // [ 'id', 'name', 'age', 'test01', 'test02' ]
console.log(Object.values(userData)) // [ 1, '길순', 10, null, undefined ]
console.log(Object.entries(userData)) // keys, values

//객체 요소 분활 대입
const userData2 = {
    id: 100, name: "김", age: 10
}
const {id, age, name} = userData2
console.log(id, name, age)

const {name :myName} = userData2
console.log(myName, name)

// 객체 수정 제한하기
const num1 = 100
// num1 = 200

"use strict";
const objData = {
    id : 100,
    name: '김',
}
Object.freeze(objData) 
objData.id = 200
console.log(objData)

const number = [10, 20]
Object.freeze(number)

number[0] = 200
console.log(number)