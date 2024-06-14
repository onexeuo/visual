window.onload = function(){
    document.getElementById("btn").addEventListener("click", function(){
    
        const students = [
            {"sno" : 1, "sname" : "hong", "kor" : 80, "eng" : 90, "math" : 100},
            {"sno" : 2, "sname" : "kang", "kor" : 50, "eng" : 100, "math" : 100},
            {"sno" : 3, "sname" : "lee", "kor" : 80, "eng" : 60, "math" : 90}
        ];
    
        const studentsLeng = students.length;
    
        let trs = "";
    
        for(let i=0; i<studentsLeng; i++){
            trs += "<tr>";
            trs += "<td>"+students[i].sno+"</td>"
            trs += "<td>"+students[i].sname+"</td>"
            trs += "<td>"+students[i].kor+"</td>"
            trs += "<td>"+students[i].eng+"</td>"
            trs += "<td>"+students[i].math+"</td>"
            trs += "</tr>";
        }
        const tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = trs;
    });

};

