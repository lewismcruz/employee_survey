// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(github);

        this.name;
        this.id;
        this.email;
        this.github;
    }

    getGithub() {


    printInfo() {
        console.log(`The getGithub method worked! This person's GigHub is ${this.github}`);
    }    
    
    }

    getRole() {


    console.log("The getRole method worked!");
    }

}

module.exports = Employee;