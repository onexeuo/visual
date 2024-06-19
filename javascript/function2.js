// 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression)
(function(){
    const a = 3;
    const b = 5;
    console.log(a+b);
}());

(function(a, b){
    console.log(a + b);
}(1,2));

// 즉시 실행 함수
//(function(a, b){console.log(a + b);}(1,2)); =======> 실행결과인 3이라는 값(표현식)
const result = (function(a, b){
    return a + b;
}(1,2));
console.log(result);

// cf) 함수 표현식
// function(a,b) (return a+b;) =======> 함수 값(표현식)
const result2 = function(a, b){
    return a+b;
}
console.log(result2);

// 재귀 함수 
// 함수가 자기 자신을 호출, 반드시 종료조건이 있어야 함
function factorial(n){
    if(n<=1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(10));

// 중첩 함수
// 함수내에 함수를 정의해서 바깥쪽 함수가 안쪽 함수의 기능을 독립적으로 사용,
// 클로저(closure) 생성시 주로 사용
function outer(){
    inner();    // inner함수가 outer함수 블록상단에 호이스팅됨 (선언이 상단으로 끌어올려짐)
    const o = 'o';
    console.log(o);
    function inner(){
        const  i = 'i';
        console.log(i);
    }
    // console.log(i);  // i는 inner 함수의 스코프를 가진다.ㄴ
    inner();
}
outer();
// inner는 outer안에서만 쓸 수 있다.
// outer.inner();












