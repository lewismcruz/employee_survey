// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(github);

        this.name;
        this.id;
        this.email;
        this.github;
        this.school;
    }

    getGithub() {


    printInfo() {
        console.log(`The getGithub method worked! This person's GigHub is ${this.github}`);
    }    
    
    }

    getSchool() {
        
    }

    getRole() {


    console.log("The getRole method worked!");
    }

}

module.exports = Employee;