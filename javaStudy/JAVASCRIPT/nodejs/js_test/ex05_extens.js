// 상위클래스 (부모클래스, 슈퍼클래스)
class MyParent {
    parentMethod() {
        console.log("MyParent : 부모클래스")
    }
}

// 자식클래스
class MyChild extends MyParent {
    childMethod() {
        console.log("Mychild : MyParent 클래스로 부터 상속 받은 자식 클래스")
    }
}

const myParent = new MyParent()
console.log("1. 부모 클래스:")
myParent.parentMethod()

const myChild = new MyChild()
console.log("2. 자식 클래스:")
myChild.childMethod()
myChild.parentMethod()

//////////////////////////////////////////////////////////////////

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
        console.log("부모 생성자 호출")
    }
    sayHello() {
        console.log(`이름 : ${this.name}, 나이: ${this.age}`)
    }
}

class Student extends Person{
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
        console.log("자식 생성자 호출")

    }
    sayStudent(){
        console.log("sayHello")
    }
}

console.log("Person")
const person = new Person("길순이", 15)

console.log(person.name, person.age)
person.sayHello()

console.log("student")
person.sayHello()

const student = new Student("동길이", 12, 4)

student.sayHello()
student.sayStudent()