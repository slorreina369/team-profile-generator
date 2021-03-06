const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {

    constructor(name = '', email ='', officeNum= 0, employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.officeNum = officeNum;
        this.employeeID = employeeID;
    }

    employeePrompt(){
        return super.employeePrompt()
        .then(() =>{
            return inquirer
            .prompt({
                type:'text',
                name: 'officeNum',
                message: 'What is their office number?'
            })
            .then(managerData =>{
                this.officeNum = managerData.officeNum;
            })
        });
    }
}

module.exports = Manager;