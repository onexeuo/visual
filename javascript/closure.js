/*  클로저 (closure)
        : 함수 내부에서 선언된 변수는 함수스코프를 따름(유효범위가 함수이다)
        : 함수 내부에서 선언된 변수의 값을 함수 외부에서 아용해야할 경우
        : 클로저를 만들어서 사용함
*/

// x는 전역변수
const x = 1;

function outer(){
    //x는 outer함수의 지역변수
    const x = 10;
    //지역변수 x에 접근할 수 있는 내부함수
    const inner = function(){   // function ~ }; 가 클로저
        console.log(x);
    };
    //내부함수를 리턴
    return inner;
}
// outer를 호출해서 내부함수를 리턴
const innerFunc = outer();
// 내부함수를 실행해서  outer의 지역변수인 x에 접근
innerFunc();









