//import required for this file
const Employee = require('./Employee.js');

//engineer constructor function w/ properties and methods.  Inherits data from emplyee constructor.
function Engineer(data) {
    Employee.call(this, data);
    this.role = 'Engineer';
    this.github = data.github;
};

Engineer.prototype.getName = function () {
    return `The engineer's name is ${this.name}`;
};

Engineer.prototype.getId = function () {
    return `The engineer's ID is ${this.id}`;
    ;
}

Engineer.prototype.getEmail = function () {
    return `The engineer's email is ${this.email}`;
};

Engineer.prototype.getGithub = function () {
    return `The engineer's GitHub is ${this.github}`;
};

Engineer.prototype.getRole = function () {
    return `${this.name}'s role: ${this.role}`;
};




module.exports = Engineer;