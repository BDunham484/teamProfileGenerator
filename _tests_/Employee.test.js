
const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    data = {
        name: 'Rick',
        id: 1234,
        email: 'test@email.com'
    }
    
    const employee = new Employee(data);

    expect(employee.name).toBe('Rick');
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe('test@email.com');
})


test("gets employee's name", () => {
    const employee = new Employee('Rick');

    expect(employee.getName()).toEqual(expect.any(String));
});


test("gets employee's id", () => {
    const employee = new Employee('Rick');
    employee.id = 1234;

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});


test("gets employee's email", () => {
    const employee = new Employee('Rick');
    employee.email = 'test@email.com'

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets employee's role", () => {
    const employee = new Employee('Rick');
    employee.role = 'employee'

    expect(employee.getRole()).toEqual(expect.any(String));
});