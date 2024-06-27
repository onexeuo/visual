// 배열 Array

// 자바스크립트 배열의 특성
// 1) 동적 배열 (배열의 크기가 동적으로 변경된다)
// 2) 어떤 타입의 값도 배열에 넣을 수 있음
// 3) 배열의 인덱스를 임의지정할 수 있음 (인덱스가 중간에 빠질 수 있음)
// 4) 요소의 값과 타입이 정해지지 않아도 사용할 수 있음
// 5) 키가 인덱스값의 문자열이고 length키를 가진 객체 
///////////////////////////////////////////////////////////

const arr1 = [1, 2, 3, 4, 5]; //인덱스 0~4, length 5
console.log(Object.getOwnPropertyDescriptors(arr1));

console.log(typeof arr1);   // object

// 크기가 5인 배열
const arr2 = new Array(5);
console.log(arr2.length)

//크기가 1인 배열
const arr3 = Array.of(5);
console.log(arr3.length);

// 객체로 배열 생성
const arr4 = Array.from({0:'a', 1:'b', length:2});
console.log(arr4);  // [ 'a', 'b' ]
const arr5 = Array.from({'key1':'a', 'key2':'b', length:2});
console.log(arr5);  // [ undefined, undefined ]

// 유사 배열 객체 : 배열처럼 사용할 수 있는 숫자키와 length를 가진 객체
const arrobj = {
    '0' : 'orange',
    '1' : 'apple',
    '2' : 'banana',
    length : 3
};
const arrobjLeng = arrobj.length;
for(let i=0; i<arrobjLeng; i++){
    console.log(arrobj[i])
}

// 희소배열 (sparce array) : 요소가 중간중간에 있는 배열
const arr6 = [1, 2, 3, , 4, 5];
console.log(arr6);
console.log(arr6.length);

// 배열 메서드
const arr7 = [1, 2, 3, 4, 5];
// 배열여부 확인
console.log(Array.isArray(arr7));
// 배열요소의 인덱스
console.log(arr7.indexOf(3))
// 배열요소 포함 여부
console.log(arr7.includes(5)); 
// 배열 요소 추가/삭제
const arr8 = arr7.push(6);
console.log(arr7);
console.log("arr8: "+arr8);  // length

const arr9 = arr7.pop(6);
console.log(arr7);
console.log(arr9);  // 제거된 요소

const arr10 = arr7.unshift(0);
console.log(arr7);
console.log(arr10); // length를 반환한다.

const arr11 = arr7.shift(0);
console.log(arr7);
console.log(arr11); // 제거된 요소 

// 배열 합치기 
const arr12 = [1, 2];
const arr13 = [3, 4];
console.log(arr12.concat(arr13));
console.log([...arr12,...arr13]);

// 배열 중간에 요소 제거/추가
const arr15 =  [1, 2, 3, 4, 5].splice(1);
console.log(arr15);  // [ 2, 3, 4, 5 ]
const arr16 =  [1, 2, 3, 4, 5].splice(1,3);
console.log(arr16);  // [ 2, 3, 4 ]  1부터 3개

const arr17 =  [1, 2, 3, 4, 5];
const arr18 = arr17.splice(1, 3, 10, 20);
console.log(arr17)  // [ 1, 10, 20, 5 ] 
console.log(arr18)  // [ 2, 3, 4 ]  

const arr19 =  [1, 2, 3, 4, 5];
console.log(arr19.slice(1))  // [ 2, 3, 4, 5 ]
console.log(arr19.slice(1,3))  // [ 2, 3 ]

// 배열 요소 역순으로
const arr20 = [1, 2, 3, 4, 5];
console.log(arr20.reverse());

// 배열 요소 채우기
const arr21 = [1, 2, 3, 4, 5];
console.log(arr21.fill(0))
console.log(arr21.fill(0, 2))

// 배열 평탄화
console.log([1, 2,[3, 4, [5, 6]]].flat());
console.log([1, 2,[3, 4, [5, 6]]].flat(2));

// 배열 고차함수
// sort, forEach, map, filter, reduce, some, everey, find
//////////////////////////////////////////////

const arr22 = [1, 2, 3, 4, 5];
console.log(arr22.sort());  // ascending
console.log(arr22.sort((a,b) => b-a));  // descending

const persons = [
    {name : 'hong', age : 20},
    {name : 'kang', age : 30},
    {name : 'bang', age : 40}
];

console.log(persons.sort((a,b) => b.age -a.age));  // 나이 역순으로 정렬

console.log( arr22.some(a => a >3));  // true
console.log( arr22.every(a => a >3));  // false
console.log( arr22.find(a => a >3));  // 5
console.log( arr22.filter(a => a >3));  // 5, 4
console.log( arr22.findIndex(a => a >3));  // 0
console.log(persons.find(person => person.age = 40));

const arr23 = [1, 2, [3, 4, [5, 6]]];
console.log(arr23.flatMap((str, index) => [index, [str, str.length]]));
console.log(arr23.map((str, index) => [index, [str, str.length]]).flat(2));





















