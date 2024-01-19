let readme = null;

let fullName = "Mohamad AlMeari";
let username = "mohametalmeari";

let projectName = "Generate README";
let repository = "generate-readme";
let description = "is a simple README generator";
const stack = [
  {
    groupTitle: "Client",
    groupStack: [
      {
        name: "React.js",
        link: "https://reactjs.org/",
      },
    ],
  },
  {
    groupTitle: "Server",
    groupStack: [
      {
        name: "Rails",
        link: "https://rubyonrails.org/",
      },
    ],
  },
  {
    groupTitle: "Database",
    groupStack: [
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
    ],
  },
];
const keyFeatures = ["Generate README file", "Generate License file"];
let liveDemo = "https://mohametalmeari.github.io/generate-readme/";

const gettingStarted = [
  {
    title: "Prerequisites",
    text: "In order to run this project you need: Node.js, Ruby, Rails, PostgreSQL",
    commands: [],
  },
  {
    title: "Setup",
    text: "Clone this repository to your desired folder:",
    commands: ["git clone ...", "cd ..."],
  },
  {
    title: "Install",
    text: "Install this project with:",
    commands: ["npm install"],
  },
  {
    title: "Usage",
    text: "To run the project, execute the following command:",
    commands: ["npm run dev"],
  },
  {
    title: "Run tests",
    text: "To run tests, run the following command:",
    commands: ["npm test"],
  },
  {
    title: "Deployment",
    text: "You can deploy this project using:",
    commands: ["npm run deploy"],
  },
];

const authors = [
  {
    name: "Mohamad",
    accounts: [
      {
        name: "GitHub",
        username: "mohametalmeari",
        link: "https://github.com/mohametalmeari",
      },
      {
        name: "LinkedIn",
        username: "mohametalmeari",
        link: "https://www.linkedin.com/in/mohamet-almeari/",
      },
    ],
  },
];

const futureFeatures = ["Upload logo", "Create UI"];
let supportMessage = "Give a ⭐️ if you like this project!";
let acknowledgements = "Thanks to Microverse for the README template.";
const faq = [
  {
    question: "What is the license of this project?",
    answer: "This project is licensed under the MIT license.",
  },
  {
    question: "How can I contribute to this project?",
    answer: "You can fork this repository and submit a pull request.",
  },
];

const license = {
  name: "MIT",
  description: "Under construction",
  link: "./LICENSE",
};

let stackString = "";
stack.forEach((group) => {
  let techString = "";
  group.groupStack.forEach((item) => {
    techString += `<li><a href="${item.link}">${item.name}</a></li>`;
  });

  stackString += `
<details>
  <summary>${group.groupTitle}</summary>
    <ul>
      ${techString}
    </ul>
</details>
`;
});

let keyFeaturesString = "";
keyFeatures.forEach((feature) => {
  keyFeaturesString += `- **${feature}**\n`;
});

let getStartedString = "";
let getStartedMenuString = "";
gettingStarted.forEach((step) => {
  let commandsString = "```sh\n";
  step.commands.forEach((command) => {
    commandsString += `${command}\n`;
  });
  commandsString += "```";
  getStartedString += `
### ${step.title}
${step.text}
${step.commands.length > 0 && commandsString}
`;
  getStartedMenuString += `  - [${step.title}](#${step.title
    .toLowerCase()
    .replace(/ /g, "-")})\n`;
});

let authorsString = "";
authors.forEach((author) => {
  let accountsString = "";
  author.accounts.forEach((account) => {
    accountsString += `- ${account.name}: [@${account.username}](${account.link})\n`;
  });
  authorsString += `👤 **${author.name}**
${accountsString}`;
});

let futureFeaturesString = "";
futureFeatures.forEach((feature) => {
  futureFeaturesString += `- **${feature}**\n`;
});

let faqString = "";
faq.forEach((item) => {
  faqString += `
- **${item.question}**
  - ${item.answer}
  `;
});

readme = `
<a name="readme-top"></a>

<div align="center">
  <img src="logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>README</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
${getStartedMenuString}
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
${faq.length > 0 && "- [❓ FAQ](#faq)"}
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 ${projectName} <a name="about-project"></a>

**${projectName}** ${description}

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>
${stackString}

<!-- Features -->

### Key Features <a name="key-features"></a>
${keyFeaturesString}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](${liveDemo})

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

${getStartedString}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

${authorsString}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

${futureFeaturesString}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

${supportMessage}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

${acknowledgements}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

${
  faq.length > 0 &&
  `
<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>
  `
}
${faqString}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [${license.name}](${license.link}) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

`;

document.getElementById("generate").addEventListener("click", () => {
  const blob = new Blob([readme], { type: "text/plain" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "README.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

document.getElementById("preview").addEventListener("click", () => {
  document.getElementById("readme").innerHTML = marked.parse(readme);
});
