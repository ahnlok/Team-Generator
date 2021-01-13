const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

const teamMembers = [];
const emptyID = [];

const employeeQuestions= [
    
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
];
// Manager Function
function manager() {
    console.log("Let's build your team!");
    inquirer.prompt(employeeQuestions).then(function(data){
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamMembers.push(manager);
        emptyID.push(data.id);
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
            choices: ["Engineer", "Intern", "Do Not Add Anymore"]
        }
    ]).then(function(data){
        // Switch statement to choose the choices of selected options
        if (data.command === "Engineer"){
            engineer();
        } else if (data.command === "Intern"){
            intern();
        } else (outputTeam()); 
    });
}
// Create engineer function
function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameEngineer",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "idEngineer",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "emailEngineer",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "githubEngineer",
            message: "What is the engineer's github?"
        },
    ]).then(function(data) {
        const engineer = new Engineer(data.nameEngineer, data.idEngineer, data.emailEngineer, data.githubEngineer);
        teamMembers.push(engineer);
        emptyID.push(data.idEngineer);
        createTeam();
    });
};
// Function to create Intern
function intern() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameIntern",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "idIntern",
            message: "What is the Intern's id?"
        },
        {
            type: "input",
            name: "emailIntern",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "schoolIntern",
            message: "What is the Intern's school name?"
        },
    ]).then(function(data) {
        const intern = new Intern(data.nameIntern, data.idIntern, data.emailIntern, data.schoolIntern);
        teamMembers.push(intern);
        emptyID.push(data.idIntern);
        createTeam();
    });
}

// Function to build team
function outputTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

manager()