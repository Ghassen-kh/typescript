
// Interface creation 
interface IEmployee {
    salary : number; 
    getTax(): number; 
}

// Child class that emplements the IEmployee interface 

class Employee5 implements IEmployee{
    salary : number; 
    getTax():number {
        return this.salary * 10 /100;
    }
}
// create object of child class 
var emp5 : IEmployee = new Employee5();
emp5.salary=10000;
console.log(emp5.salary)
console.log(emp5.getTax())