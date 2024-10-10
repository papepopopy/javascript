// 가져오는 모듈 import

// 파일에 있는 모듈 가져오기

import {MyClass1} from "./module01.js" // module01.js에서 MyClass 호출
import {MyClass2, PI, myObj, myPrn, myPrn2} from "./module02.js" // module02.js에서 MyClass2, PI, myObj, myPrn, myPrn2 호출



// Myclass1 메소드로 문자열 가져오기
const message1 = new MyClass1().myMethod1()
console.log("module01.js에 있는 MyClass1 myMethod1() => ", message1)

const obj = new MyClass2()
console.log("module02.js에 있는 MyClass2 myMethod2() => ", obj.myMethod2())

console.log("PI값은?", PI)
console.log("myObj = "+myObj.name, myObj.age)
myPrn()
myPrn2("홍길동", 10)


// 2. 별칭인 경우 
import*as m from "./module02.js" // m은 all을 뜻함

console.log("PI값은?", m.PI)
console.log("myObj = "+m.myObj.name, m.myObj.age)
m.myPrn()