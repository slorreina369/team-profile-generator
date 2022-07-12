const Intern = require('../lib/Intern');

test('creates an unpaid intern', () =>{
    const employee = new Intern('Dave', 'email','school', 4);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('email');
    expect(employee.school).toBe('school');
    expect(employee.employeeID).toEqual(expect.any(Number));
});