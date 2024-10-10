// 객체는 변수와 함수를 같이 합쳐놓은 것 / 묶을수 있는 기능을 가짐

/* 사용자 객체 만들기 */
var Picture = new Object() //객체 타입!

// 대입문
Picture.name = "길순이" //속성을 만들어 쓸수 있다.
Picture.age = 10

Picture.info = function() {
    console.log("당신의 이름은 " + Picture.name + "입니다.")
}

console.log(Picture) //{ name: '길순이', age: 10, info: [Function (anonymous)] }
console.log(Picture.name) //길순이
console.log(Picture.age) //10
console.log(Picture.info) //[Function (anonymous)]

Picture.info() //당신의 이름은 길순이입니다.

///////////////////////////////////////////////////////

// return 방식으로 객체 제작

var Picture3 = ["떡갈비", "떡은 니꺼"] //이름이 없으므로 순서로 구분
var Picture2 = {
    name : "떡갈비", 
    age : "갈비는 내꺼" ,

    info : function(){
        console.log("당신의 이름은 " + this.name + "입니다.")
    },

    // 인자가 있는 함수
    info2 : function(name){
        console.log("당신의 이름은 " + name + "입니다.")
    }
}
console.log(Picture2.name) //당신의 이름은 길순이입니다.
console.log(Picture2.age) //떡갈비
Picture2.info() //당신의 이름은 떡갈비입니다.
Picture2.info2() //당신의 이름은 undefined입니다.
Picture2.info2("동길이") //당신의 이름은 동길이입니다.

var Student = {
    name: "홍길동",
    mat: 100,
    kor: 100,
    eng: 100,
    tot: function(){
        return(this.kor + this.mat + this.eng)
    },
    avg: function() {
        return(this.kor + this.mat + this.eng)/3
    }
}
console.log("학생 이름 : " + Student.name) //학생 이름 : 홍길동
console.log("총점 : " + Student.tot()) //총점 : 300
console.log("평균 : " + Student.avg().toFixed(2)) //평균 : 100.00

///////////////////////////////////////////////////////

// 객체 생성자 함수 : 객체 초기치 설정할 때 사용
// 객체 생성 시점에 1번 수행하는 함수

function Person(name, age, weight) {
    // 생성자 함수를 이용하여 멤버변수 (속성)를  설정
    this.userName = name,
    this.userAge = age,
    this.userWeight = weight
}

Person.prototype.getInfo = function(){
    console.log(`이름 : ${this.userName}, 나이: ${this.userAge}, 몸무게: ${this.userWeight},`)

    // 출력값을 하나로 고정! => prototype 함수
}
var jang = new Person("강감찬", 180, 80) //생성자

console.log(jang) //Person { userName: '강감찬', userAge: 180, userWeight: 80 }
jang.getInfo() //이름 : 강감찬, 나이: 180, 몸무게: 80,

var Lee = new Person("이순신", 190, 60) //생성자

console.log(Lee) //Person { userName: '이순신', userAge: 190, userWeight: 60 }
Lee.getInfo() //이름 : 이순신, 나이: 190, 몸무게: 60,
