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
              console.log('Please enter your name!');
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
        name: 'motivation',
        message: 'What was your motivation?/Why did you build this project?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn while building this project?'
    },
    {
        type: 'input',
        name: 'standout',
        message: 'What makes your project stand out?'
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
