/*
    이벤트 전파 (event propagation)
    - 상위 엘리먼트에서 하위엘리먼트로 이벤트가 캡쳐링 (capturing phase => 1)
    - 이벤트 타겟에 이벤트가 전달됨 (target phase => 2)
    - 타겟에서 상위엘리먼트로 이벤트가 버블링 됨   (bubbling phase => 3)
    - 

*/

document.querySelector("#outer").addEventListener('click', (e) => {
    printEventInfo(e);
});

// 캡쳐링 단계에서 이벤트 처리를 하려면 addEventListener 세번째 인자를 true 로
document.querySelector("#outer").addEventListener('click', (e) => {
    printEventInfo(e);
}, true);

document.querySelector("#inner").addEventListener('click', (e) => {
    printEventInfo(e);
});

document.querySelector("#inner").addEventListener('click', (e) => {
    printEventInfo(e);
}, true);

document.querySelector("#btn").addEventListener('click', (e) => {
    printEventInfo(e);
    e.stopPropagation();
});

document.querySelector("#btn").addEventListener('click', (e) => {
    printEventInfo(e);
}, true);

const printEventInfo = (e) => {
    console.log("target : "+e.target);
    console.log("currentTarget : "+e.currentTarget);
    console.log("currentTarget : "+e.currentTarget.id);
    console.log("eventPhase : "+e.eventPhase);
    console.log("\n");
}


