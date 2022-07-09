
const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Rick');
    

    expect(employee.name).toBe('Rick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
})


test("gets employee's name", () => {
    const employee = new Employee('Rick');

    expect(employee.getName()).toEqual(expect.any(String));
});


test("gets employee's id", () => {
    const employee = new Employee('Rick');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});


test("gets employee's email", () => {
    const employee = new Employee('Rick');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets employee's role", () => {
    const employee = new Employee('Rick');

    expect(employee.getRole()).toEqual(expect.any(String));
});