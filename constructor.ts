class Employee1 {
    employeeName : string;
    salary : number;
    isActive : boolean;

    constructor (employeeName : string, salary : number, isActive : boolean){
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }

    calculatesalary():number{
        let finalsalary : number;
        if (this.isActive == true){
            if(this.salary<10000){
                finalsalary = this.salary - (this.salary * 10 /100);
            }
            else {
                finalsalary = this.salary - (this.salary * 15 /100);
            }
        }
        else {
            finalsalary = 0;
        }
        return finalsalary;
    }
}

// Objects : 
var emp3 : Employee1;
emp3= new Employee1("Ghassen",5000,true);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());

var emp3 : Employee1;
emp3= new Employee1("Ahmed",18000,true);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());

var emp3 : Employee1;
emp3= new Employee1("Ali",150000,false);
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());