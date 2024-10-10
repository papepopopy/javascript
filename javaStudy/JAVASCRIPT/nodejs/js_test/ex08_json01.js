// JSON은 범용적인 데이터 형식
/*
{
    "age": 40,
    "grade": 4,
    "student" : 40
    "classes": [
        {"name" : "홍길동", "address": "busan"},
        {"name" : "홍길동", "address": "busan"},...
    ]
}
*/

const data = `{"name":"길순", "age": 20}`
// 문자열을 전환
const info = JSON.parse(data)
console.log("json형식 문자열", data)
console.log("json객체", info)
console.log(info.name, info.age)

// JSON객체 문자열 전환
const info_string = JSON.stringify(data)
// stringify : JSON 데이터를 문자열로 변환하는 메서드
console.log(info_string)

const obj = {
    pref: "seoul",
    orange: 100,
    flag: true,
    apple: 100
}
const replacer = (key, value) => {
    if (typeof value === "number") {
        return undefined;
    }
    return value
}
// str1 = JSON.stringify(obj)
const str1 = JSON.stringify(obj)
console.log(str1)

// str2 = JSON.stringify(obj, replacer, "")
const str2 = JSON.stringify(obj, replacer, "")
console.log(str2)