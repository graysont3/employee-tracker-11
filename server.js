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

function starter () {
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

function viewAllDepartments () {
    const query = `SELECT id, department_name AS department FROM department`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        starter();
    });
}

function viewAllRoles () {
    const query = `SELECT id, title, salary, department_id AS title FROM role`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        starter();
    });
}

function viewAllEmployees () {
    const query = `SELECT id, first_name, last_name AS name FROM employee`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        starter();
    });
}

function addDepartment () {
    inquirer.prompt([
        {
            type: "input",
            message: "Please name the new department",
            name: "newDepartment",
        }
    ])
    .then((response) => {
        const query = `INSERT INTO department (department_name) VALUES (?)`;
        const params =[response.newDepartment];

        db.query(query, params, (err, results) => {
            if (err) throw err;
            console.log(`Successfully added ${response.newDepartment} to departments`)

        })
    })
}