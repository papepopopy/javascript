/*
// 클레스에서 메소드 사용
class Myclass {
    constructor() {
        this.name = "홍길순"
    }

    // 함수
    myNamePrn() {
        console.log(this.name)
    }
}

const obj1 = new Myclass()
console.log(obj1) //Myclass { name: '홍길순' }
console.log(obj1.name) //홍길순

obj1.myNamePrn() //홍길순
*/
///////////////////////////////////////////////////////

class Student {

    constructor(name, kor, mat, eng) {
        this._name = name
        this.kor = kor
        this.mat = mat
        this.eng = eng

        this.tot = 0
        this.avg = 0.0
    }

    totMethod() {
        // 총점 계산
        this.tot = this.kor + this.mat + this.eng
    }
    avgMethod() {
        this.avg = (this.tot)/3.0
    }
    scoreInfo() {
        console.log(`이름 : ${this.name}, 평균: ${this.avg}`)
    }
}

const student = new Student("홍길순", 100,90,80)
console.log("초기값 :", student) //초기값 : Student { name: '홍길순', kor: 100, mat: 90, eng: 80, tot: 0, avg: 0 }

student.totMethod()
student.avgMethod()
console.log("성적 계산 후 : ", student) //성적 계산 후 :  Student { name: '홍길순', kor: 100, mat: 90, eng: 80, tot: 270, avg: 90 }

student.name = "동길이"
console.log(student) //Student { name: '동길이', kor: 100, mat: 90, eng: 80, tot: 270, avg: 90 }