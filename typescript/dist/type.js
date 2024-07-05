//### 타입스크립트의 type
//    타입스크립트 변수에 타입을 지정하려면 : 을 사용 
// string
let hello = 'hello';
console.log(hello);
// hello = 100; //error
// number
let num = 10;
// boolean
let bool = true;
// object
let obj = {
    name: 'hong',
    age: 20
};
// array 
let arr1 = ['hong', 'kang', 'lee'];
let arr2 = ['hong', 'kang', 'lee'];
// tuple
// 고정 길이이며 요소들의 타입이 미리 정의된 배열
let tup = ['hong', 20];
// any
// 어떤 타입값도 모두 허용
// any 타입을 많이 쓰면 타입스크립트를 쓰는 이유가 없다
// 어떤 타입인지 명확히 알 수 없을 경우에만 제한적으로 사용
let at = 100;
at = '백';
at = [1, 2, 3];
// null
// null은 타입 이름이기도 하고 값이기도 함
let nul = null;
// undefined
// undefined는 타입 이름이기도 하고 값이기도 함
let und = undefined;
// function
// 파라미터, 반환타입을 지정
function getStr(str) {
    return 'hi' + str;
}
getStr('hong');
// 함수 호출시에 인자개수와 파라미터개수를 맞춰야 함
// 반환값이 없이면 void를 명시해 줘야함
function getInfo1(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo1('hong', 20, 'soccer');
// optional parameter : 파라미터에 해당하는 인자가 없을떄는 ? 를 사용
function getInfo2(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo2('hong', 20, 'soccer');
getInfo2('hong', 20);
