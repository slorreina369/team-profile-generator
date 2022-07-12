const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name = '', email ='', officeNum= 0, employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.officeNum = officeNum;
        this.employeeID = employeeID;
    }
}

module.exports = Manager;