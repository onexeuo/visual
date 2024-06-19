// 함수(functzion)

// 함수 선언문 : runtime이전에 메모리 생서
function add(x, y) {
    return x + y; 
}
console.log(add);  //function iteself
console.log(add());  // x, y -> undefined
console.log(add());  // x, y -> undef,7ined
console.log(add(3,5));
console.log(add(3,5,7));
console.log(add('hello', 'javascript'))

// 함수 리터럴 : 코드에 쓰여진 함수값, runtime에 메모리에 생성
const func1 = function(){
    console.log("func1");
}
func1();

const func2 = function(f){
    console.log("func2");
}
const func3 = function(f){
    f();
    console.log("func3");
}
func2(func2);  // func2 함수를 전달
func3(func2);  
// func3(func2); func2 함수의 실행결과를 전달 

const func4 = function a(){
    console.log('func4');
}
// a(); a라는 함수명은 엔진내부에서 사용
func4();

const func5 = function (a, b){
    return a + b;
}
console.log(func5(3,5));

// 실습 1)
//함수리터럴을 이용해서 사칙연샨을 수행하은 하나의 함수를 만들으 봅시당
const func6 = function(f, a, b){
    console.log(f(a,b));
}
func6(function(a ,b){return a+b;}, 1,7);
func6(function(a ,b){return a-b;}, 1,7);
func6(function(a ,b){return a*b;}, 1,7);
func6(function(a ,b){return a/b;}, 1,7);

//나머지 연산, a제곱과 b제곱의 합 연산

const func7 = function(f, a, b){
    console.log(f(a, b));
}
func7(function(a, b){return a%b;}, 3, 4);
func7(function(a, b){return (a*a)+(b*b);}, 3, 4);

// 화살표 함수 (arrow function)
const add2 = ((x, y) => x + y);  //function(x, y) (return x+y;)
console.log(add2(3,5));

const add3 = x => x*x;  //function(x) (return x*x;)
console.log(add3(4))

const afunc = (x, y) => {
    let result = x+y;
    return result;
}
console.log(afunc(4,2));

// 실습 2) 
// 실습 1) 을 화살표 함수를 사용하여 변경
const plus =((a,b) => a +b);
const minus =((a,b) => a -b);
const times =((a,b) => a *b);
const avg =((a,b) => a /b);

console.log(plus(5,2));
console.log(minus(5,2));
console.log(times(5,2));
console.log(avg(5,2));

//선생님 버전
const calc = (f,a,b) => console.log(f(a,b));
calc((a,b) => a+b, 3,5);
calc((a,b) => a-b, 3,5);
calc((a,b) => a*b, 3,5);
calc((a,b) => a/b, 3,5);
calc((a,b) => a%b, 3,5);
calc((a,b) => a*a+b*b, 3,5);

// Function 생성자 함수
const func8 = new Function('x','y','return x*y;');
console.log(func8);
console.log(func8(2,2));

// parameter, argument
// parameter : 함수가 값을 전달받기 위해 선언한 함수의 지역변수
// argument : 함수의 파라미터에 전달되는 값들
const func9 = function(a, b){  //a, b는 파라미터이며 함수의 지역변수
    return a+b;
}
//4의 값이 a에 할당되면 a 는  number타입이 됨
console.log(func9(4,6)); // 4,6은 인자

// arguments : 함수의 인자들의 배열
// caller : 호출한 함수
// callee : 호출된 함수
const func10 = function(x, y){
    console.log(func10.arguments[0]);
    console.log(func10.arguments[1]);
}
func10(1,2);

// 실습 3) 함수 하나를 생성
// 함수의 파라미터의 수와 함수에 전달된 인자의 수가 같지 않으면 메세지를 출력하고 함수를 실행하지 않는 함수를 생성
// 같다면 모든 인자들을 다 더해서 반환하는 함수
const func11 = function(x, y, z){
    const Leng = arguments.length;
    if(Leng != 3){
        console.log("noooooo!!!");
        return false;
    }else{
        console.log(x+y+z);
    }
};
func11(1,2);  //noooooo!!!
func11(3,4,5);  //12 

// ... 스프레드문법 
// 파라미터의 개수를 지정하기 곤란할 때 파라미터들을 배열로 만들어주는
const func12 = function(...args){
    console.log(args.length);  // 파라미터의 길이
    console.log(arguments.length);  //인자의 길이
};
func12(1,2,3,4);








