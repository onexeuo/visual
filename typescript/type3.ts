// 타입 추론 (type inference)
// - TS에서 개발자가 타입을 명시하지 않아도 트랜스컴파일러가 
//   타입을 추론할 수 있는 경우에는 타입을 명시하지 않아도 됨
// - 타입추론을 사용하면 타입선언 코드가 줄어서 가독성이 높아질 수 있음
// - 변수 초기화, 함수의 매개변수 기본값 설정, 함수의 값 반환 시에 타입추론이 일어난다.

// 변수 초기화 시 타입 추론
let str1;   // any 타입으로 추론됨
let str2 = 'hello';  // string타입으로 추론됨
let num1 = 1000;    // number타입으로 추론됨

// 함수 반환값 타입 추론
// 반환되는 a + b의 결과값이 number인 것이 명확하므로 
// 반환타입 지정을 추론할 수 있으므로 생략 가능 
function add(a: number, b: number){
    return a+b;
}
// 반환값을 저장하는 result1변수의 타입도 당연히 number이므로 타입지정 생략 가능
let result1 = add(1,2);

// 함수 매개변수 기본값으로 타입 추론
function add2(a =1, b=2){
    return a+b;
}
let result2 = add2(3, 4);

// 인터페이스에서의 타입 추론
interface Person1<T>{
    name:string;
    hobby: T;
}
const person: Person1<string[]> = {
    name : 'hong',
    hobby : ['soccer', 'basketball']
}

// 타입 단언 (type assertion)
// - TS의 타입 추론을 사용하는 대신 개발자가 직접 타입을 명시
// - as 키워드를 사용하여 개발자가 직접 타입을 선언
// - 이미 개발된 JS코드를 어쩔 수 없이 수정해야 하는 경우에만 사용하자 !

// hong의 타입은 이제부터 string이다!
const hong = 'hong' as string;

interface Human {
    name : string;
    age :number;
}

// Human타입은 name과 age 프라퍼티를 정의해야 함!
// let human: Human = {}  // error 

// human은 앞으로 name 과 age 프라퍼티를 가질 Human타입의 객체
let human = {} as Human;

function getId(id) {
    return id;
}
// getId 함수는 string타입의 값을 반환할 것이다
const myId = getId('hong') as string;

// 타입단언 중첩 
// 10 이라는 값을 any타입으로 하고 다시 number타입으로 단언
const number = (10 as any ) as number;

// 널 아님 보장 연산자 (not null assertion)
// ?. => 옵셔널체이닝 : null 이나 undefined 이면 undefined
interface Books {
    shuffle : Function
}
function shuffleBooks(books: Books | null){
    const result = books?.shuffle();
    // const result = books!.shuffle();  // 트랜스파일시에는 에러안남, 실행 시 에러
    return result;
}
shuffleBooks(null);

// 타입 가드 (type guard)
// 여러개의 타입으로 지정된 값을 특정 위치에서 원하는 타입으로 구분
// typeof, instanceof, in 연산자를 통해서 타입범위를 좁히는 것
const v1: string | number | boolean = 'hi';
if (typeof v1 === 'string'){    // 타입을 string으로 한정 (타입가드)
    console.log(v1.toUpperCase());
}

// 타입단언을 이용해서 타입을 number로 한정 (타입 가드)
function func1(param1 : string | number | boolean) : void {
    console.log((param1 as number).toFixed(2));
}
func1(3.1415);

// instanceof를 이용한 타입가드
interface Bird {
    name: string;
}
function Bird(name: string): void {
    this.name = name;
}
interface Mamma1 {
    name: string;
    breathfeed:true;
}
function Mamma1(name:string, breathfeed: boolean): void {
    this.name = name;
    this.breathfeed = breathfeed;
}
const bird : Bird | Mamma1 = new Bird('eagle');
if (bird instanceof Bird){
    console.log(bird.name);
}
// if ( bird instanceof Mamma1){
//     console.log(bird.name);
// }

// in 연산자를 활용한 타입가드
interface Book {
    name: string;
    author: string;
}
interface Lecture {
    name : string;
    tutor : string;
}
const book: Book | Lecture = {name : 'typescript', author:'micro'};
if('author' in book){  // Book 타입
    console.log(book);
}
if('tutor' in book){ // Lecture 타입
    console.log(book);
}

// 타입가드 함수 (is 사용)
// 두개 이상의 타입이 같은  프라퍼티를 가지고 있으면 in 연산자로
// 타입가드를 할 수 없으므로 탕비가드 함수를 사용해야 함
// someone is Hong : someone을 Hong으로 강제
interface Hong {
    name : string;
    age: number;
}
interface Park {
    name : string;
    address : string;
}
function isHongOrPark(someone : Hong | Park): someone is Hong{
    return (someone as Hong).age != undefined;
}

// 구별된 유니언 타입 (discriminated unions)
// 두개 이상의 타입이 같은 이름의 프라퍼티만 가지고 있을때
// 프라퍼티의 값으로 타입가드
interface Designer {      // 디자이너 타입
    name : string,
    age : number,
    jobName: 'designer'
}
const designer : Designer = {      // 디자이너 객체
    name: 'hong',
    age :20,
    jobName :'designer'
}

interface programmer {
    name : string,
    age : number,
    jobName: 'programmer'
}
const programmer : programmer = {
    name: 'kang',
    age :30,
    jobName :'programmer'
}

// 두 타입의 프라퍼티명이 모두 같으므로 특정 프라퍼티의 값으로 두 타입을 구분한다.(타입 가드)
if (designer.jobName === 'designer'){
    console.log(designer.jobName)
}
if (programmer.jobName === 'programmer'){
    console.log(programmer.jobName)
}










