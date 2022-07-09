//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js');





//an array of question for user input
const questions = [
    {
        type: 'input',
        name: 'test',
        message: 'Is this thing on?'
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
        const pageHTML = generatePage(answers);
        writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });