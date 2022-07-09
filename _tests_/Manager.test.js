
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Rick');
    

    expect(manager.name).toBe('Rick');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("gets manager's name", () => {
    const manager = new Manager('Rick');

    expect(manager.name).toBe('Rick');
});


test("gets manager's id", () => {
    const manager = new Manager('Rick');

    expect(manager.id).toEqual(expect.any(Number));
});


test("gets manager's email", () => {
    const manager = new Manager('Rick');

    expect(manager.email).toEqual(expect.stringContaining('@'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Rick');

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test("gets manager's role", () => {
    const manager = new Manager('Rick');

    expect(manager.role).toEqual(expect.any(String));
});