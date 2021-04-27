var Employee2 = /** @class */ (function () {
    function Employee2(employeeName, salary, isActive) {
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }
    Employee2.prototype.calculatesalary = function () {
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
    return Employee2;
}());
// Array of Objects :
var employees = [
    new Employee2("Ghassen", 5000, true),
    new Employee2("Ahmed", 18000, true),
    new Employee2("Ali", 150000, false)
];
employees.push(new Employee2("Salma", 8400, true));
console.log("emp1:");
console.log(employees[0].employeeName);
console.log(employees[0].salary);
console.log(employees[0].isActive);
console.log(employees[0].calculatesalary());
console.log("emp2:");
console.log(employees[1].employeeName);
console.log(employees[1].salary);
console.log(employees[1].isActive);
console.log(employees[1].calculatesalary());
console.log("emp3:");
console.log(employees[2].employeeName);
console.log(employees[2].salary);
console.log(employees[2].isActive);
console.log(employees[2].calculatesalary());
console.log("emp4:");
console.log(employees[3].employeeName);
console.log(employees[3].salary);
console.log(employees[3].isActive);
console.log(employees[3].calculatesalary());
