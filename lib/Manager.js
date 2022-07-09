function Manager(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.officeNumber = Math.floor(Math.random() * 10 + 95);
    this.role = 'manager';

    Manager.prototype.getName = function() {
        return `The manager's name is ${this.name}`;
    };


    Manager.prototype.getId = function() {
        return `The manager's ID is ${this.id}`;
    ;}


    Manager.prototype.getEmail = function() {
        return `The manager's email is ${this.email}`;
    };

    Manager.prototype.getRole = function() {
        return `${this.name}'s role: ${this.role}`;
    };
};





module.exports = Manager;