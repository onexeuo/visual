var v1 = 1; //G
let v2 = 2; //G
console.log(v1, v2);    // 1, 2

{
    console.log(v1, v2);    // 3, 2 틀렸다 정답은 1, 2
    v1 = 3;
    v2 = 4;
    console.log(v1, v2);    // 3, 4
}
function func(){
    //console.log(v1, v2);    // 7, 6 틀렸다 정답은 undefined, error
    var v1 = 5;
    let v2 = 6;
    console.log(v1, v2);    // 5, 6 
}
func();
console.log(v1, v2); // 7, 6 틀렸다 3,4
