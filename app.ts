/*let firstName:string = "Brionna";

  console.log( `Hello ${firstName}`) */
  // template literal  use this onl instead of concatinating.


//let obj = {
//  color:"red",
//  brand: "tesla"
//};

//let objTwo = {
//  color:"red",
//  brand: "bmw"
//};
// use instead

/*class Person {
  constructor(){
    this.firstName = "Brionna";
  }
    firstName: string
    lastName:string
    getFullName(first:string,last:string){

      return first + " " + last;
    }
};

let Brionna = new Person();
    Brionna.firstName = 'brionna';
    Brionna.lastName = 'white';
console.log(Person.firstName);
console.log(Brionna.getFullName(Brionna.firstName, Brionna.lastName));
 //constructor */

 //class Product {
  // constructor (public name:string, private price:number)  {
    // this.name =  "name';
    // this.price = price;

  // }

  //  calculateTax(val:number) {

  //  }

  //let product1 = new Product('Cheese', 12.99);
//  console.log(product1) ;


//accessmodifiers



















/*
class Hamburger {
    public name:string
    getPrice () {
      return 10;

  }
    constructor() {
    this.name = "Whooper";
  }
}
    class Cheeseburger extends Hamburger {
      public name: string;
      getPrice() {
        return super.getPrice() + 1;
}
};
  let test = new Cheeseburger();
  console.log(test.getPrice());
  */

//  interface
/*
interface INameable {
  name:string
}
    class Hammer implements INameable{
      name:string
    } */
//namespace - prevent naming complex , prevent from same name classes in editor/ namimg content..
/*

  namespace MathUtility {

  export class Calculator {
    add(a:number, b:number) {
      return a + b;
      }
    }
  };


namespace MyApp {
  export function run() {
    let calculate= new MathUtility.Calculator();
    console.log(calculate.add(1,3));

    }
  }
  MyApp.run()*/
//modules - use input / exports commands to use modules(framework) / patterns (pieces of code that we can use in other pieces of our app) ex: third party modules code
//use typinhgg//



import  {saySomething} from './module.ts';
saySomething()
