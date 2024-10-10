let num1 = 5

// 비교연산
console.log(num1 == 5) 

// 대입문
// console.log(num1 == 10)
console.log(Boolean(num1 = 10))
console.log("-----")


for (let i=1; i<=10; i++) {
    // if (i<5) continue;
    // if (i==5) break;
    if (i=5) break; 
    console.log("반복구간", i)
}


/*
for(초기치;조건식'증감치) {
    반복처리할 내용
}
*/
/*
for (let i=0; i<5; i++) {
    console.log("반복처리구간", i)
}
*/
/*
for (let i=1; i<=10; i++) {

    // 특정 숫자를 건너띄기
    // if (i==5) continue;
    if (i%3==0) continue;

    console.log("반복!", i)
}
*/