var Product = (function () {
    function Product() {
    }
    Product.prototype.calculateTax = function (val) {
        return val * 0.08;
    };
    return Product;
}());
;
var product1 = new Product();
console.log(product1.calculateTax(10));
