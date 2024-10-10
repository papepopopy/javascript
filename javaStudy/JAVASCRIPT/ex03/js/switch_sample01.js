// 내장함수
// console.log(Math.random()*10) //1.~

// 절대값
// console.log(Math.abs(-1)); // 1

// 최대값, 최소값 
// console.log(Math.max(1, 5)); //5
// console.log(Math.min(1, 5)); //1

// 자바 제곱, 제곱근
// console.log(Math.pow(5, 2)); //25
// console.log(Math.sqrt(25)); //5

// console.log(Math.pow(2, 2)); //4
// console.log(Math.sqrt(36)); //6

// console.log(Math.ceil(10.0)) //10
// console.log(Math.ceil(15.3)) //16
// console.log(Math.ceil(10/4)); //3
// console.log(Math.ceil(1/10)); //1




// 0 ~ n-1 사이 숫자 발생

// 자리 내림
// console.log(Math.floor(Math.random()*10)+1) //1~3

// 자리 올림
// console.log(Math.ceil(Math.random()*10))


// 1~3 사이 난수 발생
var com = Math.ceil(Math.random()*3)
console.log("컴퓨터: " +com)

var game = prompt("가위, 바위, 보","가위")

var gameName 
switch(game) {
    case "가위":
        gameName = 1
        break
    case "바위":
        gameName = 2
        break
    case "보":
        gameName = 3
        break
    default:
        alert("잘못 작성하였습니다.")
}

if (com===gameName) {
    document.write("맞다.")
} else {
    document.write("틀림")
}

/*
// 1~3사이 난수 발생
var com = Math.ceil(Math.random()*3)
console.log("컴퓨터:"+com)

document.write("<h1>컴퓨터 가위, 바위, 보</h1>")
var game = prompt("가위, 바위, 보 중 선택?", "가위")

var gameName
switch(game) {
    case "가위":
        gameName = 1
        break
    case "바위":
        gameName = 2
        break
    case "보":
        gameName = 3
        break
    default:
        alert("잘못 작성하였습니다.")
}


console.log("내:" +gameName)
if (com === gameName) {
    document.write("잘 맞췄습니다. 축하 드립니다.")
} else {
    document.write("졌다")
}
*/

/*
// 1~3사이 난수 발생
var com = Math.ceil(Math.random()*3)
console.log("컴퓨터:"+com)

document.write("<h1>컴퓨터 가위, 바위, 보</h1>")
var game = prompt("가위, 바위, 보 중 선택?", "가위")

var gameName
switch(game) {
    case "가위":
        gameNume = 1
        break
    case "바위":
        gameNume = 2
        break
    case "보":
        gameNume = 3
        break
    default:
        alert("잘못 작성하였습니다.")
}


console.log("내:" +gameNume)
if (com === gameNume) {
    document.write("잘 맞췄습니다. 축하 드립니다.")
} else {
    document.write("졌다")
}
*/
/*
let site = prompt("네이버, 다음, 네이트, 구글\
 중 즐겨 사용하는 포털 검색 사이트는?", "")

 switch(site) {
    case "구글" :
        url = "www.google.com"
        break
    case "네이버":
        url = "www.naver.com/"
        break
    case "다음":
        url = "www.daum.net/"
        break
    case "네이트":
        url = "www.nate.com/"
        break
    default:
        alert("보기에 없는 사이트 입니다.")
 }
 */
 /*
 var win = window.open("about:blank")
 if (url) {
     win.location.href = "http://" + url
     //새창 띄우기
     win.location.target = _blank
 }
 */
/*
 if (url) {
    //  win.location.href = "http://" + url
     //새창 띄우기
     window
     .open("about:blank")
     .location
     .href = "http://" + url
 }
 */
/*
 if (url) {
    //새창 띄우기
    window.open("http://"+url,"_blank")
}
*/