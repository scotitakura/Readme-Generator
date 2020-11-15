// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  # ${data.title}

  ## Description 
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${data.license}
  
  ## Badges
  ${data.badges}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Tests
  ${data.profile}
  `;
}

module.exports = generateMarkdown;
