//import required for this file
const Intern = require('../lib/Intern');

//creates tests using jest to test the intern constructor properties and methods
test('creates an intern object', () => {
    data = {
        name: 'Rick',
        id: 1234,
        email: 'test@email.com',
        school: 'U.T.'
    }
    const intern = new Intern(data);
    

    expect(intern.name).toBe('Rick');
    expect(intern.id).toBe(1234);
    expect(intern.email).toBe('test@email.com');
    expect(intern.school).toBe('U.T.');
});

test("gets intern's name", () => {
    const intern = new Intern('Rick');

    expect(intern.getName()).toEqual(expect.any(String));
});


test("gets intern's id", () => {
    const intern = new Intern('Rick');
    intern.id = 1234;

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});


test("gets intern's email", () => {
    const intern = new Intern('Rick');
    intern.email = 'test@email.com'

    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets intern's school", () => {
    const intern = new Intern('Rick');

    expect(intern.getSchool()).toEqual(expect.any(String));
})


test("gets intern's role", () => {
    const intern = new Intern('Rick');
    intern.role = 'intern';

    expect(intern.getRole()).toEqual(expect.any(String));
});