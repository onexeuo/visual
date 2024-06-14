window.onload = function(){
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const plus = document.getElementById("plus");
    const away = document.getElementById("away");
    const times = document.getElementById("times");
    const devide = document.getElementById("devide");
    const result = document.getElementById("result");

    plus.addEventListener("click", function(Event){
        result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    })

    away.addEventListener("click", function(Event){
        result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
    })
    times.addEventListener("click", function(Event){
        result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
    })
    devide.addEventListener("click", function(Event){
        result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
    })
}

