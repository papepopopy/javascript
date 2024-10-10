// API 통신 결과
class ApiResultData {

    // 생성자를 통해서만 만들수 있음
    constructor() {
        this.result; //안에있는 변수
        this.errorMessage
        this.userName
        this.age
    }

}

// response 데이터 변환
function parseData(response) { // 답변
    const apiResultData = new ApiResultData() //변수 제작

    apiResultData.result = response.result
    apiResultData.errorMessage = response.error_message
    apiResultData.userName = response.user_name
    apiResultData.age = response.age
    
    console.log(apiResultData.userName, apiResultData.age) //강감찬 10

}

const apiResponse = {
    result: true,
    user_name: "강감찬",
    age: 10,
    error_message: "정상처리됨."
}
// console.log(apiResponse) //{ result: true, user_name: '강감찬', age: 10, error_message: '정상처리됨.' }


// 함수호출
parseData(apiResponse)