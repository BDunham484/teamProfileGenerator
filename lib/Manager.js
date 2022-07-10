function Manager(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.officeNumber = data.officeNumber;
    this.role = data.role;

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