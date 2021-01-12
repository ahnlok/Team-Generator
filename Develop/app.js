const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMember = [];

function mainApp() {
    // Manager class
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manger's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manger's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manger's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manger's office number?"
        },
    ]).then(answers => {
        let { name, id, email, officeNumber } = answers;
        let manager = Manager(name, id, email, officeNumber);

        // Add manger to the team array
        teamMember.push(manager);

        // Initiating the prompt to ask for more team members
        createTeam();
    });
};

// Creating a list to add team members
function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name:"command",
            message: "Do you want to include more team members to the list?",
            choices: ["Add an Engineer", "Add an Intern", "Create the Team"]
        }
    ]).then(answers => {
        // Switch statement to choose the choices of selected options
        statement = answers.command;

        switch(statment){
            case "Add an Engineer":
                getEngineer();
                break;
            
            case "Add an Intern":
                getIntern();
                break;
            
            case "Create the Team":
                buildTeam();
                break;
        }
    })
}
// Create engineer function
function getEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?"
        },
    ]).then(answers => {
        let { name, id, email, github } = answers;
        let engineer = Engineer(name, id, email, github);
        teamMember.push(engineer);
    });
}
// Function to create Intern
function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school name?"
        },
    ]).then(answers => {
        let { name, id, email, school } = answers;
        let intern = Intern(name, id, email, school);
        teamMember.push(intern);
    });
}

// Function to build team
function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMember), "utf-8");
}

mainApp()