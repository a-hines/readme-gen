// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else { 
              console.log('Please enter the name of your project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else { 
              console.log('Please enter your Github username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else { 
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your deployed application. (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What technologies did you use in this project? (Check all that apply.)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Express', 'MySQL', 'bcrypt', 'Sequelize', 'MongoDB', 'React', 'Other']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide instructions for installation of your project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is your project covered under?',
        choices: ['Apache 2.0', 'Boost Software License 1.0', 'GNU GPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to run tests for your project:'
    }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log('README created! Checkout README.md in this directory to see it.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    });
}

// Function call to initialize app
init();
