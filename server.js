const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console");
const { default: inquirer } = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'webcoder',
        database: 'employee_db'
    },
    console.log(`Connected to employee_db database.`)
);

function start () {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'selections',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit'
            ]
        })
        .then((response) => {
            switch (response.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;

                case "View all roles":
                    viewAllRoles();
                    break;

                case "View all employees":
                    viewAllEmployees();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update an employee role":
                    updateEmployeeRole();
                    break;

                case 'Quit':
                    quitDB();
                    break;    
            }
        })
};