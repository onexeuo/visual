//  인터페이스
// 객체의 타입을 정의할 때 사용
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person2_name;
// 객체 생성
const user1 = { name: 'hong', age: 20 };
// 함수의 파라미터와 리턴타입으로 인터페이스 사용
function getUserInfo(user) {
    return user1;
}
const user2 = getUserInfo({ name: 'kang', age: 30 });
const user3 = { name: 'lee', age: 40 };
const user4 = { name: 'lee' };
const bird1 = { name: 'eagle', legCut: 2, hasWing: true };
const student = { 1: 'hong', 2: 'kang' };
const student2 = { '1': 'hong', '2': 'kang' };
const student3 = ['hong', 'kang'];
// 배열 인덱스로 숫자 사용 (불가)
// interface Student4 {
//     [index:string]:string;
// }
// const student4 : Student4 =['hong','kang'];
/* 유니언 타입(union type) */
// 여러타입중 하나
let un;
un = 'hong';
un = 100;
function getInfo(obj) {
    if ('color' in obj) {
        console.log(obj.name, obj.color);
    }
    else if ('pages' in obj) {
        console.log(obj.name, obj.pages);
    }
}
const pen = { name: 'ballpen', color: 'blue' };
const note = { name: 'prectice', pages: 1000 };
getInfo(pen);
getInfo(note);
const is1 = {
    name: 'hong',
    age: 20,
    hobby: ['soccer', 'basketball']
};
const mystr = 'choi';
const mynum = 1;
const mt1 = true;
const mt2 = 11;
const mt3 = 'hi';
const int1 = {
    name: 'hong',
    age: 20
};
// enum 타입 
// 여러개의 상수를 정의하기 위한 타입
// 선언된 순서대로 0, 1, 2 ... 의 값을 가짐
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS";
})(Planet || (Planet = {}));
const earth = Planet.EARTH;
const mars = Planet.MARS;
// enum 초기값 할당
var Planet2;
(function (Planet2) {
    Planet2[Planet2["MERCURY"] = 0] = "MERCURY";
    Planet2[Planet2["VENUS"] = 1] = "VENUS";
    Planet2[Planet2["EARTH"] = 2] = "EARTH";
    Planet2[Planet2["MARS"] = 3] = "MARS";
})(Planet2 || (Planet2 = {}));
var Planet3;
(function (Planet3) {
    Planet3["MERCURY"] = "\uC218\uC131";
    Planet3["VENUS"] = "\uAE08\uC131";
    Planet3["EARTH"] = "\uC9C0\uAD6C";
    Planet3["MARS"] = "\uD654\uC131";
})(Planet3 || (Planet3 = {}));
// const enum : js로 변환되는 코드의 양 감소시킨 enum
// const enum Planet4 {
//     MERCURY,
//     VENUS,
//     EARTH,
//     MARS
// }
// 클래스 
// - 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의 해 줘야 함
// - 생성자의 파라미터타입과 메서드의 반환 타입을 정의해 줘야함
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person1 = new Person('hong', 30);
// 접근제어자 
// public : 클래스 내외부에서 접근가능, 접근제어자 생략시 public
// protected : 클래스 내부 또는 상속받은 클래스내부에서 접근 가능
// private : 클래스 내부에서만 접근가능 (#, ES2020)
class Person2 {
    constructor(name, age) {
        _Person2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Person2_name, name, "f");
        this.age = age;
    }
    getName() {
        return __classPrivateFieldGet(this, _Person2_name, "f");
    }
    getAge() {
        return this.age;
    }
}
_Person2_name = new WeakMap();
const person2 = new Person2('hong', 30);
// 제네릭 (generic)
// - 타입을 실행시점에 정의하기 위한 문법
// - 제네릭을 사용하면 반복적인 타입선언을 줄일 수가 있다
// - any 를 사용하면 어떤 타입도 받을 수가 있지만
//   에러방지, 코드자동완성과 같은 타입스크립트의 장점을 살릴 수 없음
function getText(text) {
    return text;
}
getText('hi');
getText(11);
const animal1 = {
    name: 'tiger',
    body: { color: 'orange', legCount: 4 }
};
// 제네릭에 제약 부여 
// T extends string : string을 상속받는 임의의 타입
function printName(name) {
    return name;
}
printName('hong');
// extends : 뒤에 나오는 타입과 호환타입을 허용
// {length:number} : 인터페이스
function lengthOnly(value) {
    return value.length;
}
lengthOnly('123'); // 문자열을 length프라퍼티를 가지고 있다.
lengthOnly([1, 2, 3]); // 배열은 length프라퍼티를 가지고 있다.
// 제네릭과 유니온 결합
function lengthOnly2(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value;
}
lengthOnly2('123');
lengthOnly2(123);
// keyof  : 객체의 프라퍼티들의 키들을 추출해 문자열 유니언 타입으로 변환
//          = 프라퍼티명과 같은 문자열들만 받겠다!
function printKeys(value) {
    console.log(value);
}
printKeys('name');
printKeys('skill');
// printKeys('hello');  // error
