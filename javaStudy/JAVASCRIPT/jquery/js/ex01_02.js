$(function(){
    // $("#menu li:first").css("background-color","#0ff")
    
    // $("#menu li:last").css("background-color","#0ff") // 아래와 동일
    // $("#menu li").last().css("background-color","#0ff")

    // $("#menu li:odd").css("background-color","#0ff") //짝수
    // $("#menu li:even").css("background-color","#0ff") //홀수
    // $("#menu li").eq(0).css("background-color","#0ff") //인덱스 번호 위치!
    // $("#menu li:lt(2)").css("background-color","#0ff") // it보다 적은 lt(2) => 0, 1
    // $("#menu li:gt(2)").css("background-color","#0ff") 
    // $("#menu li:nth-child(2n)").css("background-color","#0ff") //짝수
    // $("#menu li:nth-child(2n+1)").css("background-color","#0ff") //홀수
    // $("li:last").css("background-color","#0ff") 
    // $("#menu li:first-of-type").css("background-color","#0ff")
    // $("#menu li").slice(1,2).css("background-color","#0ff") //범위
    
    // forEach문
    // $.each($("#menu li"), function(idx, obj){ //(index, object)
    //     console.log(idx, obj)
    //     console.log(idx, $(this))

    // })

    // const arr = $("#menu li") //그룹핑, 배열구조
    // // console.log(arr)

    // $(arr).each(function(idx, obj){
    //     console.log(idx, obj)
    //     console.log(idx, $(this))
    // })

    // $(arr).each((idx, obj) => {
    //     console.log(idx, $(this))
    //     console.log(idx, obj)
    // })

    // $.map() : 각 요소를 변환하고, 그 결과로 새로운 배열을 반환
    // $.grep() : 반복수행하고 오름차순으로 배열 데이터 추출
    
    const info = [
        {"area":"서울", "name":"홍길동"},
        {"area":"부산", "name":"홍길동"},
        {"area":"대전", "name":"홍길동"}
    ]
    const info2 = $.map(info, (a,b) => {
        console.log(a,b)
        if(a.area == "서울") return a
    })
    console.log("area : ",info2)

    const info3 = $.grep(info, (a,b) => {
        console.log(a,b)
        if(a.area == "서울") return true
        else return false
    })
    console.log("area : ",info3)

    // 선택자의 인덱스 추출
    const idx = $("#menu li").index($("#item"))
    console.log("idx =", idx)


})