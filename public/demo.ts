class demo
{
    static s= 0;
    n= 0
    constructor(){
        demo.s++;
        this.n++;
        demo.s =demo.s + 1;
        this .n = this.n + 1;
    }
    print(){
        console.log(`'s=${demo.s} n=${this.n}'`);
        console.log("static variable s: "+demo.s);
        console.log("instance variable n: "+this.n);
    }

}
let obj1 = new demo();
obj1.print();
let obj2 = new demo();
obj2.print();
let obj3 = new demo();
obj3.print();