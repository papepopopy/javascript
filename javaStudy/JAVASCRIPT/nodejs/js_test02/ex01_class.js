// var Picture = new Object()

// Picture.name = "길순이"
// Picture.age = 10

// Picture.info = function() {
//     console.log(`당신의 이름은 ${Picture.name}입니다.`)
// }

// console.log(Picture)
// Picture.info()

// var Picture2 = {
//     name: "강감찬",
//     age: 15,

//     info: function() {
//         console.log(`당신의 이름은 ${this.name}입니다.`)
//     }

// }
// Picture2.info()

class MyClass {
    // constructor() {
    //     console.log("클래스 생성될 때 1번 수행") //클래스 생성될 때 1번 수행
    // }
    // constructor(name, age) {
    //     console.log(name, age) //여우 20
    // }
    constructor() {
        this.myName = "사자"; // MyClass { myName: '사자', age: 10 } 사자 10
        this.age = 10;
    }

    // constructor(name = "강감찬", age=1) {
    //     this.myName = name
    //     this.age = age
    // }
}

// const obj1 = new MyClass()
// console.log(obj1)

// const obj2 = new MyClass("여우", 20)
// console.log(obj2)

const obj3 = new MyClass()
console.log(obj3, obj3.myName, obj3.age)