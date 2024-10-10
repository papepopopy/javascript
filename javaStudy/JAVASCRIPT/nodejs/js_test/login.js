// load => DOMContentLoaded을 사용하여 접속 전 실행
    const checkLabel = document.querySelector(".form-check-label")
    const cookies = document.cookie.split(";");
    
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split("="); //빈칸과 기호를 빼기
        if(name.trim() === "checkLabelClicked" && value.trim() === "true") { //버튼 클릭했거나 클릭 되어있으면
            checkLabel.disabled = true // 버튼 비활성화
        }
    })
    
    // 쿠키 값 설정
    // const idData = loginBtn.value
    // document.cookie = encodeURIComponent(idData)
    
    // const cookie = convertCookieToObject(document.cookie) //쿠키 문자열을 자바객체로 변환
    // console.log(cookie)
    
    
    
    let jsonString = ""
    
    // 쿠키 값 불러오기
    
    checkLabel.addEventListener("click", () => {
        const password = document.querySelector("#floatingPassword")
        const loginBtn = document.querySelector(".login")
        const joinBtn = document.querySelector(".join")
        const username = document.querySelector("#floatingId")
        const idData = username.value
        console.log(idData)
        
        document.cookie = `id = ${encodeURIComponent(idData)}`
        
        // 쿠키 시간 계산
        var expiryDate = new Date(); // expiryDate 쿠기
        // expiryDate.setHours(expiryDate.getHours() + 1);
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `id=${encodeURIComponent(idData)}; expires=${expiryDate.toUTCString()}`;

        const jsonString = JSON.stringify({
            idData: idData,
            expiryDate: expiryDate.toUTCString()
        })
        // .replace(/"/g, "")
        
        const idDataValue = JSON.parse(jsonString).idData
        console.log(idDataValue)

        // username.value = jsonString


        let errStack = 0; //초기화
    
        loginBtn.addEventListener("click", () => {
            if (username.value === "1234") {
                if (password.value === "1234") {
                    alert("로그인 되었습니다.")
                } else {
                    alert("비밀번호를 다시 한 번 확인해주세요")
                    password.focus()
                    username.value = idDataValue
                    password.value=""
                    return
                    
                }
            } else {
                alert("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.")
                username.focus()
                username.value = idDataValue
                password.value=""
                return
            }
        })

        // 회원가입 클릭 시
        joinBtn.addEventListener("click", () => {
            location.href = "./join.html"
        })
    })
    
    




