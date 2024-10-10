// Promise 직렬 처리하기 
// 외부 데이터를 가져와 후속 처리 작업에 사용할 경우

// Promise => await, async

Promise.resolve() //then을 두번 차례로 처리
.then(()=>{
    new Promise((resolve) => {
        setTimeout(()=>{
            console.log("첫번째 Promoise", new Date().toLocaleTimeString())
            resolve()
        }, 5000)
    })
})
.then(()=>{
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("두번째 Promoise", new Date().toLocaleTimeString())              
            resolve()
        }, 1000)
    })
})

// Await와 async 적용 시
console.log("--Await, async")
start()

async function start() {
    await new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("세번째 Promoise", new Date().toLocaleTimeString())
            resolve()
        }, 5000)
    })
    await new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("네번째 Promoise", new Date().toLocaleTimeString())
            resolve()
        }, 3000)
    })
}