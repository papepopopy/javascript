// 요소의 개별 변수에 분활 대입(할당)
let a, b, c 
[a, b, c] = [1, 2, 3]
console.log(a, b, c)

console.log("---")
const array = ["홍길동", "홍길순"]; //문장 끝을 알리는 세미콜론
[array[0], array[1] = array[1], array[0]]
console.log(array)

// // 배열 섞기(셔플)
const arr = [1, 2, 3, 4, 5] // arr = 1, 2, 3, 4, 5 
const arr_len = arr.length // arr_len = 5
console.log(arr, arr_len)
console.log("---")
// 피셔 예이츠 알고리즘
for (let i=arr_len-1; i>=0; i--) { // i=4;  i>=0; i-1
    console.log(i) // 0~4
    const rnd = Math.floor(Math.random() * (i+1)); // 4+1 랜덤
    [arr[i], arr[rnd]] = [arr[rnd], arr[i]]; // arr[i] = arr[rnd] / arr[rnd] = arr[i]
    console.log(i, rnd) // i= 4~0 / rnd = 1~3
}
console.log(arr) // [ 1, 4, 5, 3, 2 ] 5~1사이에 숫자가 매번 달라진다. 