const Employee = require('./Employee');





function Intern(data) {
    Employee.call(this, data);
    this.role = 'Intern'
    this.school = data.school;
};

Intern.prototype.getName = function () {
    return `The intern's name is ${this.name}`;
};


Intern.prototype.getId = function () {
    return `The intern's ID is ${this.id}`;
    ;
}


Intern.prototype.getEmail = function () {
    return `The intern's email is ${this.email}`;
};

Intern.prototype.getSchool = function () {
    return `The intern went to ${this.school}`;
};

Intern.prototype.getRole = function () {
    return `${this.name}'s role: ${this.role}`;
};






module.exports = Intern;