$(function(){
    $("*").css("background-color", "pink");
    
    $("#ul1").css("font-size", "30px");

    $(".first").css("color", "olive");

    //첫번째 ul의 첫번째 자식 선택자
    $("ul li:first").css("border", "1px solid #333");
    //ul마다 첫번째 자식 선택자 
    $("#ul2 li:first-child").css("border", "1px solid #333");

    //속성선택자
    $("[href]").css("text-decoration", "none");
    $("[href='http://www.google.com']").css("color" , "#ff0000 ");

    //버튼선택자 (input type="button" & <button>)
    $(":button").css("width", "180px");
    $("input[type='button']").css("background-color" , "skyblue");
    $("button").css("color", " orange")

    $("tr:even").css("font-size", "30px");
    $("tr:odd").css("font-size", "10px");

    //메소드체이닝(메소드를 연결해서 순차적으로 수행)
    $("td").css("background-color", "white").css("color", " blue").css("border-radius", "5px");

    //다중선택자
    $("li, a").css("line-height", "50px");
});