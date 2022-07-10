//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');





//an array of question for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is team manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'role',
        message: "Which type of teammember would you like to add?",
        choices: ['Manager', 'Engineer', 'Intern', "I don't want to add any more team members"]
    }
]





//function to create page
const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log('/////////////////////////Page Complete!!! Check the `dist` directory for the results!!////////////////////////////////');
    });
};





//a function to initialize the app
const init = () => {
    return inquirer.prompt(questions);
    
}





//function call to initialize app
init()
    .then(answers => {
        console.log(answers)
        this.manager = new Manager(answers)
        console.log(this.manager)
        const pageHTML = generatePage(answers);
        writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });