const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = '', email ='', school='', employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.school = school;
        this.employeeID = employeeID;
    }
}

module.exports = Intern;