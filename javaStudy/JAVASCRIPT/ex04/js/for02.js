// 다중 for

// 테이블 구조 만들기
// let num1 = 100
// console.log(num1)

// num1 += 100
// console.log(num1)

// table => tr*5 => td*5

let count = 0
let table_str = "<table border=1 width=200>"
for (let i=1; i<=5; i++) {
    table_str += "<tr>"
    for (let i=1; i<=5; i++) {
        /*
        table_str += "<td>"
            // table_str += i
            table_str += ++count
        table_str += "</td>"
        */
       
        table_str += `<td>${++count}</td>`
    }
    table_str += "</tr>"
}

table_str += "</table>"

console.log(table_str)
document.write(table_str)

/*
// 단을 입력하면 단에 대한 곱을 출력
let dan = prompt("단 입력 :","2")
console.log(dan)

document.write(dan+"단<br>") // ~단
for (let i=1; i<=9; i++) { // 1~9
    document.write(`${dan}x${i}=${dan*i}<br>`) // (1~9)x'입력 숫자'
}
*/


// 구구단  => 다중 for
/* 
    2*1 = 2 ...  2*9 = 18
    ~
    3*1 = 3 ...  3*9 = 27
    ~
    9*1 = 9 ...  9*9 = 81

    => i*j
*/
/*
for (let i=2; i<=9; i++) { //2~9
    document.write(`<br><br>--- ${i}단 ---`)
    document.write("<hr>")
    for (let j=1; j<=9; j++) { //1~9
        document.write(`<b>${i}x${j}=${i*j}</b> / `)
    }
}
*/


/*
// i++ => i+=1 => i=i+1

// 반복구간 outer for
for (let i=1; i<=3; i++) { //i = [1, 2, 3]

    // 반복구간 inner for
    for(let j=1; j<=3; j++) { //j = [1, 2, 3]
        console.log(i, j)
    }
}
*/