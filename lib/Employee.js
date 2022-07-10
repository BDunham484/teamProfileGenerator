

function Employee(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.role = data.role;

    
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