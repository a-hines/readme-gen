// TODO: Create a function that returns a license badge based on which license is passed in

const { default: ListPrompt } = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === 'Apache 2.0') {
    badge =
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === 'Boost Software License 1.0') {
    badge =
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === 'GNU GPLv3') {
    badge =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === 'Mozilla Public License 2.0') {
    badge = 
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "The Unlicense") {
    badge = 
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === 'Apache 2.0') {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === 'Boost Software License 1.0') {
    licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
  }else if (license === 'GNU GPLv3') {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === "The Unlicense") {
    licenseLink = "https://choosealicense.com/licenses/unlicense/";
  } else license = "None";

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
