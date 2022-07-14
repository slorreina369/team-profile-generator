const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name = '', email ='', github='', employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.github = github;
        this.employeeID = employeeID;
    }

    employeePrompt(){
        return super.employeePrompt()
        .then(() =>{
            return inquirer
            .prompt({
                type:'text',
                name: 'github',
                message: 'What is their github?'
            })
            .then(engineerData =>{
                this.github = engineerData.github;
            })
        });
    }
}

module.exports = Engineer;