const arr = [2, 1, 3, 10]
const arr2 = arr.concat() //복사
const arr3 = arr.concat()

console.log(arr)
console.log(arr2)

arr3.sort //오름차순
console.log(arr3)

arr3.reverse() //내림차순
console.log(arr3)

// 숫자 일 경우
arr.sort(function(a,b) {
    return a - b //오름차순
})
arr.sort(function (a, b) {
    return b - a //내림차순
}) 

// 문자 일 경우
const arr_str = ["김길순", "홍길동", "여우"]
arr_str.sort() //오름차순
console.log(arr_str)

arr_str.sort(function(a, b) { //내림차순
    if (a>b) return -1
    if (a<b) return 1
    if (a==b) return 0
})
console.log(arr_str)
*/

// 데이터
const userDataList = [
    {id:2, name: "곰"},
    {id:10, name: "여우"},
    {id:4, name: "사자"},
    {id:29, name: "기린"},
    {id:101, name: "호랑이"}
]

// 데이터표시
function updataList(){
    let ul_html = ``;
    
    for(const data of userDataList) {
        console.log(data)

        ul_html += `<li>${data.id} : ${data.name}</li>`
    }
    
    document.querySelector(".result").innerHTML = ul_html

    // document.querySelector(".result").innerHTML = "<li>test</li>"
}

// 오름차순 정렬
function sortByAsc(){
    // alert("오름차순 버튼")
    userDataList.sort((a,b) => a.id - b.id)
    for (const data of userDataList) {
        console.log(data)
    }
    updataList()
}

// 내리차순 정렬
function sortByDesc(){
    // alert("내림차순 버튼")
    userDataList.sort((a, b) => b.id - a.id)
    for (const data of userDataList) {
        console.log(data)
    }
    updataList()
}

// 정렬 버튼 이벤트 등록
document.querySelector(".asc").addEventListener("click", () => {
    sortByAsc()
})
document.querySelector(".desc").addEventListener("click", () => {
    sortByDesc()
})