window.onload = function(){


    document.getElementById("btn").addEventListener(
        "click",
        function(){
            const redval = document.getElementById("red").value;
            const greenval = document.getElementById("green").value;
            const bluevla = document.getElementById("blue").value;
            document.body.style.backgroundColor = `rgb(${redval}, ${greenval}, ${bluevla})`;

    })

}