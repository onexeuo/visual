// 타입 호환 (tyoe compatability)
// 좁은 타입이 넓은 타입의 값이 되는 것은 ok
// 넓은 타입이 좋은 타입의 값이 되는 것은 error
// 타입화환의 범위 
let str3 = 'hi';
let str4 = 'hello';
str3 = str4; // string타입이 'hello' 타입보다 넓으므로 ok
let i4 = { name: 'hong' };
let i5 = { name: 'kang' };
i4 = i5;
i5 = i4;
let animal5 = { name: 'animal' };
let dog5 = { name: 'puppy', sound: 'woof' };
let bird5 = { name: 'bird', leg: 2 };
// dog5 = bird5;  // Dog5는 sound가 있어야 함
// bird5 = dog5;  // Bird5는 leg가 있어야 함 
// dog5 = animal5; // Animal5는 sound가 있어야 함
// bird5 = animal5; // Animal5는 leg가 있어야 함
animal5 = bird5;
animal5 = dog5;
let dog6 = { name: 'puppy', sound: 'woof' };
let bird6 = { name: 'puppy', leg: 3 };
dog6 = bird6; // sound는 있어도 되고 없어도 되기 때문에 이 경우는 가능
// 함수 타입의 타입 호환
let func6 = function (a, b) {
    return a + b;
};
let func7 = function (a) {
    return a;
};
func6 = func7; // func7의 a 파라미터를 잃지 않음 
// func7 = func6;  // error, b파라미터를 잃어버려서 에러
// enum 타입의 타입 호환
// enum 타입은 같은 프라퍼티를 가져도 호환되지 않음
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 0] = "A";
    Enum1[Enum1["B"] = 1] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 2] = "C";
})(Enum2 || (Enum2 = {}));
;
let e1 = Enum1.A;
let e2 = Enum2.A;
let in1 = 'string';
let in2 = 30;
in1 = in2;
in2 = in1;
let in3 = { data: 'string' };
let in4 = { data: 30 };
// in3 = in4;   // data : number > string(X)
// in4 = in3;   // data : string > number(X)
