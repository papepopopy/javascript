/*

배열.find(콜백함수) / 콜백함수 조건에 맞는 첫 요소
배열 .findIndex(테스트함수) / 콜백함수 조건에 맞는 첫 요소 인덱스

*/

const myArray = ["1", "2", "3", "4", "5" ]

const targetUser = myArray.find((data) => (data)==1)
console.log(targetUser) //1

const targetUserIndex = myArray.find((data) => data == "2")
console.log(targetUserIndex) //2

// 유저 정보 배열에서 가져온 데이터를 표시

// id 키와 name키를 가지는 데이터배열
const userDataList = [
    {id : 123, name : "곰"},
    {id : 456, name : "사자"},
    {id : 789, name : "여우"}
]

// 검색 ID 입력창
const searchIdInput = document.querySelector("#search-id-input") //search-id-input => searchIdInput
// console.log(searchIdInput) 

// 검색 결과
const searchResult = document.querySelector("#search-result") //search-result => searchResult
// console.log(searchResult)

// 이벤트 핸들러 
searchIdInput.addEventListener("keyup",() => {
    // 문자열 => 숫자열로 변환
    const searchId = Number(event.target.value)

    console.log("키워드 :", searchId)
    findUser(searchId)
})


