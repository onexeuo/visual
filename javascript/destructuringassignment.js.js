/*
### 구조 분해 할당 (Destructuring assignment)
    : 이터러블이나 객체의 구성요소(요소, 프라퍼티)들을 각각의 변수에 나누어 할당

    1. 이터러블(배열, 문자열, Map, Set, NodeList, HTMLElements) => []
    2. 객체 => {}

*/

const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 2 5

const [f, g, h] = arr;
console.log(f, g, h);   // 1 2 3

const [a1=10, b1=20, c1=30, d1=40, e1=50] = arr;
console.log(a1, b1, c1, d1, e1);    // 1 2 3 4 5 

// rest 파라미터 사용 : 남은 요소들을 배열로 할당
const [a2, b2, ...c2] = arr;
console.log(a2, b2, c2);    // 1 2 [ 3, 4, 5 ]

// 객체 구조분해할당

const person = {
    name : 'hong',
    age : 30,
    gender : 'M',
    address : 'earth'
}

// 객체인 경우는 {} 사용하고 할당할 프라퍼티명을 나열
// const {name, age, gender, address} = person;
// console.log(name, age, gender, address);

// // 일부 프라퍼티만 할당
// const {name1, address1} = person;
// console.log(name, address);

// // rest 파라미터 사용
// const {name2, ...rest} = person;
// console.log(name, rest);

//복합객체 구조분해할당
// const hong = {
//     name: 'honggildong',
//     age: 20,
//     hobby:[
//         'soccer', 'readBook', 'climing'
//     ]
// };
// const {name, age, hobby} = hong;
// console.log(name, age, hobby);

// const [soccer, readBook, climing] = hobby;
// console.log(soccer, readBook, climing);

// 배열내의 객체 구조분해할당
const persons = [
    {name: 'miumiu', age:60, gender: 'F'},
    {name: 'wang', age:70, gender: 'M'}
];

// const [{name}, {gender}] = persons;
// console.log(name, gender);

const[, {name, age}] = persons;
console.log(name, age);