INSERT INTO departments (name) VALUES
('HR'),
('Engineering'),
('Sales'),
('Finance');

INSERT INTO roles (title, salary, department_id) VALUES
    ('HR Manager', 60000, 1),
    ('Software Engineer', 80000, 2),
    ('Sales Manager', 70000, 3),
    ('Accountant', 55000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES
    ('')