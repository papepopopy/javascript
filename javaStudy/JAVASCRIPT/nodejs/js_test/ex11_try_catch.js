// 에러 발생 확인
const a = 10

// var b = a/3
var b = a/0 //에러발생

console.log(a,b)

try {
    a = 100
    // var b = a/0
}   catch (e) {
    console.log(`에러가 발생했습니다. ${e.message}`)
}
console.log("=>",a)

/*
const b = 100 
b = 2000
console.log(b)
*/

function generateError() {
    try{ // 에러발생
        var rnd = Math.random()
        console.log("숫자 =>", rnd)

        if(rnd > 0.5){
            throw new Error(`number: ${rnd}`)
        } else {
            console.log("에러 없음")
        }
        // if(Math.random() > 0.5) {
        //     throw new Error() 
        // } else {
        //     console.log("에러 없음")
        // }
    } catch(error) {
        console.log("errorMessage:", error.message)
    }   finally { //에러가 발생 하여도 진행
        console.log("에러 처리 완료")
    }
}
setInterval(generateError, 1500);

/*
에러종류

rangeError : 값이 허용 범위 내에 없음
ReferenceError : 선언되지 않은 변수를 호출
SyntaxError : 언어 구문 부정확
TypeError : 데이터 타입 부정확
URIError : URI 부정확
*/

try {
    // let num null // SyntaxError

    // console.log(b) // ReferenceError
    
} catch (error) {
    console.log(error)
}