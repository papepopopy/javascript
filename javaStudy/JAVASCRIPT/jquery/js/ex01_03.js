$(function() {
    // $(".box2 a[target]").css("color","#f00")
    // $(".box2 a[href^=https]").css("color","#f00") //네이버
    // $(".box2 a[href$=net]").css("color","#f00") //다음
    // $("#member_f :text").css("color","#f00")
    // $("input[type=text]").css("color","#f00")
    // $("#member_f :password").css("background-color","#00f")
    $(".box3 p:hidden").css({
        "display":"block",
        "background-color":"#ff0"
    })
    var z1 = $(".zone1 :selected").val()
    console.log("선택된 항목 : ", z1)

    var z2 = $(".zone2 :checked").val()
    console.log("선택된 항목 : ", z2)

    var z3 = $(".zone3 :checked").val()
    console.log("선택된 항목 : ", z3)

    $("#course").on("change",function(){
        let val = $("#course option:selected").val()
        console.log(val)
    })
})