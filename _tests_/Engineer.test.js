const Engineer = require('../lib/Engineer');

test('creates a engineer', () =>{
    const employee = new Engineer('Dave', 'email','github', 4);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('email');
    expect(employee.github).toBe('github');
    expect(employee.employeeID).toEqual(expect.any(Number));
});