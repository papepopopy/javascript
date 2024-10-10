// getElementById = 클래스
// querySelector = 태그이름
// .querySelectorAll = 전체 해당



// document.getElementById("header").innerHTML = "태그 선택자 입니다."
// document.getElementById("header").style.color= '#0000ff'
// document.getElementById("header").style.backgroundColor= '#00ffff'

// let header = document.getElementById("header")
// var header = document.querySelector("#header")

// var header = document.querySelector("h1")

// header.innerHTML = "태그 선택자 입니다."
// header.style.color= '#0000ff'
// header.style.backgroundColor= '#00ffff'

// 

// 적용되어지지 않음
var header = document.querySelectorAll("h1")

for (i=0; i<header.length; i++) {
    header[i].innerHTML = "태그 선택자 입니다.";
    header[i].style.color= '#0000ff';
    header[i].style.backgroundColor= '#00ffff';
}
