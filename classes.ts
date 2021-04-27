class Employee {
    employeeName : string;
    salary : number;
    isActive : boolean;
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
var emp3 : Employee;
emp3= new Employee();
emp3.employeeName="Ghassen";
emp3.salary= 5000;
emp3.isActive = true;
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());

var emp3 : Employee;
emp3= new Employee();
emp3.employeeName="Ahmed";
emp3.salary= 18000;
emp3.isActive = true;
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());

var emp3 : Employee;
emp3= new Employee();
emp3.employeeName="Ali";
emp3.salary= 150000;
emp3.isActive = false;
console.log("emp3:");
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.calculatesalary());