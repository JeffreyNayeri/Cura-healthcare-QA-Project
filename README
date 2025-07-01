
# CURA Healthcare QA Project

This project automates end-to-end testing for the CURA Healthcare Service website using [Cypress](https://www.cypress.io/). It includes manual test cases, a test plan, test summary report, test script, custom commands, and configuration to ensure the reliability of core functionalities like booking appointments and navigating through the web application.

---

## 📁 Project Structure

```

.
├── automation script/
│   └── testscript.cy.js      # Cypress test spec file
├── cypress/
│   ├── fixtures/             # Sample test data (JSON)
│   │   └── example.json
│   └── support/
│       ├── commands.js       # Custom Cypress commands
│       └── e2e.js            # Support file loaded before tests
├── test-artifacts/
|   ├── Test cases            
│   ├── Test plan       
│   └── Test summary report              
├── .gitignore
├── cypress.config.js         # Cypress configuration
├── package.json              # NPM project metadata
├── package-lock.json
└── README

````

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/)


---

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeffreyNayeri/Cura-healthcare-QA-Project.git
   cd Cura-healthcare-QA-Project
    ````

2. Install dependencies:

   ```bash
   npm install
   ```

---

### 🧪 Running Tests

To open Cypress Test Runner:

```bash
npx cypress open
```

To run tests in headless mode (CI-friendly):

```bash
npx cypress run
```

---

## 🧩 Custom Commands

All reusable commands are stored in:

```
cypress/support/commands.js
```

You can add your own custom commands using:

```js
Cypress.Commands.add('commandName', () => {
  // logic here
})
```

---

## 🛠 Configuration

The Cypress config is defined in:

```
cypress.config.js
```

Custom spec pattern used to locate tests in the `automation script/` folder:

```js
specPattern: 'automation script/**/*.cy.{js,jsx,ts,tsx}'
```

Support file setup:

```js
supportFile: 'cypress/support/e2e.js'
```

---


