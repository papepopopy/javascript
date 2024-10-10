var name1 = "홍길순" // 전역변수

function fun_local() {
    var name2 = "홍길동" // 지역변수
    name3 = "강감찬"

    console.log("name1"+name1)
    console.log("name2"+name2, name3)
}
function fun_local2() {
    var name2 = "홍길동22222" // 지역변수
    console.log("name1"+name1)
    console.log("name2"+name2, name3)
}

fun_local() //name1홍길순 name2홍길동
fun_local2() //name1홍길순 name2홍길동22222
console.log(name1, name3) // name2의 값이 나와지지 않음

/*
var return_str = () => "홍길동 만세"
var return_num = (num1) => num1*num1
var return_num2 = (num1) => {return num1*num1}

document.write(return_str()) //홍길동 만세
document.write("<br>"+return_num(9))
document.write("<br>"+return_num2(9))
*/
/*
var mySum2 = (start, end) => {
    if (start > end) {
        alert("인자값이 문제가 있습니다.")
        return
    }
    var sum = 0
    for (i=start; i<=end; i++) {
        sum += i
    } 
    document.write(sum+ "<br>")

    return(sum)
}

mySum2(10, 20)
var tot = mySum2(1,2)
document.write(`<h3>${tot+10000}</h3>`)
*/
/*
var sum = 0
for(i=s; i<=e; i++) {
    // s부터 e까지
    sum += i
}
*/
/*
function mySum(s, e) {

    if (s>e) {
        alert("인자값이 문제가 있습니다.")
        return
    }
    var sum = 0
    for (i=s; i<=e; i++) {
        sum += i
    } 
    document.write(sum+"<br>")
    mySum(1, 8)
    mySum(1, 1000)

}
mySum(10, 20)
*/


// 익명함수 선언 호출보다 먼저 선언
/*
var myPrn2 = (str) => {
    for(i=1; i<=10; i++) {
        document.write(str)
        document.write("<hr>")
    }
}

myPrn2("@")
*/

// 함수 정의

/*
function myPrn(str) {
    for(i=1; i<=10; i++) {
        document.write(str)
        document.write("<hr>")
    }
}

// str = ""
myPrn("@")
*/

