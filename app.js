const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// ​
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// ​
const render = require("./lib/htmlRenderer");
const teamMembers = [];
const {prompt} = require('inquirer');
const initial = [
  {
     name:"name",
     message:"What is the the Manager's name?",
     default: "yaya"
  },
  { 
     name:"id",
     message:"What is the the Manager's id?",
     default: 1
  },
  {
     name:"email",
     message:"Whar is the the Manager's email?",
     default: "yaya@gmail.com"
  },
  { 
     name:"officeNumber",
     message:"Whar is the the Manager's office number?",
     default: 100
  }];

  const menuPrompt = {
    name: 'action',
    message: "What team member would you like to add?",
    type: "list",
    choices: ['Intern', 'Engineer', 'I don"t want to add anymore']
  }

  const internPrompt = [
    {
       name:"name",
       message:"What is the the Intern's name?",
       default: "yaya"
    },
    { 
       name:"id",
       message:"What is the the Intern's id?",
       default: 1
    },
    {
       name:"email",
       message:"Whar is the the Intern's email?",
       default: "yaya@gmail.com"
    },
    { 
       name:"school",
       message:"Whar is the the Intern's school?",
       default: "UW"
    }];

    const engineerPrompt = [
      {
         name:"name",
         message:"What is the the Engineer's name?",
         default: "yaya"
      },
      { 
         name:"id",
         message:"What is the the Engineer's id?",
         default: 1
      },
      {
         name:"email",
         message:"Whar is the the Engineer's email?",
         default: "yaya@gmail.com"
      },
      { 
         name:"github",
         message:"Whar is the the Engineer's github?",
         default: "yaya420"
      }];

async function init(){
const answers = await prompt(initial);
console.log(answers)
const newManager = new Manager(answers.name,answers.id,answers.email, answers.officeNumber);
teamMembers.push(newManager);
menu()
}

async function menu(){
  const {action} = await prompt(menuPrompt);
  switch(action){
    case "Intern":
      createIntern();
      break;
    case "Engineer":
      createEngineer();
      break;
    default :
      createTeam();
      break;
  }
}

async function createIntern(){
  const answers = await prompt(internPrompt);
  const newIntern = new Intern(answers.name, answers.id, answers.email,answers.school);
  teamMembers.push(newIntern);
  menu();
}

async function createEngineer(){
  const answers = await prompt(engineerPrompt);
  const newEngineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
  teamMembers.push(newEngineer);
  menu();
}

function createTeam(){
  console.log(teamMembers)
  fs.writeFile('team.html', render(teamMembers), err=>{
    if(err) throw err;
    console.log('team generated!')
  })
}

init()


// switch (answers.type) {
//   case "Employee":
//     newEmployee =new Employee(answers.name,answers.id,answers.email,answers.officeNumber)
//     break;
//   case "Intern":
//     newEmployee =new Intern(answers.name,answers.id,answers.email,answers.officeNumber)
//     break;
//   case "Manager":
//       newEmployee =new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
//       break;
//   case "Engineer":
//     newEmployee =new Engineer(answers.name,answers.id,answers.email,answers.officeNumber)
//   break;

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
// for the provided `render` function to work!```
