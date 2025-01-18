import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();




function startMenu(): void {
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
          AddEmployee();
      
        break;
        case 'Update Employee Role':
          UpdateEmployeeRole();
        break;
        case 'View All Roles':
          Roles();

        break;
        case 'Add Role':
          AddRole();
        break;
        case 'View All Departments':
          Departments();
        break;
        case 'Add Department':
        AddDepartment();
        break;
        case 'Update employee managers':
          UpdateEmployeeManagers();
        break;
        case 'View employees by manager':
          ViewEmployeesByManager();
        break;
        case 'View employees by department':
          ViewEmployeesByDepartment();
        break;
        case 'Delete Department':
          DeleteDepartment();
        break;
        case 'Delete Roles':
          DeleteRoles();
        break;
        case 'Delete Employees':
          DeleteEmployees();
        break;
        case 'View the total utilized budget of a department':
          Total();
        break;
        default:
            process.exit(0);
    }//switch

  });

}//startMenu

function Employee(): void {

const sql = `SELECT * FROM employee`;
  pool.query(sql, (err: Error, result: QueryResult) => {
    if (err) {
      
      return;
    }//if
    const { rows } = result;
    console.log(rows);
   startMenu();

});
}//employee function

function Roles(): void {
  
  
  const sql = `SELECT * FROM employeeRole`;
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        
        return;
      }//if
      const { rows } = result;
      console.log(rows);
     startMenu();
  
  });
  }//Roles function

  function Departments(): void {

    const sql = `SELECT * FROM department`;
      pool.query(sql, (err: Error, result: QueryResult) => {
        if (err) {
          
          return;
        }//if
        const { rows } = result;
        console.log(rows);
       startMenu();
    
    });
    }//department function

function AddEmployee(): void {

  inquirer.prompt([
{
name: 'first_name',
message: 'What is the employee first name?',
},
{
name: 'last_name',
message: 'What is the employee last name?',
}

  ]).then((res) => {
const firstName = res.first_name;
const lastName = res.last_name;
  });

      const sql = `INSERT INTO employee (first_name, last_name)
       VALUES (firstName, lastName);`;
        pool.query(sql, (err: Error, result: QueryResult) => {
          if (err) {
            
            return;
          }//if
          const { rows } = result;
          console.log(rows);
         startMenu();
      
      });
}//AddEmployee function

function UpdateEmployeeRole(): void {

        const sql = ``;
          pool.query(sql, (err: Error, result: QueryResult) => {
            if (err) {
              
              return;
            }//if
            const { rows } = result;
            console.log(rows);
           startMenu();
        
        });
        }//UpdateEmployeeRole function

function AddRole(): void {

  inquirer.prompt([
    {
    name: 'roleName',
    message: 'What is the new role name?',
    },
    {
    name: 'salary',
    message: 'What is the role salary?',
    }
    
      ]).then(() => {
    
      });

          const sql = `INSERT INTO employeeRole (title, salary)
          VALUES (, );`;
            pool.query(sql, (err: Error, result: QueryResult) => {
              if (err) {
                
                return;
              }//if
              const { rows } = result;
              console.log(rows);
             startMenu();
          
          });
          }//AddRole function


function AddDepartment(): void {

  inquirer.prompt([
    {
    name: 'DepartmentName',
    message: 'What is the new department name?',
    },
    
      ]).then(() => {
    
      });

            const sql = `INSERT INTO department (department_name)
            VALUES ();`;
              pool.query(sql, (err: Error, result: QueryResult) => {
                if (err) {
                  
                  return;
                }//if
                const { rows } = result;
                console.log(rows);
               startMenu();
            
            });
        }//AddDepartment function

function UpdateEmployeeManagers(): void {

          const sql = ``;
            pool.query(sql, (err: Error, result: QueryResult) => {
              if (err) {
                
                return;
              }//if
              const { rows } = result;
              console.log(rows);
             startMenu();
          
          });
  }//UpdateEmployeeManagers function


      
    function ViewEmployeesByManager(): void {

            const sql = `SELECT * FROM employee`;
              pool.query(sql, (err: Error, result: QueryResult) => {
                if (err) {
                  
                  return;
                }//if
                const { rows } = result;
                console.log(rows);
               startMenu();
            
            });
      }//ViewEmployeesByManager function


      function ViewEmployeesByDepartment(): void {

        const sql = ``;
          pool.query(sql, (err: Error, result: QueryResult) => {
            if (err) {
              
              return;
            }//if
            const { rows } = result;
            console.log(rows);
           startMenu();
        
        });
  }//ViewEmployeesByDepartment function


  
  function DeleteDepartment(): void {

    const sql = `DELETE FROM department WHERE id = 2;`;
      pool.query(sql, (err: Error, result: QueryResult) => {
        if (err) {
          
          return;
        }//if
        const { rows } = result;
        console.log(rows);
       startMenu();
    
    });
}//DeleteDepartment function


function DeleteRoles(): void {

  const sql = `DELETE FROM employeeRole WHERE id = 2;`;
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        
        return;
      }//if
      const { rows } = result;
      console.log(rows);
     startMenu();
  
  });
}//DeleteRoles function
  
function DeleteEmployees(): void {

  const sql = `DELETE FROM employee WHERE id = 2;`;
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        
        return;
      }//if
      const { rows } = result;
      console.log(rows);
     startMenu();
  
  });
}//DeleteEmployees function


function Total(): void {

  const sql = ``;
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        
        return;
      }//if
      const { rows } = result;
      console.log(rows);
     startMenu();
  
  });
}//Total function
  



function init() {
    startMenu();


}//function init()

init();

