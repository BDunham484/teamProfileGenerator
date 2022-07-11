//import required for the file
const Engineer = require('../lib/Engineer');

//creates tests using jest to test the engineer constructor properties and methods
test('creates an engineer object', () => {
    data = {
        name: 'Rick',
        id: 1234,
        email: 'test@email.com',
        github: 'ghUsername'
    }
    const engineer = new Engineer(data);
    

    expect(engineer.name).toBe('Rick');
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe('test@email.com');
    expect(engineer.github).toBe('ghUsername');
})


test("gets engineer's name", () => {
    const engineer = new Engineer('Rick');

    expect(engineer.getName()).toEqual(expect.any(String));
});


test("gets engineer's id", () => {
    const engineer = new Engineer('Rick');
    engineer.id = 1234;

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});


test("gets engineer's email", () => {
    const engineer = new Engineer('Rick');
    engineer.email = 'test@gmail.com'

    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets engineer's github", () => {
    const engineer = new Engineer('Rick');
    engineer.github = 'ghUsername';

    expect(engineer.getGithub()).toEqual(expect.any(String));
})


test("gets engineer's role", () => {
    const engineer = new Engineer('Rick');
    engineer.role = 'engineer'

    expect(engineer.getRole()).toEqual(expect.any(String));
});