const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', email ='', github='', employeeID =''){
        super();

        this.name = name;
        this.email = email;
        this.github = github;
        this.employeeID = employeeID;
    }
}

module.exports = Engineer;