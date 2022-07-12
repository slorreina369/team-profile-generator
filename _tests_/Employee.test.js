const Employee = require ('../lib/Employee');

test('creates a employee', () =>{
    const employee = new Employee('Dave', 'email', 0);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('email');
    expect(employee.employeeID).toEqual(expect.any(Number));
});