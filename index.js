//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const teamData = [];


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

        teamData.push(manager);

        if (managerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            return managerData;
        } else if (managerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            return managerData;
        } else {
            console.log("SHIT'S DONE")
            return managerData;  
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

        teamData.push(engineer);
        console.log(teamData);

        if (engineerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            return teamData;
        } else if (engineerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
            return teamData;
        } else {
            console.log("SHIT'S DONE")
            return teamData;  
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

        teamData.push(intern);
        console.log(teamData);

        if (internData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
            return teamData;
        } else if (internData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
            return teamData;
        } else {
            console.log("SHIT'S DONE")
            return teamData;  
        }
    })
}







//function to create page
const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        // console.log('/////////////////////////Page Complete!!! Check the `dist` directory for the results!!////////////////////////////////');
    });
};





//a function to initialize the app
// const init = () => {
//     return inquirer.prompt(questions)

    
    
// }





//function call to initialize app
// init()
//     // .then(managerData => {
//     // teamData.push(managerData);
//     // console.log(teamData);
//     // })
//     .then(answers => {
//         teamData.push(answers);
//         console.log(teamData);

//         this.manager = new Manager(answers)
//         console.log(this.manager)
//         if (answers.role === 'Engineer') {

//         }

//         const pageHTML = generatePage(this.manager);
//         writeToFile(pageHTML);
//     })
//     .catch(err => {
//         console.log(err);
//     });

questions()
    .then(managerData => {
        // console.log(managerData);

        const pageHTML = generatePage(managerData);
        writeToFile(pageHTML);
        })
        .catch(err => {
        console.log(err);
        });