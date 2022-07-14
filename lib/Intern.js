const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = '', email ='', school='', employeeID = 0){
        super();

        this.name = name;
        this.email = email;
        this.school = school;
        this.employeeID = employeeID;
    }

    employeePrompt(){
        super.employeePrompt()
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