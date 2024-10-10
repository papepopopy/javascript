/*
 switch문 : 조건을 만족하는 다수의 데이터를 처리

 switch(식) {
    case 값 :
    - 처리
    - break

    case 값 :
    - 처리
    - break

    default : 
    - 처리
 }

 */

 let str1
 str1 = prompt("영문자 1개 입력 : ", "a")
 switch(str1) {
    case "a":
    case "A":
        console.log("영문자 Adlqslek.")
        break

    case "b":
    case "B":
        console.log("영문자 B입니다.")
        break

    default:
        console.log("영문자 A,B가 아닙니다.")
 }
//  console.log(str1)

 let num1 = 1

 switch(num1) {
    /*
    case 1 :
        console.log("숫자1")
        break
    case 2 : 
        console.log("숫자2")
        break
    default :
    console.log("나머지 수")
    */
    case 1 :
    case 2 :
    case 3 :
    case 4 :
        console.log("숫자 4이하")
        break
    case 5 :
    case 6 :
    case 7 :
        console.log("숫자 7이하")
        break
    case a :
        console.log("이상행...")
        break
    default:
        console.log("해당되지 않는 숫자")
 }