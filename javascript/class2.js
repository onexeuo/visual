// 상속

class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(this.name + " HI!");
    }
}

class Child extends Parent {
    constructor(name, age, gender){
        super(name, age);
        this.gender = gender;
    }
}

const child =new Child('kang', 30, "M");
console.log(child);
child.sayHi();

const parent = new Parent('kang', 50);
console.log(parent);
parent.sayHi(); 
