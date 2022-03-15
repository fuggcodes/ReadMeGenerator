// TODO: Include packages needed for this application
const inquirer = require("inquirer");
var fs = require("fs");

const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What's your username on github",
    },
    {
        type: "list",
        name: "license",
        message: `What kind of license does your project have`,
        choices: ["MIT", "GNU GPLv3", "Apache-2.0", "ISC"]
    },
    {
        type: "input",
        name: "email",
        message: `What's your email address?`,
    },
    {
        type: "input",
        name: "title",
        message: `What is your project's name?`,
    },
    {
        type: "input",
        name: "descriptions",
        message: `describe your project?`,
    },

    {
        type: "input",
        message: `How can someone install your program?`,
        name: "install",
    },
    
    {
        type: "input",
        message: `What is this project used for?`,
        name: "usage",
    },
    {
        type: "input",
        name: "contributing",
        message: `Who's a contributor for this project?`,
    },
    {
        type: "input",
        name: "test",
        message: "what are you testing?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
