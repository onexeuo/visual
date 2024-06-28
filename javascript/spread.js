
// ### 스프레드 문법 (spread syntax)

console.log(...[1,2,3]);
console.log(...'hello');
// 객체는 이터러블이 아니므로 스프레므 문법 사용 불가
// console.log(...{name:'hong', age:20});

// rest parameter와 스프레드문법
const print= function(...rest){
    console.log(rest);

};
print(...[1, 2, 3]); // 스프레드문법 (배열을 각각 펼침)

// 
const [a, b, c, arr] = [1,2,3,[4,5]];
// const [a, b, c, arr]= ...[1,2,3,[4,5]];
console.log(a,b, c, arr);





