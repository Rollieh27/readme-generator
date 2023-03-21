const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies",
    },
    {
      type: "input",
      name: "usage",
      message: "what do you need to know about using the repo?",
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT License", "GNU General Public License v3.0", "Apache License 2.0", "NONE"],
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be used to run tests?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github page?",
    },
  ])
  .then((data) => {
    const readmeContents = generateMarkdown(data);

// Function to write README file
fs.writeFile("README.md", readmeContents, (err) =>
      err ? console.log("Woah dude, something went wrong!") : console.log("Congrats, you created a Readme.md!")
    );
  });

// Function to initialize app
function init() {}

// Function call to initialize app
init();
