//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js');
const Employee = require('./lib/Employee.js');





//an array of question for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter employee's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "What is employee's email address?"
    },
    {
        type: 'list',
        name: 'role',
        message: "Role?",
        choices: ['Employee', 'Manager', 'Engineer', 'Intern']
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
        // console.log(answers)
        this.employee = new Employee(answers)
        console.log(this.employee)
        const pageHTML = generatePage(answers);
        writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });