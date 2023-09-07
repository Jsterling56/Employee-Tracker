const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Pawnee225',
    database: 'employee_tracker',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the employee tracker database.');
    startApp();
});

function startApp() {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
            ],
        },     
    ])
    .then((answer) =>{
        switch(answer.action) {
            case 'View all departments':
                // Implement the viewDepartments function
            break;
            case 'View all roles':
                // Implement the viewRoles function
            break;
            case 'View all employees':
                // Implement the viewEmployees function
            break;
            case 'Add a department':
                // Implement the addDepartment function
            break;
            case 'Add a role':
                // Implement the addRole function
            break;
            case 'Add an employee':
                // Implement the addEmployee function
            break;
            case 'Exit':
                // Exit the app
                console.log('Goodbye!');
                connection.end();
                break;
        }
    });
}