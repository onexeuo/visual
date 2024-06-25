// encode / decode
// encode : 코드를 변환
// decode : 변환된 코드를 원복

const name = 'hong';
const age = 20;
const gender = 'MAN'

let uri = `https://www.naver.com/shop/product/1000?name=${name}&age=${age}&gender=${gender}`;
console.log(uri, '\n');

const enURI = encodeURI(uri);
console.log(enURI, '\n');

const deURI = decodeURI(enURI);
console.log(deURI, '\n');

console.log(uri, '\n');
const enURIComp = encodeURIComponent(uri);
console.log(enURIComp, '\n');
const deURIComp = decodeURIComponent(enURI);
console.log(deURIComp, '\n');



