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
        teamMemeber.push(manager);

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
            message: "What is the manger's name?"
        },
    ])
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
