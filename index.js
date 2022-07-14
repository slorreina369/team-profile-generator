const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Team {
    constructor(){
        this.employees = []
    }
    promptTeam(){
        let manager = new Manager();

        return manager.employeePrompt()
        .then(() => {
            console.log("Thank you, next!")
            return this.employeePrompt();
        });
    }

    employeePrompt(){
        return inquirer
        .prompt({
            type:'list',
            name:'title',
            message: 'Are you submitting an Engineer or an Intern?',
            choices:['Engineer', 'Intern']
            // unpaid interns are highly unethical. Do better imaginary company
        })
        .then(employeeData =>{
            if(employeeData.title === 'Engineer'){
                return new Engineer();
            } else {
                return new Intern();
            };
        })
        .then(employee =>{
            return employee
            .employeePrompt()
            .then(() => employee)
        })
        .then(employee =>{
            return inquirer
            .prompt({
                type:"confirm",
                name:"MOAR",
                message: "Do you have more employees to add?"
            })
            .then(({MOAR}) => {
                this.employees.push(employee);
                if(MOAR){
                    return this.employeePrompt()
                };
            });
        });
    }
}

new Team().promptTeam();