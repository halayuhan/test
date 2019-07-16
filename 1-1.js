
let person =((name) => {
    return {
        getName:function() {
            return name;
        }
    };

})("Nicklas");
console.log(person.getName());

let pageHandler = {
    id: "123456",
    init: function(){
        document.addEventListener("click",
                event => this.dothing(event.type),flase);
    },
    dothing:function(type){
        console.log("Handle"+ type+ "is"+ this.id);
    }
};

let set = new Set([1,2]);
let processor = {
    output(value){
        console.log(value);
    },
    process(dataset){
        dataset.forEach(value=>this.output(value));
    },
};
processor.process(set);

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '('+ this.x + ',' + this.y + ')';

    }
}

var p1 = new Point(2,3);
var p2 = new Point(3,2);
Object.getPrototypeOf(p1).printName = function(){
        return 'hi'
};
p1.printName()
p2.printName()