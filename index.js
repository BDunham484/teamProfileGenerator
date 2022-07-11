//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js');
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// const cardList = document.querySelector('#card-list');

const teamDataArr = [];


//an array of question for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ]).then(managerData => {
        let manager = new Manager(managerData);

        teamDataArr.push(manager);
        console.log('////////////////////ARRAY UPDATE///////////////')
        console.log(teamDataArr)



        if (managerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            // return manager;
        } else if (managerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
            // return manager;
        } else {
            console.log("SHIT'S DONE")
            // return manager;  
            const pageHTML = generatePage(teamDataArr);
            writeToFile(pageHTML);
        }
    })
};






const engineerQuestions = () => {


    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }

    ]).then(engineerData => {
        let engineer = new Engineer(engineerData);

        teamDataArr.push(engineer);
        console.log('////////////////ARRAY UPDATE///////////////')
        console.log(teamDataArr);

        if (engineerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            // return engineer;
        } else if (engineerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
            // return engineer;
        } else {
            console.log("SHIT'S DONE")
            const pageHTML = generatePage(teamDataArr);
            writeToFile(pageHTML);
            

        }
    })
};









const internQuestions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the school name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ]).then(internData => {
        let intern = new Intern(internData);

        teamDataArr.push(intern);
        console.log('////////////////ARRAY UPDATE///////////////')
        console.log(teamDataArr);

        if (internData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            // return intern;
        } else if (internData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
            // return intern;
        } else {
            console.log("SHIT'S DONE")
            // return intern;
            const pageHTML = generatePage(teamDataArr);
            writeToFile(pageHTML);

        }
    })
}





//function to create page
const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
    });
};




questions()
    // .then(manager => {
    //     //create initial html page
    //     const pageHTML = generatePage(manager);
    //     writeToFile(pageHTML);
    //     })
    //     .catch(err => {
    //     console.log(err);
    //     });
