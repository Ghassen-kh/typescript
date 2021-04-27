// Child class that emplements the IEmployee interface 
var Employee5 = /** @class */ (function () {
    function Employee5() {
    }
    Employee5.prototype.getTax = function () {
        return this.salary * 10 / 100;
    };
    return Employee5;
}());
// create object of child class 
var emp5 = new Employee5();
emp5.salary = 10000;
console.log(emp5.salary);
console.log(emp5.getTax());
