const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Team {

    QuestionPrompt(){
        inquirer
        .prompt({
            type:'text',
            name: 'name',
            message: 'What is their name?'
        },
        {
            type:'text',
            name:'email',
            message:'What is their email?'
        },
        {
            type:'text',
            name:'employeeID',
            message:'what is their employee ID number?'
        })
    };

    promptTeam(){
        let Manager = this.QuestionPrompt();
        let continueTeam = true;
        let teamManagement = [];

        while(continueTeam){
            this.QuestionPrompt().then(employeeData =>{
                if(employeeData.title === 'Engineer'){
                    return new Employee(employeeData);
                } else {
                    return new Intern(employeeData);
                };
            })
            .then(employee =>{
                teamManagement.push(employee);
                return inquirer.prompt({
                    type:"confirm",
                    name:"MOAR",
                    message: "Do you have more employees to add?"
                });
            })
        }
    }
}