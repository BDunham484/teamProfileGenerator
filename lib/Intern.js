function Intern(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.school = 'U.T.';
    this.role = 'intern';
}





module.exports = Intern;