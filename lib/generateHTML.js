const Manager = require("./Manager");

function generateHTML(employees){
    return `
    <!DOCTYPE html>
    <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>

        <body>
            <header>
                <div class="flex-row justify-space-between align-center py-3">
                    <h1 class="page-title text-white .p-5 bg-danger d-flex justify-content-around">My Team</h1>
                </div>
            </header>

            <main class="container my-5">
               <section class="card-holder d-flex flex-row flex-wrap justify-space-between">
               ${employees.map(generateCard).join('')};
               </section>
            </main>
      </body>
      </html> 
    `
};

function generateCard(employee){
    let placeholder;
    switch(employee.constructor.name){
        case 'Manager': 
        placeholder = 'Office Number:' + employee.officeNum;
        break;
        case 'Engineer': 
        placeholder = 'GitHub:' + `<a href="https://github.com/${employee.github}">${employee.github}</a></li>`;
        break;
        case 'Intern': 
        placeholder = 'School:' + employee.school;
        break;
    };
    return `
    <div class="card m-2" style="width: 18rem;">
                    <header class="bg-primary">
                        <h2 class="text-white">${employee.name}</h2>
                        <h3 class="text-white">${employee.constructor.name}</h3>
                    </header>
                    <div class="card-body bg-light">
                        <ul class="card-text list-group bg-white">
                            <li class="list-group-item">ID: ${employee.employeeID}</li>
                            <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">${placeholder}</li>
                        </ul>
                    </div>
                  </div>
    `
};

module.exports = generateHTML;