$(function(){
    // 요소 중 text1(내용)가 들어간 요소
    // $(".inner_1 p:contains(text1)").css("background-color", "#ff0")

    // 선택한 하위 요소의 텍스트와 태그 노드
    // $(".inner_1 p").contains().css("background-color", "#ff0")

    // 선택 요소중 특정요소
    // $(".inner_1 p:has(strong)").css("background-color", "#ff0")

    // 선택 요소 제외
    // $(".inner_2 p").not(":first").css("background-color", "#ff0")
    // $(".inner_2 p").not(":nth-child(2)").css("background-color", "#ff0")

    // $(".inner_2 p").eq(2).css("background-color", "#ff0")
    // $(".inner_2 p").eq(2).end().css("background-color", "#ff0")

    // find() => 수직, filter => 형제(수평)
    // $(".inner_1").find(".txt1").css("border", "1px solid red")
    // var inner_1 = $(".inner_1")
    // inner_1.find("> .txt1").css("border", "1px solid red")

    // 형제노드
    // var inner_2 = $(".inner_2 p")
    // inner_2.filter(":nth-child(2)").css("color", "red") //text5
    // $(".inner_2 p").filter().css("color", "red") //text5

    // 특정조건 부합 요소
    // inner_2.filter(function(idx, obj) {
    //     console.log(idx, obj)
    //     return idx%2 == 0
    // })
    // .css("color","green")
    
    // var rsl = $(".inner_2 p").eq(2).is(":visible")
    // console.log(":visible => ", rsl)
    // var rsl = $(".inner_2 p").eq(3).is(":visible")
    // console.log(":visible => ", rsl)

    // var rs3 = $("#chk1").is(":checked")
    // console.log(":checked => ", rs3)
    // var rs4 = $("#chk2").is(":checked")
    // console.log(":checked => ", rs4)
    
    /////////////////////////////////////////////////

    // var name = $(".name").html()
    // console.log(name)

    // var age = $(".age").text()
    // console.log(age)

    // $(".name").html("<i>홍길동</i>")
    // $(".age").text("<i>10</i>")

    // var attr = $('.name').attr("class")
    // console.log(attr)

    // $(".name").attr("id","name")
    // $(".name").removeAttr("my")

    var src = $(".box5 img").attr("src")
    console.log(src)
    $(".box5 img").attr({
        "width": 150,
        "src": src.replace("1.jpg", "2.jpg"), // 2.jpg로 변경
        "alt": "바위"
    }).removeAttr("border")
    
    $(".box6 p:nth-child(1)").addClass("add")
    $(".box6 p:nth-child(2)").removeClass("block")
    
    // $(".box6 p:nth-child(1)").hasClass()
    var is_has1 = $(".box6 p:nth-child(1)").hasClass("add")
    var is_has2 = $(".box6 p:nth-child(2)").hasClass("block")
    console.log(is_has1, is_has2) //true false

    $(".box6 p:nth-child(3)").toggleClass("block")
    $(".box6 p:nth-child(4)").toggleClass("block")
})