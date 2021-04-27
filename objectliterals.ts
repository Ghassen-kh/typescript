var employee : any = {
    employeeID : 25,
    employeeName : "Ahmed",
    score : 52,
    getDecision: function(){
        if(this.score >= 50)
        return "stay";
        else 
        return "leave";
    }

};

employee.email="employee25@gmail.com";
console.log(employee.employeeID);
console.log(employee.employeeName);
console.log(employee.score);
console.log(employee.getDecision());
console.log(employee.email);
