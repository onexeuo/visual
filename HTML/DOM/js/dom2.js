function clickBtn(){
    alert("눌렀다");

}

function changeBGColor(){
    document.body.style.backgroundColor = 'yellowgreen';
}

function changeText(){
    let txt = document.getElementById("txt");
    let result = document.getElementById("result");
    result.innerHTML = txt.Value;
}