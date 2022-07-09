
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Rick');
    

    expect(engineer.name).toBe('Rick');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
})


test("gets engineer's name", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.name).toBe('Rick');
});


test("gets engineer's id", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.id).toEqual(expect.any(Number));
});


test("gets engineer's email", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.email).toEqual(expect.stringContaining('@'));
});


test("gets engineer's github", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.github).toEqual(expect.any(String));
})


test("gets engineer's role", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.role).toEqual(expect.any(String));
});