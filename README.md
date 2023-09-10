# Employee-Tracker

# Employee Tracker

Employee Tracker is a command-line application that allows business owners to view and manage their departments, roles, and employees. It provides a simple interface for organizing and planning business operations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run the Employee Tracker app, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/employee-tracker.git

2. Navigate to the project directory:

    ```bash
    cd employee-tracker

3. Install the project dependencies:
    ```bash
    npm i

4. Set up you MySQL Database:
    - Create a database name 'employee-tracker'
    modify the database connection configuration in the 'server.js' file to match your MySQL server settings.

5. Seed the database with initial data:

    ```bash
    npm run seed

## Usage

### Commands
To start the Employee Tracker app, run the following command:
    ```bash
    npm start

You will be presented with a menu of options, including:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Exit
Follow the on-screen prompts to interact with the application and manage your company's data.

### Contributing 
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.
6. Please ensure that your code follows best practices, is well-documented, and includes relevant tests if applicable.

### License
This project is licensed under the MIT License.

### Thank Yous & Credits
Huge thank yous to Rommel, Ringo and Jose for helping me understand this more. Inquirer documentation (https://www.npmjs.com/package/inquirer), MySQL documentation (https://dev.mysql.com/doc/), and class notes on those topics were used in development. Google, ChatGPT, and AskBCS were used to debug.