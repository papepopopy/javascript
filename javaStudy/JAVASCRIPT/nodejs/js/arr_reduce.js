// 배열의 요소를 계산하여 하나의 값을 생성
// 배열 .reduce(콜백함수,[초기화])

const priceList = [100, 200, 300]
console.log("-- for문 합계")

priceSum = 0

for (let i=0; i<priceList.length; i++) {
    priceSum  += priceList[i]
    console.log(priceList[i], priceSum)
}

console.log("-- for문 합계 02")

for (let data of priceList) {
    priceSum += data
    // console.log(data, priceSum)
}

console.log("--배열 .reduce(): 합계")

/*
priceSum = priceList.reduce((pre, curr) => pre+curr, 1000)
console.log("sum : ", priceSum)
*/

priceSum = priceList.reduce( (pre, curr, idx) => {
    console.log("idx : " + idx + "pre : " + pre + "curr : " + curr)
    return pre + curr
}, 0)

let fac = [1, 2, 3, 4, 5].reduce((a, b) => a*b, 1)
console.log("fac : ", fac)


const array = [["바나나", "사과", "딸기"], ["귤", "포도"]]
console.log(array) // 바나나 사과 딸기 귤 포도
console.log(array[0]) // 바나나 사과 딸기
console.log(array[1]) //귤 포도

console.log(array[0][1]) //사과

// 2차 배열 => 1차 배열 전환 => 플래트닝(Flattening)
const flattenedArray = array.reduce((a, b) => a.concat(b))
console.log(flattenedArray) // 바나나 사과 딸기 귤 포도
console.log(flattenedArray[4]) //포도