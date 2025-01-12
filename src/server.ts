import inquirer from 'inquirer';
import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const menu = [

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

]; //Menu

function init() {
    /*inquirer.prompt(menu).then((answers) => {
        const init = connection(answers);

    });*/


}//function init()


init();