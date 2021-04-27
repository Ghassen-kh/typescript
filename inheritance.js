var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    return Person;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(personName, age, salary, isActive) {
        var _this = _super.call(this, personName, age) || this;
        _this.salary = salary;
        _this.isActive = isActive;
        return _this;
    }
    Employee3.prototype.calculatesalary = function () {
        var finalsalary;
        if (this.isActive == true) {
            if (this.salary < 10000) {
                finalsalary = this.salary - (this.salary * 10 / 100);
            }
            else {
                finalsalary = this.salary - (this.salary * 15 / 100);
            }
        }
        else {
            finalsalary = 0;
        }
        return finalsalary;
    };
    return Employee3;
}(Person));
// Array of Objects :
var employees3 = [
    new Employee3("Ghassen", 24, 5000, true),
    new Employee3("Abdallah", 25, 18000, true),
    new Employee3("Ali", 32, 150000, false)
];
employees3.push(new Employee3("Salma", 36, 8400, true));
for (var i = 0; i < employees3.length; i++) {
    console.log("employee number :", i + 1);
    console.log(employees3[i].personName);
    console.log(employees3[i].age);
    console.log(employees3[i].salary);
    console.log(employees3[i].isActive);
    console.log(employees3[i].calculatesalary());
}
