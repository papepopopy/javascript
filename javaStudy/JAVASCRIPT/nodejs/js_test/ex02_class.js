// 클래스 = 멤버변수 + 함수(매서드) 구성
// 사용자가 정의한 자료형 타입

// 카멜 케이스 표기 - 클래스명
class MyClass {
/*
    // 생성자
    constructor() {
        console.log("클래스 생성시 1번 수행")
    }
*/
/*
    //1. 인자값 지정
    constructor(name, age) {
        console.log(name, age)
    }
*/
/*
    //2. 생성자로 멤버변수 정의
    constructor() {
        // 멤버 변수 선언
        this.myName = "사자",
        this.age = "10"
    }
*/
/*
    // 3. 인자값 지정 값
    constructor() {
        // 멤버 변수 선언
        this.myName = "사자";
        this.age = "10";
    }
*/
/*
    // 4. 인자값 지정 값
    constructor(name, age) {
        // 멤버 변수 선언 및 외부에서 전달 받은 값으로 초기화
        this.myName = name
        this.age = age
    }
*/
    // 5. 인자값 지정 값
    constructor(name="강감찬", age=1) {
        // 멤버 변수 선언 및 외부에서 전달 받은 값으로 초기화
        this.myName = name
        this.age = age
    }

}



/*
// 1. 생성자 값
const obj1 = new MyClass() //클래스 생성시 1번 수행
console.log(new MyClass()) //클래스 생성시 1번 수행
*/

// 2. 인자값 지정 값
// const obj2 = new MyClass("여우",20) //여우 20

// 3. 인자값 지정 값
// const obj3 = new MyClass()
// console.log(obj3, obj3.myName, obj3.age) //MyClass { myName: '사자', age: '10' } 사자 10

// 4. 인자값 지정 값
// const obj4 = new MyClass("이순신",20)
// console.log(obj4, obj4.myName, obj4.age) //{ '4': undefined, myName: '이순신', age: 20 } 이순신 20

// 5. 인자값 지정 값
const obj5 = new MyClass()
console.log(obj5, obj5.myName, obj5.age) //MyClass { myName: '강감찬', age: 1 } 강감찬 1

