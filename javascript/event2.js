
//    evnet 객체의 프라퍼티

document.querySelector("#btn").addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.type);
});

document.querySelector("#btn").addEventListener('mouseover', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.type);
});

// 디폴트 이벤트
document.querySelector("a").addEventListener('click', (e) => {
    e.preventDefault();
});
// 폼내의 input엘리먼트에 입력된 값에 따라 submit을 수행
document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    const txtValue = document.querySelector("#txt").value;
    if(txtValue && txtValue.length>5){
        this.submit();
    }else{
        alert("dafjdsflajdflk");
        return false;
    }
});