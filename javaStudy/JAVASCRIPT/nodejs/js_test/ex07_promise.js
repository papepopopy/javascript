/*
비동기화 Promise

Promise 생성자 인자 : 비동기처리 작업을 하는 함수를 지정(사용)
함수 내부에서 비동기 처리완료 메소드인 resolve() 호출
Promise 인스턴스의 then()을 사용해 resolve() 실행 후의 작업을 처리
*/

/*
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("orange")
    },1000 ) //,1000 => 1초 후에 수행
})
promise.then((value) => {
    console.log(value) //orange
})
*/
/*
var flag = true
new Promise((resolve, reject) => {
    if(flag === true) {
        resolve("orange")
    } else {
        reject("apple")
    }
})
.then((result) => console.log(result))
.catch((result) => {
    console.log(result) //apple
})
*/

// Promise.all 배열
const arrFunc = []
for(let i=0; i<5; i++) {
    const func = (resolve) => {
        console.log(`처리 ${1} 시작`, new Date().toLocaleTimeString())
        const delayMsec = 2000 * Math.random  //2초 랜덤

        setTimeout(() => {
            console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString())
            resolve()  //정상처리를 알려주는 함수

        },delayMsec) //2초
        
    }
    
    // 배열에 저장
    arrFunc.push(func)
}

console.log(arrFunc)

// 함수를 포함한 배열을 Promise 배열로 변환
const arrPromise = arrFunc.map((func) => new Promise(func))
console.log(arrPromise)

// 병렬 처리 실행
Promise.all(arrPromise).then(() => {
    console.log("모든 작업이 완료되었습니다.")
})