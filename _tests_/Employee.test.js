
const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Rick');
    

    expect(employee.name).toBe('Rick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
})


test("gets employee's name", () => {
    const employee = new Employee('Rick');

    expect(employee.name).toBe('Rick');
});


test("gets employee's id", () => {
    const employee = new Employee('Rick');

    expect(employee.id).toEqual(expect.any(Number));
});


test("gets employee's email", () => {
    const employee = new Employee('Rick');

    expect(employee.email).toEqual(expect.stringContaining('@'));
});


test("gets employee's role", () => {
    const employee = new Employee('Rick');

    expect(employee.role).toEqual(expect.any(String));
});