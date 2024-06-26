// 식별자 (Identifier)
// 프로그래밍에서 사용하는 서로를 구분짓는 유일한 이름
// ex) 변수명, 함수명 ...

function func(){
    console.log("func");
}

let f = func;

f();

console.log(func());    //함수 실행 결과
console.log(func);      //함수 자체

// 예약어(reserved word) : function, let
// 식별자(Identifier) : func, console, log, f
// 리터럴(literal) : "func",function func(){console.log("func");}

// 실습 : 아래 코드에서 예약어, 식별자, 리터럴, 연산자를 구분해 보세요

const c1 = 100;
const c2 = 200;
let l1 = c1 + c2;

function f1(a, b){
    return a + b;
}

const f2 = function(a, b){
    return a * b;
}

console.log('f1 수행결과'+f1(3,5));
console.log('f2 수행결과'+f2(2,4));


// 예약어 : const, let, function, return
// 식별자 : c1, c2, l1, console, log  ### 내가 못한거 -> f1, a, b, f2
// 리터럴 : function f1(a, b){ return a + b;}, const f2 = function(a, b){return a * b;}  ### 내가 못한거 -> 100, 200,'f1 수행결과','f2 수행결과', 3,5,2,4
// 연산자 : a+b, a*b, f1(3,5), f2(2,4)  ### 내가 못한거 -> =, +, * (내가 한거는 다틀림 ㅡ ㅡ)
 

