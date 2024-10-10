/*
자바스크립트는 객체(Object) 기반 언어
객체 =>  기능과 속성을 가진 형태 => 변수 + 함수
*/

// 데이터 구조를 정의 : 설계도
/*
var product = {
    name: "망고", type: "당절임", desc: "망고, 설탕 ...",  other: "필리핀"
}
console.log(product)
console.log(product.name)
console.log(product.desc)
console.log(product.other)
console.log(product["type"])

// 확장 for
for (var key in product) {
    console.log(key, product[key])
}
*/


var person = {
    name : "홍길동", 
    age : "10", 

    score : [100, 80, 50],
    other : { addr : "부산시", gender : "여자"},

    eat : function(food) {
        console.log(food + "을 먹었습니다.")
    },
    myPrint : (a,b) => {
        console.log(`거주지: ${a}, 성별: ${b}`)
    },
    printName : function() {
        console.log(`당신의 이름은 ${this.name}입니다.`)
    }
}

console.log(person.name)
console.log(person.age)

console.log(person.score)
console.log(person.score[0])

console.log(person.other)
console.log(person.other.addr)
console.log(person.other.gender)

person.eat("바나나")

console.log(person.myPrint(1,2))
console.log(person.myPrint("서울시", "남자"))

console.log(person.printName())