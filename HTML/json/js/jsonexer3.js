/* json 실습
    1. 3명의 학생데이터를 json  배열로 생성
    2. 데이터가져오기 버튼을 누르면 3명의 데이터를 보여준다.
    3. 총점/평균 버튼을 누르면 3명의 총점 평균을 테이블 우측에 보여준다.
*/

window.onload = function(){
    const stu = [
        {"sno" : 1, "sname" : "choi", "kor" : 100, "eng" : 100, "math" : 100, "all" : 0, "aver" : 0},
        {"sno" : 2, "sname" : "lee", "kor" : 90, "eng" : 90, "math" : 80, "all" : 0, "aver" : 0},
        {"sno" : 3, "sname" : "naa", "kor" : 80, "eng" : 80, "math" : 70, "all" : 0, "aver" : 0}
    ];

    document.getElementById("btn1").addEventListener("click", function(){
        printData();
    });



    document.getElementById("btn2").addEventListener("click", function(){
        for(let i=0; i<stu.length; i++){
            stu[i].all = stu[i].kor + stu[i].eng + stu[i].math;
            stu[i].aver = stu[i].all/stu.length;
        }
        printData();
    })
    

    function printData(){
        const stuLeng = stu.length;
        let str = "";

        for(let i=0; i<stuLeng; i++){
            str += "<tr>";
            str += "<td>"+stu[i].sno+"</td>";
            str += "<td>"+stu[i].sname+"</td>";
            str += "<td>"+stu[i].kor+"</td>";
            str += "<td>"+stu[i].eng+"</td>";
            str += "<td>"+stu[i].math+"</td>";
            if(stu[i].all > 0){
                str += "<td>"+stu[i].all+"</td>";
                str += "<td>"+stu[i].aver+"</td>";
            }else{
                str += "<td>0</td>"
                str += "<td>0</td>"
            }
            str += "</tr>";
        }
    }

    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = str;

}














