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



class Product {
  name:string
   price:number
  calculateTax(val:number) {
  return val * 0.08;
}
};

let product1 = new Product();
console.log(product1.calculateTax(10));
