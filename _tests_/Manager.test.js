
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

    expect(manager.getName()).toEqual(expect.any(String));
});


test("gets manager's id", () => {
    const manager = new Manager('Rick');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});


test("gets manager's email", () => {
    const manager = new Manager('Rick');

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Rick');

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test("gets manager's role", () => {
    const manager = new Manager('Rick');

    expect(manager.getRole()).toEqual(expect.any(String));
});