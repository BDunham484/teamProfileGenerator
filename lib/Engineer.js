function Engineer(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.github = data.github;
    this.role = data.role;

    Engineer.prototype.getName = function() {
        return `The engineer's name is ${this.name}`;
    };


    Engineer.prototype.getId = function() {
        return `The engineer's ID is ${this.id}`;
    ;}


    Engineer.prototype.getEmail = function() {
        return `The engineer's email is ${this.email}`;
    };


    Engineer.prototype.getGithub = function() {
        return `The engineer's GitHub is ${this.github}`;
    };


    Engineer.prototype.getRole = function() {
        return `${this.name}'s role: ${this.role}`;
    };
};





module.exports = Engineer;