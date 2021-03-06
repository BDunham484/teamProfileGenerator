//import required to run this file
const Employee = require('./Employee.js');

//manager constructor function w/ properties and methods.  Inherits data from emplyee constructor.
function Manager(data) {
    Employee.call(this, data);
    this.role = 'Manager';
    this.officeNumber = data.officeNumber;
};

Manager.prototype.getName = function () {
    return `The manager's name is ${this.name}`;
};

Manager.prototype.getId = function () {
    return `The manager's ID is ${this.id}`;
}

Manager.prototype.getEmail = function () {
    return `The manager's email is ${this.email}`;
};

Manager.prototype.getRole = function () {
    return `${this.name}'s role: ${this.role}`;
};




module.exports = Manager;