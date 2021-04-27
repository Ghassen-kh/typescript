class Person {
    personName : string;
    age : number;

    constructor(personName : string, age : number){
        this.personName = personName;
        this.age = age;
    }
}



class Employee3 extends Person {

    salary : number;
    isActive : boolean;

    constructor (personName : string, age :number , salary : number, isActive : boolean){
        super(personName,age)
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

// Array of Objects :
var employees3 : Employee3[]= [
    new Employee3("Ghassen",24,5000,true),
    new Employee3("Abdallah",25,18000,true),
    new Employee3("Ali",32,150000,false)
];

employees3.push(new Employee3("Salma",36,8400,true));

for ( let i =0 ;i<employees3.length;i++){
    console.log("employee number :", i+1);
    console.log(employees3[i].personName);
    console.log(employees3[i].age);
    console.log(employees3[i].salary);
    console.log(employees3[i].isActive);
    console.log(employees3[i].calculatesalary());
}


