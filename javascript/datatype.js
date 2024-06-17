// 데이터 타입 (Data Type)

// 1. 숫자 타입 (Number)
const num1 = 1000;
const num2 = 0b0001;
const num3 = 0o777;
const num4 = 0xFBFF;
const num5 = Infinity;
const num6 = -Infinity;
const num7 = NaN;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);
console.log(typeof num5);
console.log(typeof num6);
console.log(typeof num7);

// 2. 문자열 (String)
const str1 = "hello";
const str2 = 'hi';
const str3 = `bye`;
const str4 = 'hello';
const str5 = 'javascript';
const str6 = `${str4} ${str5}`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);
console.log(typeof str5);
console.log(str6);

// 3. 불리언 타입 (boolean)
const bool1 = true;
const bool2 = false;
console.log(typeof bool1, typeof bool2);

// 4. undefined 
// undefined는 타입이기도 하고 값이기도 하다. 초기화 되지 않았다는 값
var v;  //engine, 초기화가 안되어서 엔진이undefined로 초기화 해줌
let l;  //engine
const c = undefined; //developer
console.log(v, typeof v);
console.log(l, typeof l);
console.log(c, typeof c);

// 5. null
// 값이 없다는 값. null은 타입이기도 하고 값이기도 하다.
var v1 = null; // null로 초기화 됨 -> 초기화 되었는데 값이 없음
let l1 = null;
const c1 = null;
console.log(v1, typeof v1); // object
console.log(l1, typeof l1);
console.log(c1, typeof c1);

// 6. 동적 타이핑 (Dynamic Typing)
// 변수에 값이 할당될 때 변수의 타입이 정해짐
let vv = 100; //number type
vv = 'hello'; //string type
vv = true; //boolean type

vv = function(){  // function type 
    console.log('hello');
}
 
vv = [1, 2, 3]; // object 
vv = {name:'hood', age:0}; //object
vv = /abc/g; // g or m or i , object

// instanceof 연산자 : 객체가 클래스의 인스턴스인지 여부
const vvv = new RegExp(); //object
console.log(vvv instanceof RegExp); //true

// Object, Array, Function, RegExp 객체와 리터럴
const obj = new Object();
const obj2 = {};
const arr1 = new Array();
const arr2 = [];
const func1 = new Function();
const func2 = function(){};
const re1 = new RegExp();
const re2 = /abc/;

console.log(typeof new Object()); // object
console.log(typeof {}); // object

