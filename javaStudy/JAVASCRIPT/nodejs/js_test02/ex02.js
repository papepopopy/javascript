// API 통신
class ApiResultData {

    // 속성 초기화
    constructor() {
        this.result
        this.errorMessage
        this.userName
        this.age
    }
}

// response 데이터 변환
function parseData(response) {
    // parseData(apiResponse) parseData 함수를 호출하여 apiResponse객체를 파싱하는 부분

    console.log("response =>", response)
    
    // ApiResultData를 객체로 변환
    const apiResultData = new ApiResultData()

    // 데이터 객체 정의
    apiResultData.result = response.result
    apiResultData.errorMessage = response.error_message
    apiResultData.userName = response.user_name
    apiResultData.age = response.age

    console.log(apiResultData.userName, apiResultData.age)
}

const apiResponse = {
    result: true,
    user_name: "강감찬",
    age: 10,
    error_message: "정상처리됨"
}

// // 데이터 구조 확인
console.log(apiResponse) // { result: true, user_name: '강감찬', age: 10, error_message: '정상처리됨' }

// // 함수 호출(실행)
parseData(apiResponse) // response => { result: true, user_name: '강감찬', age: 10, error_message: '정상처리됨' } 강감찬 10
