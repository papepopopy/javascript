/*
// 1~10까지의 짝수의 합과 홀수의 합을 구하는 프로그램 작성
var i = 0
var odd_sum = 0, even_sum = 0


for (i=1; i<=10; i++) { //1~10
    if(i%2 == 0) {//짝수  2 4 6 8 10
        console.log("짝수 : " +i)
        even_sum += i
    } else {
        console.log("홀수 : " +i)
        odd_sum += i
    }

}
console.log(`짝수 합 ${even_sum} , 홀수 합 ${odd_sum}`)

*/