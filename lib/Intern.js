const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee{
    constructor(name = '', email ='', school='', employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.school = school;
        this.employeeID = employeeID;
    }

    employeePrompt(){
        return super.employeePrompt()
        .then(() =>{
            return inquirer
            .prompt({
                type:'text',
                name: 'school',
                message: 'What is their school name?'
            })
            .then(internData =>{
                this.school = internData.school;
            })
        });
    }
}

module.exports = Intern;