class SetGetClass {
    // #멤버변수 => private 멤버변수로 클래스 내에서만 접근가능
    #myName

    constructor(value) {
        // this.myName = value

        // this.멤버변수 => private설정 => this.#멤버변수
        this.#myName = value

    }
    setmyName(value){
    // set setMyName(value){
        // this.myName = value
        this.#myName = value
    }
    getmyName() {
    // get getMyName() {
        // return this.myName
        return this.#myName
    }
}

// const myInstance = new SetGetClass("길순이")
// console.log(myInstance.myName) //길순이
// myInstance.setMyName = "동순이"
// console.log(myInstance.getMyName) //동순이

// 멤버변수 값 설정 : 메서드로 통해
const myInstance = new SetGetClass()
myInstance.setmyName("강감찬")

// 멤버변수 값 읽기 : 메서드로 통해
console.log(myInstance.getmyName())