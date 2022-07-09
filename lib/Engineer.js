function Engineer(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = 'test@email.com';
    this.github = 'github.com/username';
    this.role = 'engineer';
}





module.exports = Engineer;