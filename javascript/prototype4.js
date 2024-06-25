//Object.prototype

const person = {
    name : 'hong'
};

// 객체의 생성자함수
console.log(person.constructor);

// 객체가 가진 프라퍼티
console.log(person.hasOwnProperty('name'));

// 프로토타입 화익 (상속여부 확인)
console.log(Object.prototype.isPrototypeOf(person));

// 프라퍼티 열거가능여부 확인
console.log(person.propertyIsEnumerable('person'))

// 객체의 문자열표현 확인
console.log(Object.toString(person));
console.log(Object.toLocaleString(person));

// typeof 연산자 (객체의 타입확인)
console.log(typeof person);

// instanceof 연산자 (상속여부 확인)
console.log(person instanceof Object)

//프로토타입 체인 (프로토타입 연결)
const kang = {
    name : 'kangkamchan'
}

if(Object.prototype == kang.__proto__){
    console.log("kang already has kang");
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('lee', 42);

console.log(person1.__proto__== Person.prototype);

// Person 은 Function 상속
console.log(Person.__proto__== Function.prototype);

// 그러므로 person1은 Person을 상속, Person은 Function을 상속
// person1 - Person - Function 프로토타입 체인

// Function은 Object를 상속받지 않음 
console.log(Function.__proto__ == Object.prototype);
console.log(typeof Function);
console.log(typeof person1)
console.log(typeof Person)
console.log(typeof person1.__proto__);

// in 연산자 : 객체에 프라퍼티가 존재여부 확인
console.log('name' in person1);

// Object.keys/values/entries
person1.age = 30;
person1.gender = 'M';

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));


// 잠깐 실습 : forEach 고차함수와 화살표함수를 사용해서 .person1의 프라퍼티를 나열
// 형식 namea: miss yu, age 33, gender:"FEMALE"

Object.entries(person1).forEach(
    ([key, value]) => console.log(key+'+'+value+' ')
);





