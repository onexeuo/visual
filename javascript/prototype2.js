// 프로토타입 변경에 따른 동적 상속 변경
function Dog(name, sound){
    this.name = name;
    this.sound = sound;
}
Dog.prototype.say = function(){
    console.log("dog" + this.sound )
}

function Cat(name, sound){
    this.name = name;
    this.sound = sound;
}
Cat.prototype.say = function(){
    console.log("cat" + this.sound )
}

const dog = new Dog('푸들', '왈왈'); // dog는 Dog 타입이다.
dog.say();
const cat = new Cat('샴', '냥냥'); // cat 은 Cat 타입이다.
cat.say();

dog.__proto__ = Cat.prototype;
dog.say();
cat.__proto__ = Dog.prototype;
cat.say();

console.log()
