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


class Person {
    firstName: string
    lastName:string
    getFullName(first:string,last:string){

      return first + " " + last;
    }
};

let Brionna = new Person();
    Brionna.firstName = 'brionna';
    Brionna.lastName = 'white';

console.log(Brionna.getFullName(Brionna.firstName, Brionna.lastName));
