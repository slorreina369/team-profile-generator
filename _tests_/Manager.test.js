const Manager = require('../lib/Manager');

test('creates a Manager', () =>{
    const employee = new Manager('Dave', 'email',1, 3);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('email');
    expect(employee.officeNum).toEqual(expect.any(Number));
    expect(employee.employeeID).toEqual(expect.any(Number));
});