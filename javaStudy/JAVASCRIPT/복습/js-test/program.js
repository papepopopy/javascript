num = [10, 20, 30, 40, 50]
sum = 0

// 1. for(제어문): sum= 150
// for (let i= 0; i<num.length; i++) {
//     sum += num[i]
// }
// console.log(sum)

// for (let i=0; i<num.length; i++) {
//     sum += num[i]
// }
// for(let i=0; i<num.length; i++){
//     console.log(num)
//     sum+=num[i]
// }

// 2. for(변수 of 배열) :sum= 150

// for(const element of num) {
//     // console.log(element);
//     sum += element;
// }
// console.log(sum);

// for(const i of num) {
//     sum += i
//     // 0 + num하나씩
// }

// 3. 배열.forEach :sum= 150

// num.forEach(function(e) {
//     sum += e;
// });
// console.log(sum)

// num.forEach(function(e){
//     sum += e;
// })

// 4. 배열.reduce() :sum => 150
// num = [10, 20, 30, 40, 50]
// sum = 0

// const result = num.reduce((a,b) => {
//     return a + b;
// }, 0)

// console.log(result)

num = [10, 20, 30, 40, 50]
sum = 0

const sum = num.reduce((a,b) => {
    return a + b;
}, 0)


console.log(sum)