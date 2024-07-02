/*
    event 핸들러 들록 방법
    1. html의 이벤트 속성에 등록
    단점 : html 과 javascript가 혼용된다.

    <input id="btn" type="button" onClick="alert('어쩌구 저쩌구')" value="click">


    2. 이벤트타겟의 이벤트속성을 자바스크립트에서 등록
    단점 : 이벤트 핸들러를 하나만 등록 가능\

    document.querySelector("#btn").onclick = function(){
    alert('huh');
    };
    document.querySelector("#btn").onclick = function(){
        alert('huh huhhh');
    };

    3. addEventListener 함수를 사용 (무조건 이거 쓰세요.)
    @@ 발생한 이벤트에 대해 여러개의 이벤트 핸들러 등록이 가능하다.
    @@@ 이벤트 핸들러를 필요에 따라서 등록 및 유연하게 처리가 가능하다
        (발생한 이벤트에 대해서 처리하거나 처리하지 않을 수 있다.)

    document.querySelector("#btn").addEventListener('click', function(e){
    alert('wowwww 0^0');
    });
    document.querySelector("#btn").addEventListener('click', function(e){
        alert('yeahh *@_<*');
    });

    document.querySelector("#btn")   => 이벤트 타겟
    'click'                          =>  이벤트타입
    function(e){}                    => 이벤트핸들러
    e                                => 이벤트 객체
*/ 

// 이벤트 핸들러 분리
const first = function(e){ alert('kiki'); };
const second = function(e){ alert('hihi 0^0'); };
const third = function(e){ alert('hehe '); };

// 이벤트 핸들러 등록
document.querySelector("#btn").addEventListener('click', first);
document.querySelector("#btn").addEventListener('click', second);
document.querySelector("#btn").addEventListener('click', third);
// 이벤트 핸들러 제거
document.querySelector("#btn").removeEventListener('click', second);
