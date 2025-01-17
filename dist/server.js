import inquirer from 'inquirer';
import { pool, connectToDb } from './connection.js';
await connectToDb();
function startMenu() {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'View all Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Update employee managers',
                'View employees by manager',
                'View employees by department',
                'Delete Department',
                'Delete Roles',
                'Delete Employees',
                'View the total utilized budget of a department',
                'Quit'
            ],
        },
    ])
        .then((response) => {
        switch (response.menu) {
            case 'View all Employees':
                Employee();
                break;
            case 'Add Employee':
                //create functions in each case.
                break;
            case 'Update Employee Role':
                break;
            case 'View All Roles':
                Roles();
                break;
            case 'Add Role':
                break;
            case 'View All Departments':
                break;
            case 'Add Department':
                break;
            case 'Update employee managers':
                break;
            case 'View employees by manager':
                break;
            case 'View employees by department':
                break;
            case 'Delete Department':
                break;
            case 'Delete Roles':
                break;
            case 'Delete Employees':
                break;
            case 'View the total utilized budget of a department':
                break;
            default:
                process.exit(0);
        } //switch
    });
} //startMenu
function Employee() {
    console.log(`Is this working?`);
    const sql = `SELECT * FROM employee`;
    pool.query(sql, (err, result) => {
        if (err) {
            return;
        } //if
        const { rows } = result;
        console.log(rows);
        startMenu();
    });
} //employee function
function Roles() {
    const sql = `SELECT * FROM employeeRole`;
    pool.query(sql, (err, result) => {
        if (err) {
            return;
        } //if
        const { rows } = result;
        console.log(rows);
        startMenu();
    });
} //Roles function
function init() {
    startMenu();
} //function init()
init();
