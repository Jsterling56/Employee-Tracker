import mysql from 'mysql';
import inquirer from 'inquirer';
import consoleTable from 'console.table';

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
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    // Implement the viewDepartments function
                    function viewDepartments() {
                        const query = 'SELECT * FROM departments';
                        connection.query(query, (err, res) => {
                            if (err) throw err;
                            console.table(res);
                            startApp();
                        })
                    }
                    break;
                case 'View all roles':
                    // Implement the viewRoles function
                    function viewRoles() {
                        const query = `
                SELECT roles.id, roles.title, roles.salary, departments.name AS department
                FROM roles
                LEFT JOIN departments ON roles.department_id = departments.id`;

                        connection.query(query, (err, res) => {
                            if (err) throw err;
                            console.table(res);
                            startApp();
                        });

                    }
                    break;
                case 'View all employees':
                    // Implement the viewEmployees function
                    function viewEmployees() {
                        const query = `
                SELECT
                    employees_id,
                    employees.first_name,
                    employees.last_name,
                    roles.title AS job_title,
                    departments.name AS department,
                    roles.salary,
                    CONCAT(managers.first_name, ' ', managers.last_name) AS manager
                FROM
                    employees
                INNER JOIN
                    roles ON employees.role_id = roles.id
                INNER JOIN
                    departments ON roles.department_id = departments.id
                LEFT JOIN
                    employees AS managers ON employees.manager_id = managers.id`;

                        connection.query(query, (err, res) => {
                            if (err) throw err;
                            console.table(res);
                            startApp();
                        })
                    }
                    break;
                case 'Add a department':
                    // Implement the addDepartment function
                    function addDepartment() {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'name',
                                    message: 'Enter the name of the department:',
                                    validate: (input) => {
                                        if (input.trim() === '') {
                                            return 'Department name cannot be empty.';
                                        }
                                        return true;
                                    },
                                },
                            ])
                            .then((answer) => {
                                const query = 'INSERT INTO departments SET ?';
                                connection.query(query, { name: answer.name }, (err) => {
                                    if (err) throw err;
                                    console.log(`Department "${answer.name}" added.`);
                                    startApp();
                                })
                            })

                    }
                    break;
                case 'Add a role':
                    // Implement the addRole function
                    function addRole() {
                        inquirer
                            .prompt([
                                {
                                type: 'input',
                                name: 'title',
                                message: 'Enter the title of the role:',
                                },
                                {
                                    type: 'input',
                                    name: 'salary',
                                    message: 'Enter the salary for the role:',
                                    validate: (input) => {
                                        if (!parseFloat(input)) {
                                            return 'Please enter a valid salary.';
                                        }
                                        return true;
                                    },
                                },
                                {
                                    type: 'input',
                                    name: 'department_id',
                                    mesage: 'Enter the department ID for the role:',
                                    validate: (input) => {
                                        if (!parseInt(input)) {
                                            return 'Please enter a valid department ID.';
                                        }
                                        return true;
                                    },
                                },
                            ])
                            .then((answer) => {
                                const query = 'INSERT INTO roles SET ?';
                                connection.query(query, answer, (err) => {
                                    if (err) throw err;
                                    console.log(`Role "${answer.title}" added.`);
                                    startApp;
                                })
                            })

                    }
                    break;
                case 'Add an employee':
                    // Implement the addEmployee function\
                    function addEmployee() {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'first_name',
                                    message: 'Enter the first name of the employee:',
                                },
                                {
                                    type: 'input',
                                    name: 'last_name',
                                    message: 'Enter the last name of the employee:',
                                },
                                {
                                    type: 'input',
                                    name: 'role_id',
                                    message: 'Enter role ID for the employee:',
                                    validate: (input) => {
                                        if (!parseInt(input)) {
                                            return 'Please enter a valid role ID.';
                                        }
                                        return true;
                                    },
                                },
                                {
                                    type: 'input',
                                    name: 'manager_id',
                                    message: 'Enter the manager ID for the emploee (if applicable):',
                                    validate: (input) => {
                                        if (input.trim() !== '' && !parseInt(input)) {
                                            return 'Please enter a valid manager ID or leave it blank.';
                                        }
                                        return true;
                                    },
                                },
                            ])
                            .then ((answer) => {
                                const query = 'INSERT INTO employees SET ?';
                                connection.query(query, answer, (err)=> {
                                    if (err) throw err;
                                    console.log(`Employee "${answer.first_name} ${answer.last_name}" added.`);
                                    startApp();
                                })
                            })
                    }
                    break;

                case 'Exit':
                    // Exit the app
                    console.log('Goodbye!');
                    connection.end();
                    break;
            }
        });
}