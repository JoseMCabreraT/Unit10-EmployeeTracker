INSERT INTO department (id, department_name)
VALUES (1, 'Sales'),
       (2, 'Engineering'),
       (3, 'Finance'),
       (4, 'Legal');

INSERT INTO employeeRole (id, title, salary, department_id)
VALUES (1, 'Salesperson', 1000, 1),
       (2, 'Sales Lead', 2000, 2),
       (3, 'Software Engineer', 3000, 3),
       (4, 'Lead Engineer', 4000, 4),
       (5, 'Accountant', 5000, 1),
       (6, 'Account Manager', 6000, 2),
       (7, 'Lawyer', 7000, 3),
       (8, 'Legal Team Lead', 8000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Jose', 'Cabrera', 1, 1),
       (2, 'Diana', 'Blanco', 2, 2),
       (3, 'George', 'Brown', 3, 3),
       (4, 'Harry', 'Alexander', 4, 4),
       (5, 'Alan', 'Sommerfield', 5, 5);
