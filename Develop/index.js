const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your markdown file? (Required)"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter how to start this app (installation).",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter how to use this app.",
    },
    {
      type: "input",
      name: "credits",
      message: "Enter credits.",
    },
    {
      type: "input",
      name: "license",
      message: "Enter the licenses.",
    },
    {
      type: "input",
      name: "badges",
      message: "Enter badges.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributions.",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter tests.",
    },
    {
      type: "input",
      name: "profile",
      message: "Enter your Github profile.",
    },
  ]).then(projectData => {
    return projectData;
  });
};

promptUser()
  .then(markdownData => {
    const pageHTML = generatePage(markdownData);

    fs.writeFile(`./${markdownData.title}.md`, pageHTML, err => {
      if (err) throw new Error(err);

      console.log(`Page created! Check out ${markdownData.title}.md in this directory to see it!`);
    });
  });