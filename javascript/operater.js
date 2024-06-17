// 연산자 (Operater)

// 항의 개수에 따른 분류
// 1. 단항
+10 
-10 
let i;
++i
--i

// 2. 이항
10+10
30%4

// 3. 삼항
const x = 5;
console.log(x==10 ? "10" : "10X");

// 4. 비교연산자
console.log(3==3); // true
console.log(3!=3); // false
console.log(3===3); // true
console.log(3!==3); // false
console.log(3=="3"); // true, 한 쪽에 데이터 타입을 변환 해서 값이 같으면 트루
console.log(3==="3"); // false, 데이터 타입까지 같아야 한다.
console.log(3=="삼") // false, 한글은 변환이 안됨
console.log(false==0) // true (0 > false)
console.log(1==true) // true (0만 false 다른 숫자들은 true)

if(1){
      // -> 1 은 true
}

console.log([]==false); // true, 원소는 없지만 배열은 있으니 false 그래서 true
console.log({}==false); // false

//논리연산자
//true or false 로 판별될수 있는 값들도 논리연산이 가능하다. 자바스크립트는 현재값보다 판별후의 값이 더 중요한 언어이다. 
// 연산에 필요하면 형변환이 자유롭게 일어나느 언어 
const a = 3;
const b = 0;
console.log(a||b);
console.log(a&&b);

// 지수연산자
const c = 3;
const d = 4;
console.log(c**d); // 3의 4 승
console.log(Math.pow(c,d));

// 연산자 우선순위 ()가 제일 높다.
(2*3)||4==((4+7)%3)>2



