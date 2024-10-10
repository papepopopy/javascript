num = [10, 20, 30, 40, 50]
sum = 0

// 1. for(제어문): sum= 150
for (let i= 0; i<num.length; i++) {
    sum += num[i]   ;
}
console.log(sum)

// 2. for(변수 of 배열) :sum= 150

sum = 0;

for(const element of num) {
    // console.log(element);
    sum += element;
}
console.log(sum);

// 3. 배열.forEach :sum= 150
sum = 0

num.forEach(function(e) {
    sum += e;
});
console.log(sum)

// 4. 배열.reduce() :sum => 150

const result = num.reduce((a,b) => {
    return a + b;
}, 0)

console.log(result)