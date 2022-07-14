
class Employee {
    constructor(name = '', email='', employeeID =''){
        this.name = name;
        this.email = email;
        this.employeeID = employeeID;
    }

    employeePrompt(){
        return inquirer
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
        .then(employeeData =>{
            this.name = employeeData.name;
            this.email = employeeData.email;
            this.employeeID = employeeData.employeeID;
        })
    };
}


module.exports = Employee