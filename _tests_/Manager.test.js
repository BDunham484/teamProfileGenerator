const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    data = {
        name: 'Rick',
        id: 1234,
        email: 'test@email.com',
        officeNumber: 4321
    }

    const manager = new Manager(data);
    

    expect(manager.name).toBe('Rick');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('test@email.com');
    expect(manager.officeNumber).toBe(4321);
});


test("gets manager's name", () => {
    const manager = new Manager('Rick');

    expect(manager.getName()).toEqual(expect.any(String));
});


test("gets manager's id", () => {
    const manager = new Manager('Rick');
    manager.id = 1234;

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});


test("gets manager's email", () => {
    const manager = new Manager('Rick');
    manager.email = 'test@email.com'

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Rick');
    manager.officeNumber = 4321;

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test("gets manager's role", () => {
    const manager = new Manager('Rick');
    manager.role = 'manager';

    expect(manager.getRole()).toEqual(expect.any(String));
});