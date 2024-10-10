const a = 10
console.log(`상수 a의 값은 ${a}입니다.`)
// console.log(`다음 작업을 실행합니다.`)

const err = new Error("에러 발생")
console.log(err.message)

// 인자값이 숫자 타입이 아닌 경우
function myfunction(params) {
    if(typeof params !== "number") {
        
        // 에러 생성
        const error = new Error(`${params}은 Number 타입이 아닙니다.`)
        alert(error.message)

        throw error //에러를 시스템에서 발생시킴
    }
}

myfunction(5)
myfunction("강감찬")