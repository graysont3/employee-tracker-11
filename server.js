const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console");
const { default: inquirer } = require("inquirer");


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

}