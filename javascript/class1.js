// class 

//  클래스 문법
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    static sayHello(){
        console.log('hello!');
    }
}


// 생성자함수 문법
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.getName  = function(){
//         return this.name;
//     }
// }

// 객체 생성
const hong = new Person('honggildong',20);
const kang = new Person('kanggamchan',30);

// non-static메소드는 객체로 호출
console.log(hong.getName());
console.log(kang.getName());

// static메소드는 생성자함수(클래스)로 호출
Person.sayHello();

// 동적 프라퍼티 추가
Person.prototype.sayHi = function(){
    console.log(this.name + ' Hi!');
}

hong.sayHi();
kang.sayHi();

