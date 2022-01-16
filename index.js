// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Name:'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of project:'
    },
    {
        type: 'input',
        name: 'Use',
        message: 'What is the purpose of your project?'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who contributed:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['Apache', 'Boost', 'MIT']
    },
    {
        input: 'input',
        name: 'GitHub',
        message: 'GitHub Username:',
    },
    {
        input: 'input',
        name: 'contact',
        message: 'Contact Me:'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('newREADME.md', data,err => {
        if (err) {throw err}
        else {console.log('README was created!')}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answer => {
        if (answer) {
        } else {
            console.log('Please Provide Answer!!')
        }
        const data = generateMarkdown.generateMarkdown(answer)
        writeToFile(data);
    })
}

// Function call to initialize app
init();
