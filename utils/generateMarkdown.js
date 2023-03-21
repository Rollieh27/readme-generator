// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badges = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    'NONE': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  };

  return badges[license];
}

// Function that returns the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU General Public License v3.0': 'https://perso.crans.org/besson/LICENSE.html',
    'NONE': 'http://unlicense.org/'
  };

  return licenseLinks[license];
}

// Function that returns the license section of README
function renderLicenseSection(license) {
	return license
		? `[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    : '';
  }


// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseSection(data.license)}

  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## DESCRIPTION 
  ${data.description}

  ## INSTALLATION 
  ${data.installation}

  ## USAGE 
  ${data.usage}

  ## LICENSE 
  ${data.license}

  ## CONTRIBUTION 
  ${data.contribution}

  ## TESTS 
  ${data.tests}

  ## QUESTIONS 
  ### Reach me at:
  #### Github: (github.com/${data.github})<br>
  #### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
