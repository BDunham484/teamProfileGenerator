function Manager(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.officeNumber = Math.floor(Math.random() * 10 + 95);
    this.role = 'manager';
}





module.exports = Manager;