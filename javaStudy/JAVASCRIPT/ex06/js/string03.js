/*
// 문자열 나누기
const myUrl = "http://example.com/?id=12345&name=Lion&age=28"

//특정 문자를 기준으로 분리하여 배열구조 전환
// console.log(myUrl.split("&"))
const url_arr = myUrl.split("&")

/*
console.log(url_arr[0]) // http://example.com/?id=12345
console.log(url_arr[1]) // name=Lion
console.log(url_arr[2]) // age=28
*/

/*
console.log("-- 확장 for...of")
for (var value of url_arr) {
    console.log(value)
}
*/

/*
console.log("--forEach(")
url_arr.forEach((value) => {console.log(value)})

console.log("-- for")
for (i=0; i<url_arr.length; i++) {
    console.log(url_arr[i])
}
*/

/*
console.log("-- url2")
var url_arr2 = myUrl.split(/&|\?/)
url_arr2.forEach(v => console.log(v))

// -- url2
// string03.js:32 http://example.com/
// string03.js:32 id=12345
// string03.js:32 name=Lion
// string03.js:32 age=28
*/

/*
// 인수에 공백("")을 지정하면 한 글자씩 분리하여 배열로 반환
console.log("javascript".split(""))
*/

// 정규식 참고
// https://velog.io/@taek_jini/JS-%EC%A0%95%EA%B7%9C-%ED%91%9C%ED%98%84%EC%8B%9DRegular-Expression-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-%EB%B0%8F-%EC%98%88%EC%A0%9C 참고
// https://velog.io/@tnghgks/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D%EC%A0%95%EB%A6%AC

/*
// 정규식 표현 => /패턴/.test(문자열) => true/false
// 전화번호 패턴 형식
console.log(/\d{3}-\d{4}-\d{4}/.test("010-1234-1234"))
console.log(/\d{3}-\d{4}-\d{4}/.test("010-1234-1234"))
console.log(/^\d{3}-\d{4}-\d{4}$/.test("010-1354-1234"))

console.log(/j/.test("javascript"))

console.log("/j/",/j/.test("javascript"))
console.log("/^ip/",/^ip/.test("javascript"))
console.log("/^y/",/^y/.test("javascript"))
console.log("\\d",/\d/.test("javascript"))

*/
// console.log("/java.*",/java.*/.test("javascript"))
/*
// console.log(/^ip/.test("javascript"))

// 소수점 자리수 지정
var num1 = (0.33533).toFixed(2)
console.log(num1, typeof(num1)) //0.34
// console.log((0.33333).toFixed(2))
console.log((2.4).toFixed(4)) //2.4000
console.log((0.35555).toPrecision(2)) //0.36
*/

// encodeURI는 알파벳, 0~9의 숫자, ; , / ? : @ & = + $ # - _ . ! ~ * ' ( ) 를 제외한 문자를 인코딩(이스케이프 처리) 
// encodeURIComponent는 알파벳,0~9의 숫자 - _ . ! ~ * ' ( ) 를 제외한 문자를 이스케이프 처리 한다는 것

// 문자열 URI 이스케이프(escape) 처리
var url3 = "http://example.com/?id=12345&name=Lion&age=28"
var url3_ecode1 = encodeURI(url3) //"/?&=+:@$;,#"
var url3_ecode2 = encodeURIComponent(url3)

// var url3_ecode1 = encode(url3)
// var url3_ecode2 = encodeURLComponent(url3)
console.log(url3)
console.log(url3_ecode1) //인코딩된 문자
console.log(url3_ecode2)
var decode1 = decodeURI(url3_ecode1) //디코딩

var decode2 = decodeURIComponent(url3_ecode2)
console.log(decode1)
console.log(decode2)