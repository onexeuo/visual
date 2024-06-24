//javascript 객체의 프라퍼티들의 속성

const hong = {
    name : 'hong'
}
// name프라퍼티 의 속성객체
// { value: 'hong', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(hong, 'name'));

hong.age = 20;
// { value: 20, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(hong, 'age'));

// {
//     name: {
//       value: 'hong',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
//   }
console.log(Object.getOwnPropertyDescriptors(hong));

// getter / setter
// getter : 프라퍼티의 값을 획득, setter : 프라퍼티의 값을 변경

const person = {
    firstName : 'hong',
    lastName : 'gildong',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        // desturcturing assignment(구조분해할당)
        // 배열의 각각의 요소를 각각의 변수에 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

//set fullname이 호출됨 !
person.fullName = 'kang karmchan';
console.log(person.firstName, person.lastName)
console.log(person.fullName)

// 데이터프라퍼티 정의
const lee = {};

Object.defineProperty(lee, 'name', {
    value : 'lee suonsin',
    writable : false,
    enumerable : false,
    configurable : false
});

lee.name = 'jang bogo'; // writable : false 이므로 값 변경 불가
delete lee.name;    //configurable : false 이므로 프라퍼티 제거 불가

console.log(Object.getOwnPropertyDescriptor(lee, 'name'));

lee.age = '20';

console.log(Object.getOwnPropertyDescriptors(lee));

console.log(Object.keys(lee));  // enumerable : false 이므로 age 만 조회된다.

// 객체 변경 불가
// 1. 확장금지 : Object.preventExtensions => 프라퍼티 추가를 금지
// 2. 밀봉 : Object.seal => 프라퍼티 읽기/쓰기만 가능
// 3. 동결 : Object.freeze => 프라퍼티 읽기만 가능

const choi = {
    name : 'choi illee',
    age : 30
}

// Object.preventExtensions(choi);
// choi.gender = "M";
// console.log(choi)

// Object.seal(choi); 
// delete choi.age;
// console.log(choi);

Object.freeze(choi); 
delete choi.age;
console.log(choi);



