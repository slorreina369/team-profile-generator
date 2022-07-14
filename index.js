const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./lib/generateHTML');

class Team {
    constructor(){
        this.employees = []
    }
    promptTeam(){
        let manager = new Manager();
        this.employees.push(manager);

        return manager.employeePrompt()
        .then(() => {
            console.log("Thank you, next!")
            return this.employeePrompt();
        })
        .then(() => {
            return inquirer
            .prompt({
                type:"text",
                name:"file_name",
                message:"What's your file name?"
                // make it funny
            })
        })
        .then(({file_name}) => {
            writeToFile(file_name, this.employees);
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
};

function writeToFile(fileName, data) {
    console.log(fileName);
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, generateHTML(data), err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'Team Page Created!'
            });
        })
    })
}

new Team().promptTeam();