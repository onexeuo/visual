$(function(){
    // $("#div1").click(function(){
    //     $("#result").html("div1 클릭!");
    // })
    // $("#div1").mouseenter(function(){
    //     $("#result").html("div1에 마우스 진입!");
    // })
    // $("#div1").mouseleave(function(){
    //     $("#result").html("div1에 마우스 나감!");
    // })
    $("#div1").hover(function(){
        $("#result").html("div1에 마우스 진입!");
    }, function(){
        $("#result").html("div1에 마우스 나감!")});
    
    // $("#div1").mousedown(function(){
    //     $("#result").html("div1에서 마우스 댜운!");
    // })
    // $("#div1").mouseup(function(){
    //     $("#result").html("div1에서 마우스 업!");
    // })

    $("#div1").dblclick(function(){
        $("#result").html("div1에서 더블클릭!");
    })
    // $("#txt1").keydown(function(){
    //     $("#result2").html("키보드 다운!");
    // })
    // $("#txt1").keyup(function(){
    //     $("#result2").html("키보드 업!");
    // })

    // $("#txt1").focus(function(){
    //     $("#result2").html("txt1 포커스!");
    // });
    // $("#txt1").blur(function(){
    //     $("#result2").html("txt1 블러!");
    // });
    // $("#txt1").keypress(function(){
    //     $("#result2").html("키보드 프레스!");
    // });

    //$(this) : 현재 이벤트를 전달받은 객체(엘리먼트)
    $("input").focus(function(){
        $("#result2").html($(this).attr("id") + "포커스 받음");
    })

    //실습1 ) 두개의 input엘리먼트에 글자를 타이핑하면 타이핑한 글자가 result2영역에 표시되도록
    $("input").keypress(function(){
        $("#result2").html($(this).val());
    })

    //실습2 ) 두개의 input엘리먼트에 포커스를 주면 포커스를 받은 input 의 배경색을  #eee로 변경 포커스를 잃으면 #fff
    $("input").focus(function(){
        $(this).css("background-color","#eee")
    });
    $("input").blur(function(){
        $(this).css("background-color", "#fff")
    });


});