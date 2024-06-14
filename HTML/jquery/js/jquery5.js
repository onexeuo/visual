$(function(){
    // $("#btn1").click(function(){
    //     // $("#div1").hide(2000);    
    // });

    document.getElementById("btn1").addEventListener("click",function(){
        document.getElementById("div1").style.display = "none";
    });
    
    // $("#btn2").click(function(){
    //     $("#div1").show(2000);
    // });

    document.getElementById("btn2").addEventListener("click",function(){
        document.getElementById("div1").style.display = "block";
    });

    $("#btn3").click(function(){
        $("#div1").toggle();
    });

    // document.getElementById("btn3").addEventListener("click", function(){
    //     const div1 = document.getElementById("div1");
    //     if(div1.style.display=="block"){

    // }
    // })

    $("#btn4").click(function(){
        $("#div1").fadeIn(3000);
    });

    $("#btn5").click(function(){
        $("#div1").fadeOut(3000);
    });

    $("#btn6").click(function(){
        $("#div1").fadeToggle(3000);
    });

    $("#btn7").click(function(){
        $("#div1").slideUp(3000);
    });

    $("#btn8").click(function(){
        $("#div1").slideDown(3000);
    });

    $("#btn9").click(function(){
        $("#div1").slideToggle(200);
    });

    $("#btn10").click(function(){
        $("#div1").animate({
            width:"+=50px",
            borderWidth: "+=8px"
        }, "fast");
    });

    $("#btn11").click(function(){
        $("#div1").fadeOut(1000).slideDown(1000).animate({fontSize:"600px"}, 5000);
    });

    $("#btn12").click(function(){
        // $("#div1").fadeOut(2000);
        // alert("fadadf");

       $("#div1").fadeOut(2000, function(){
            alert("fade out !!!");
       });
    });

    $("#btn13").click(function(){
        $("#div1").fadeOut(2000).fadeIn(2000).slideUp(2000).slideDown(2000);
    });

    $("#btn14").click(function(){
        // 첫번째 트루 : 모든 이펙트 중ㅈㅣ
        // 두번째 트루 : 현재 이펙트는 끝까지 실행하고 중지
        $("#div1").stop(false, true);
    });



});