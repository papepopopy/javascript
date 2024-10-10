// 검색어
const searchWordText = document.querySelector("#search_word_input")

// 지역리스트
const prefectureList = document.querySelectorAll("#prefecture_list button")


// 문자가 입력될 때마다 데이터 체크 작업 실행
// 객체 .addEventListener(이벤트종류, 이벤트가 발생할 경우 처리함수 호출 및 정의)
searchWordText.addEventListener("keyup",()=> {
    // alert("keyup 이벤트 발생했습니다.")
    // console.log("2222")

    // 입력한 검색어
    const searchWord = searchWordText.value
    console.log("입력한 문자 :" +searchWord)

    // console.log(prefectureList)
    // 리스트 루프 처리 => button 요소를 하나씩 읽어옴
    prefectureList.forEach((btn) => {
        // 검색어가 없으면 모든 요소를 표시
        if (searchWord == "" || searchWord) {
            // alert("검색어가 없음.")
            // console.log("검색어가 없음.")

            // 요소.classList add(). .remove(), .toggle() => class 추가, 삭제, 수정
            // btn.classList.add("hide") // button 요소에 "hide" class를 추가
            btn.classList.remove("hide") //클래스 이름 삭제
            // console.log(btn)
        }

        // 태그요소 속성중 dataset 값 읽어오기
        const prefectureName = btn.dataset.name;
        const phonetic = btn.dataset.phonetic;
        // console.log(btn, prefectureName, phonetic)

        // 검색어와 첫 번째 글자 일치 여부에 따라 hide 클래스 사용
        if(searchWord.charAt(0) == prefectureName.charAt(0) 
            || searchWord.charAt(0) == phonetic.charAt(0)) {
            btn.classList.remove("hide") //표시
        } else {
            btn.classList.add("hide") //숨기기
        }

        // btn.classList.remove("btn")
        // console.log(btn)
    })


    // const searchWord = searchWordText.value
    // console.log(searchWord)


    /*
    if (!searchWord || searchWord="") {
    }
    prefectureList.forEach(()=>{

    });*/
})


// 변수, 배열구조, 객체구조
// forEach()
/*
console.log("--배열읽기1")
console.log(data[0])
console.log(data[1])
console.log(data[2])


console.log("--배열읽기2:for")
for (i=0; i<data.length; i++) {
    console.log(data[i])
}

console.log("--배열읽기2:확장 forEach()")
// 배열객체. forEach(배열객체 안에 있는 데이터를 순차적으로 
data.forEach((item)=>{
        console.log(item)
})
*/
// for (1=0; i<data.length; i++) {
//     console.log(data[i]) //data[i] => data[0], data[1], data[2]
// }

// data.forEach((item) => {
//     console.log(item)
// })


/*
// 공백 자르기
console.log("trim()","hello!".length, "hello!" .trim().length)

const str1 = "javascript good!!"

//첫번째 위치 : index 0번
console.log(str1.indexOf("javascript")) 
console.log(str1.indexOf("script")) 
console.log(str1.indexOf("python")) 

//없으면 -1 반환
if (str1.indexOf("python")< 0) {
    console.log("python 문자열을 포함하고 있지 않습니다.")
}
else {
    console.log("찾고자 하는 문자열을 포함하고 있습니다.")
}

// 특정 인덱스 번호부터 검색
 console.log(str1.indexOf("a", 3)) 

 console.log(str1.search(/javascript/))
 console.log(str1.search(/script/))
 console.log(str1.search(/python/))
//  -1 = 없다

console.log(str1.includes("javascript"))

console.log("startsWith", str1.startsWith('ja'))
console.log("endsWith", str1.endsWith('!!'))

// 특정 위치에 있는 문자열 추출
console.log("javascript".charAt(0))


*/