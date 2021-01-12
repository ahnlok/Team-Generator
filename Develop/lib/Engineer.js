// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

// Creating an Engineer class that extends Employee
class Engineer extends Employee{
    constructor(name, id, github){
        super(name, id, email)
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}
// export
module.exports = Engineer;