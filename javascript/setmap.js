/* 
### Set 
    - 요소의 중복을 허용하지 않는 자료구조 - 동이랗ㄴ 값은 한번만 저장
    - 요소의 순서(인덱스) 없는 자료구조
    - 자바스크립트에서는 배열을 가지고 Set을 만듬
*/

// const set = new Set([1, 1, 2, 2,3,3,3,4,5])
// console.log(set);

// const set2 = new Set('HELLO');
// console.log(set2);

//배열 중복 제거
const uniqArr  = arr => [...new Set(arr)] ;

// console.log(uniqArr([1,1,2, 2, 3, 3]));

// // Set 요소의 크기
// console.log(new Set([1, 2, 3, 4,5]).size);

// // 요소의 크기 추가
// console.log(new Sat([1]).add(2).add(3)); 

// //Set 요소확인
// console.log(new Set([1,2,3]).has(2));

// // Set요소 삭제
// console.log(new Set([1, 2,3]).delete(2));

// // Set 요소 전체 삭제
// const set3 = new Set([1,2, 3]);
// set3.clear();
// console.log(set3);

// // forEach로 Set 요소 순회
// // 인자 : 요소값, 요소값, Set
// const set4 = new Set([1,2,3,4,5])
// set4.forEach((v1, v2, set) => {
//     console.log(v1, v2, set);
// });

// // Set은 이터러블
// for (const val of set4) {
//     console.log(val);
// }

// console.log([...set4]);
// const [a,b, ...rest] = set4;
// console.log(a, b, rest);


// Set을 이용한 집합연산 구현
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 교집합
Set.prototype.intersection = function(set){
    const result = new Set();
    for ( const value of set) {
        if (this.has(value)) result.add(value);
    }
    return result;
}
Set.prototype.intersection2 = function(set){
    return new Set([...this].filter(v=>set.has(v)))
}

console.log(setA.intersection(setB));
console.log(setA.intersection2(setB));

// 합집합
Set.prototype.union = function(set){
    const result = new Set(this);
    for ( const value of set) {
        result.add(value);
    }
    return result;
};
Set.prototype.union2 = function(set){
    return new Set([...this, ...set]);
}
console.log(setA.union(setB));
console.log(setA.union2(setB));

// 차집합
Set.prototype.difference = function(set){
    const result = new Set(this);
    for(const value of set){
        result.delete(value);
    }
    return result;
}
Set.prototype.difference2 = function(set){
    return new Set([...this].filter(v=>!set.has(v)));
}

console.log(setA.difference(setB));
console.log(setA.difference2(setB));
console.log(setB.difference(setA));






// Map
// - 키와 값(엔트리)으로 구성된 자료구조
// - 엔트리의 순서(인덱스)는 없음
// - 키는 중복불가, 값은 중복가능
// - 자바스크립트에서 Map은 2차원배열을 이용해 만듬

// Map 생성
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map);

// Map 크기 (=엔트리의 개수)
console.log(map.size);

// 엔트리 추가
map.set('key3', 'value3');
console.log(map);

// Map 엔트리 접근
console.log(map.get('key2'));

// Map 엔트리 존재여부 확인
console.log(map.has('key3'));

// Map 엔트리 제거
console.log(map.delete('key3'));
console.log(map);

// Map 엔트리 전체제거
map.clear();
console.log(map);

// Map 엔트리 순회
const map2 = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
];

//forEach 인자 : 값, 키, 맵
map2.forEach((v, k, map) => console.log(v, k, map));

// Map은 이터러블 : for ~ of 사용가능, 스프레드 가능, 구조분해 할당 가능
for (const entry of map2){
    console.log(entry);
}
console.log([...map2]);
const [entry1, entry2, entry3] = map2;
console.log(entry1, entry2, entry3);

// keys(), values(), entries()
for (const key of map2.keys()){
    console.log(key);
}
for (const value of map2.values()){
    console.log(value);
}



