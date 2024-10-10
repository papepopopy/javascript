const items = [10, 20, 30, 40]
items.push("길순이")
console.log(items) //[ 10, 20, 30, 40, '길순이' ]

const userIdList = new Set(); //중복된 요소를 받지 않음
userIdList.add("20")
userIdList.add("20")
userIdList.add("20")
userIdList.add("10")
console.log(userIdList) //Set(2) { '20', '10' }

// const userIdList = new Set(items)
console.log(userIdList)

const valueSet = userIdList.values()
for(let value of valueSet) {
    console.log(value)
}
console.log(valueSet) //[Set Iterator] {  }

userIdList.forEach((value) => console.log(value))

userIdList.delete(40)
userIdList.forEach((value) => console.log(value))

console.log(userIdList.has(40))

userIdList.clear()
userIdList.forEach((value) => console.log(value))

// 맵 초기화
const memberList = new Map()
memberList.set(1, "홍길동")
memberList.set(2, "홍길선")
memberList.set(2, "홍길윤") //key 값은 중복되지 않음, 데이터만 변경
memberList.set(3, "홍길순")
console.log(memberList)
console.log(memberList.get(2)) //key 값에 맞춰 답이 나옴
console.log(memberList.has(2)) // 있는지 없는지
console.log(memberList.delete(2)) //2번 삭제
console.log(memberList.keys()) //{ 1, 3 }
console.log(memberList.values()) //{ '홍길동', '홍길순' }
console.log(memberList.entries()) //{ [ 1, '홍길동' ], [ 3, '홍길순' ] }

memberList.forEach((v,k) => {
    console.log(`key : ${k}, value ; ${v}`)
})

console.log(memberList)
console.log(memberList.size) //갯수
const memberList2 = new Map([[1, "홍길동"],[2, "홍길순"]])
console.log(memberList2)
