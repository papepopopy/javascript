// 출력용 데이터 배열
const userList = [
    {id:1, name:"곰", address:"서울시"},
    {id:2, name:"여우", address:"대전시"},
    {id:3, name:"사자", address:"부산시"},
]
// console.log("userList :", userList)

// document = body
const container = document.querySelector(".container")
// console.log(container)
/*
// container.innerHTML = "홍길동"
container.innerHTML = "홍길동01<br>"
container.innerHTML += "홍길동02<br>"
container.innerHTML += "홍길동03"
*/

// userList 배열의 각 요소별 루프 처리
userList.forEach((userData) => {
    // console.log(
    //     userData.id, 
    //     userData.name, 
    //     userData.address)
        
    // container.innerHTML += userData.id
    // container.innerHTML += userData.name
    // container.innerHTML += userData.address

    container.innerHTML += 
    `<div class="card">
        <h2>${userData.name}</h2>
        <p>${userData.address}</p>
    </div>`

})