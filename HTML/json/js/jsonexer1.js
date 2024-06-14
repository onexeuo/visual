window.onload = function(){

    /* JSON에서 사용하는 Javascript의 데이터타입*/
    const obj = {};
    const arr = []; 
    // const func = function() {};
    const str = "";
    const num = 0;
    const bool = false; 
    const nul = null;
    
const result = document.getElementById("result");

    //JSON Object
    const person ={
        "name" : "hong",
        "age" : "20",
        "gender" : "M",
        "married" : false
    };
    person.age = 30;
    result.innerHTML = person.name + "," + person.age +","+person.gender + ","+person.married;
    
    //JSON Aray
    const persons = [
        {"name":"kang", "age":70},
        {"name":"jang", "age":30},
        {"name":"lee", "age":50}
    ];

    persons[1] = {"name" : "choi", "age" : 80};
    result.innerHTML = persons[1].name + "," + persons[1].age;

    const personsLeng = persons.length;
    let printStr = "";
    for(let i=0; i<personsLeng; i++){
        printStr += persons[i].name + "," + persons[i].age + "<br />";
    }
    result.innerHTML = printStr;

    //Json형태의 문자열
    const jsonObjStr = '{"name" : "hong", "age" : 20}';
    result.innerHTML = jsonObjStr;

    //json 문자열을 json object로
    const jsonObj = eval("("+jsonObjStr+")");
    result.innerHTML = jsonObj.name;
    
    //Json object를 json 문자열로
    const jsonStr = JSON.stringify(jsonObj);
    result.innerHTML = jsonStr;

    
}