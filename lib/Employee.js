

function Employee(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.role = 'employee';

    
    Employee.prototype.getName = function() {
        return `The employee's name is ${this.name}`;
    };


    Employee.prototype.getId = function() {
        return `The employee's ID is ${this.id}`;
    ;}


    Employee.prototype.getEmail = function() {
        return `The employee's email is ${this.email}`;
    };

    Employee.prototype.getRole = function() {
        return `${this.name}'s role: ${this.role}`;
    };

};



module.exports = Employee;