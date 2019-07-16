function createObject(classD){
    return new classD();
}
let obj = createObject(class{
    sayHi(){
        console.log("Hi");
    }

});
obj.sayHi();


const myClass = class Me{
    getClassName(){
        return Me.name;
    }
};

class Foo{
    constructor(...args){
        this.args = args;
    }
    *[Symbol.iterator](){
        for(let arg of this.args){
            yield arg;
        }
    }
}

for(let x of new Foo("hello world")){
    console.log(x);
}

class myclasstwo{
    *createIterator(){
        yield 1;
        yield 2;
        yield 3;
    }
}

let instance = new myclasstwo();
let iterator = instance.createIterator();