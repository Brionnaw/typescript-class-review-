var Person = (function () {
    function Person() {
    }
    Person.prototype.getFullName = function (first, last) {
        return first + " " + last;
    };
    return Person;
}());
;
var Brionna = new Person();
Brionna.firstName = 'brionna';
Brionna.lastName = 'white';
console.log(Brionna.getFullName(Brionna.firstName, Brionna.lastName));
