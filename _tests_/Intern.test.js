
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Rick');
    

    expect(intern.name).toBe('Rick');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern('Rick');

    expect(intern.getName()).toEqual(expect.any(String));
});


test("gets intern's id", () => {
    const intern = new Intern('Rick');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});


test("gets intern's email", () => {
    const intern = new Intern('Rick');

    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets intern's school", () => {
    const intern = new Intern('Rick');

    expect(intern.getSchool()).toEqual(expect.any(String));
})


test("gets intern's role", () => {
    const intern = new Intern('Rick');

    expect(intern.getRole()).toEqual(expect.any(String));
});