// this 실습

// in web browser
// console.log(window===globalThis)

// in node
console.log(global===globalThis)

// 웹브라우져에서 전역객체 : window 또는 globalThis
// node 전역객체 : global 또는 globalThis

const g = globalThis;
// console.log(g);

g.name = 'global';
// console.log(g.name);  //global


console.log('1)'+this.name); // global 브라우저에서는 맞고 노드에서는 undefined (node에서 전역 this => {} )


function func1(){
    console.log('2)'+this.name);  // func1  틀렸다 global (node에서 일반함수 내에서의 this => global )
}
func1();


function Person(name){
    this.name = name;
    console.log('3)'+this.name);  // kang
}
const person = new Person('kang');


const hong = {
    name : 'honggil',
    getName(){
        return this.name;
    },
    printName(){
        setTimeout(function(){
            console.log('4)'+this.name); // undefined
        }, 100);
        setTimeout(() => console.log('5)'+this.name), 100); // honggil 
    }
}
console.log('6)'+hong.getName());  // honggil
hong.printName();


function func2(){
    const name = 'func2';
    console.log('7)'+this.name); // func2 틀렸다 global 
    function func3 (){
        const name = 'func3';
        console.log('8)'+this.name); // func3 틀렸다 global
    }
    func3();
}
func2();










