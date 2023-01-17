//importing inquirer
const inquirer = require("./node_modules/inquirer");
//importing filesystem
const fs = require('fs');
//inquirerfunction
inquirer
//calling the prompt method
.prompt([
    //prompts to establish readme information
    {
        type: "input",
        message: "What is the title of your project",
        name: "title",
    },
    {
        type:"input",
        message: "what would you like the description to be?",
        name: "description"
    },
    {
        type:"input",
        message: "describe the installation instructions",
        name: "install"
    },
    {
        type:"input",
        message: "share some information on how to use your project",
        name: "info"
    },
    {
        type:"input",
        message: "share some contribution guidelines!",
        name: "contribution"
    },
    {
        type:"input",
        message: "what are the test instructions?",
        name: "instructions"
    },
    {
        type:"input",
        message: "what is your github username?",
        name: "github"
    },
    {
        type:"input",
        message: "what is your email adress?",
        name: "email"
    },
    //the included licenses are the ones i found to be most commonly used, although so far i have only ever used MIT licensing
    {
        type:"list",
        message: "what badge would you like to use?",
        choices: ["MIT", "GNU", "Apache"],
        name: "badge"
        },
])
//getting the answers to the prompts and splitting them into variables to be used in the markdownfile to be created
.then ((answers) =>
{
    var title = answers.title
    var description = answers.description
    var install = answers.install
    var info = answers.info
    var contribution = answers.contribution
    var instructions = answers.instructions
    var github = answers.github
    var email = answers.email
    var badge = answers.badge
    //creating the markdown file using filesystem
    fs.writeFile('./output/README.md',
    //the readme itself, formatted and styled as a markdown file
`# ${title}\n  

- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contribution](#contributing)\n
- [License](#license)\n

## License\n
![${badge}](https://img.shields.io/github/license/${github}/${title})
\n
${description}\n
\n
\n
## Installation\n
${install}\n
\n
## Usage\n
${info}\n
\n
## Contributing\n
${contribution}\n
\n
## Testing\n
${instructions}\n
\n
## Questions\n
Contact me!\n
Github: https://github.com/${github}\n
Email: ${email}\n
`,
//error catch and console log in case of success
      (err)=>
    err ? console.error(err) : console.log('Enjoy your ReadMe!')
    )

});