// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const generateAllInfo = {
  renderLicenseBadge: function (license) {
    let agreement = "";
    if (license === 'Apache') {
      agreement = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === 'Boost') {
      agreement = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'MIT') {
      agreement = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === 'None') {
      agreement = "";
    }
    return agreement;
  },
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  // function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  generateMarkdown: function(data) {
    return `# ${data.title}

  # Description
    ${data.Description}
    
  # Table of Contents
  -Use(#Use)
  -Contributions(#Contributions)
  -License(#License)
  -GitHub(#GitHub)
  -Contact(#Contact)
    
  # Use
    ${data.use}
    
  # Contributions
    ${data.Contributions}
    
  # License
    ${data.License}
    ${this.renderLicenseBadge(data.license)}
    
  # GitHub
    ${data.GitHub}
    
  # Contact
    ${data.contact}
    
    `;
  },
};
  
  module.exports = generateAllInfo;
