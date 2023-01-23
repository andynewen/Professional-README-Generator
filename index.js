const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./util/generateMarkdown");

writeToFile = (fileName, data) => {
  fs.writeFile(`.//${fileName}`, data, err => {
      if (err) {
          return console.log(err);
      }

      console.log("Congratulations, your README.md file is now ready for your new application!")
  });
}
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title",
        },
  
        {
          type: "input",
          message: "Enter the description of your project",
          name: "description",
        },
  
        {
          type: "input",
          message: "How do you install your app?",
          name: "installation",
        },
  
        {
          type: "input",
          message: "How do you use your app?",
          name: "usage",
        },
  
        {
          type: "list",
          message: "What license did you use?",
          name: "license",
          choices: ["MIT", "BSD3 ", "APACHE 2.0", "N/A"],
        },
  
        {
          type: "input",
          message: "Who are the contributors?",
          name: "contribution",
        },
  
        {
          type: "input",
          message: "Test",
          name: "test",
        },
  
        {
          type: "input",
          message: "questions",
          name: "question",
        },
  
        {
          type: "input",
          message: "Enter you email address",
          name: "email",
        },
  
        {
          type: "input",
          message: "Enter your Github Username",
          name: "github",
        },
      ])
      .then((data) => {
        let formatted = markdown(data);
        // console.log(formatted);
  
        writeToFile("README.md", formatted);
      });
  }
  
  // Function call to initialize app
  init();