window.onload = function(){
    const canvas = document.getElementById("canvas");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const num4 = document.getElementById("num4");
    const btn = document.getElementById("btn");

    const num5 = document.getElementById("num5");
    const num6 = document.getElementById("num6");
    const num7 = document.getElementById("num7");
    const btn2 = document.getElementById("btn2");

    const sque = canvas.getContext("2d");
    const cir = canvas.getContext("2d");

    btn.addEventListener("click", function(){
        sque.fillStyle = "pink";
        sque.fillRect(num1.value,num2.value,num3.value,num4.value );
        

    })

    btn2.addEventListener("click", function(){
        cir.beginPath();
        cir.arc(num5.value,num6.value,num7.value,0,2*Math.PI);
        cir.stroke();
        cir.fillStyle = "skyblue";
        cir.fill();
    })
}