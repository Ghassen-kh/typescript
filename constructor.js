var Employee1 = /** @class */ (function () {
    function Employee1(employeeName, salary, isActive) {
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }
    Employee1.prototype.calculatesalary = function () {
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
    return Employee1;
}());
// Objects : 
var emp3;
emp3 = new Employee1("Ghassen", 5000, true);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());
var emp3;
emp3 = new Employee1("Ahmed", 18000, true);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());
var emp3;
emp3 = new Employee1("Ali", 150000, false);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());
