/*
### Event
    1. 자바스크립트는 이벤트기반프로그래밍 모델 (Evnet Driven Programing Model)
        : 이벤트가 발생하면 이벤트 객체가 이벤트 핸들러(= 이벤트리스너 = 이벤트콜백 = 콜백)에
          인자로 전달이 되서 이벤트 처리를 하는 프로그래밍 모델
    2. 자바스크립트가 감지할 수 있는 모든 것은 이벤트
        : ex) 윈도우가 열림/닫힘, 마우스 누름/뗌/클릭, 키보드 누름/프땜, 스크롤, 데이터입력
                이미지가로드, 통신(데이터송수신), 객체상태 ...
*/  

/*
    관련 용어
    event : 발생한 이벤트에 대한 이벤트 객체 ( ex. 이벤트 객체)
    event type : 발생한 이벤트의 타입 ( ex. click)
    event trigger : 이벤트 발생
    event attribute : 이벤트 핸들러를 저장하는 엘리먼트의 속성 ( ex. onClick)
    event handler (= event listener  = event callback)
                : 이벤트 처리를 위한 함수 ( ex. function(event)() 또는 event=>{})
    event target(= event sourse) : 이벤트를 발생시킨 객체 ( ex. <input type="button" ...)
    event currentTarget : 현재 이벤트 객체가 전달되어 있는 객체
    event phase (이벤트 단계) : 이벤트 전파 상태 (1단계 - 캡쳐링, 2단계 - 타겟, 3단계 - 버블링)
    event propagation (이벤트 전파) : 발생한 이벤트가 DOM Tree의 상하를 따라 전달됨
    event capturing (이벤트 캡쳐링) : 상위 엘리먼트에서 하위 엘리먼트로 이벤트가 전달
    event bubbling (이벤트 버블링) : 하위 엘리먼트에서 상위 엘리먼트로 이벤트가 전달
    event prevent : 이벤트 전파 금지
    dafault event : 엘리먼트가 가지고 있는 기본이벤트 ( ex. a엘리먼트는 누르면 이동)
    event delegation (이벤트 위임) : 이벤트 타겟의 상위 엘리먼트가 이벤트를 처리

 */ 






























