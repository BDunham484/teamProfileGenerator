function Engineer(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.github = 'github.com/username';
    this.role = 'engineer';

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