// 프라퍼티 디스크립터 (property descriptor)
// : 프라퍼티의 속성값들을 저장하고 있는 객체

// 프라퍼티의 속성값
// value - 프라퍼티의 값
// writable - 수정가능 여부
// enumerable : 열거가능 여부
// configurable : 재정의 가능 여부(삭제)

const person = {
    name : 'hong'
};

//person 객체의 name프라퍼티의 디스크립터 (데이터 프라퍼티)
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//person객체의 모든 프라퍼티의 디스크립터
console.log(Object.getOwnPropertyDescriptors(person));

person.age = 30;
person.gender = 'M';

console.log(Object.getOwnPropertyDescriptors(person));

const coke = {
    name : 'coca',
    get fullName(){
        return this.name;
    },
    set fullName(name){
        this.name = name;
    }
};

//coke 객체의 name프라퍼티의 디스크립터 (데이터 프라퍼티)
//value, writable, enumerable, configurable
console.log(Object.getOwnPropertyDescriptor(coke, 'name'));

//coke객체의 fullName프라퍼티(메소드)의 디스크핍터(접근자 프라퍼티)
//get, set, enumerable, configurable
console.log(Object.getOwnPropertyDescriptor(coke, 'fullName'));

//프라퍼티 정의
Object.defineProperty(coke, 'color', {
    value : 'red',
    writable : false,
    enumerable : false,
    configurable : false
});

console.log(Object.getOwnPropertyDescriptor(coke, 'color'));

//프라퍼티 열거
// 1. Object keys
console.log(Object.keys(coke));  // coke는 enumerable이 false이므로 name, fullName만 나온다.

// 2. for ~ in
for (key in coke){
    console.log(key, coke[key])    // coke는 enumerable이 false이므로 name, fullName만 나온다.
}

// 객체 확장 금지, 밀봉, 동결
// 확장금지 Object.preventExtensions  프라퍼티 추가 불가
// 밀봉 Object.seal  프라퍼티 추가/삭제 불가
// 동결 Object.freeze  프라퍼티 읽기만 가능

const kang = {
    name : 'kang kamchan'
};

Object.preventExtensions(kang);
kang.age = 20;
console.log(Object.keys(kang));

Object.seal(kang);
delete kang.name;
console.log(Object.keys(kang));

Object.freeze(kang);
kang.name = 'lee';
console.log(kang.name)

// 확장금지, 밀봉, 동결 여부 확인
console.log(Object.isExtensible(kang));
console.log(Object.isSealed(kang));
console.log(Object.isFrozen(kang));

