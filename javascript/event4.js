// 이벤트 위임 (event delegation)
// 상위엘리먼트에 이벤트 처리를 맡김
// ex. ul밑에 li가 100개가 있다고 가정, 각 li에 이벤트 핸들러를 등록?
//      ul이 li에서 발생한 이벤트를 위임받아서 처리

const fruits = document.querySelector("#fruits");
function activeate({target}){
    if(!target.matches('#fruits >li')) return;
    [...fruits.children].forEach(fruit => {
        fruit.classList.toggle('active', fruit === target);
        console.log(target.id);
    });

}
fruits.onclick = activeate;
