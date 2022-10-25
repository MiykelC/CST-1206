const express = require('express');
const app = express();
const PORT = 4000;
const  employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000
    }
    ];


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Employee APIs MICHAEL CHUA'S MIDTERMS!");
})

// show all employees
app.get('/employee', (req, res) => {
    return res.status(200).json(employeeList);
})

// get employee with specific id 
app.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const employee = employeeList.find((employee) => {
        if (employee.id == id){
            return true;
        }
    })
    return res.status(200).json(employee);
})


// get employee with specific department
app.get('/employee/in/:department', (req, res) => {
    const department = req.params.department;
    const employee = employeeList.find((employee) => {
        if (employee.department == department){
            return true;
        }
    })
    return res.status(200).json(employee);
})

// add new to your data 
app.post('/employee/add', (req, res) => {
    const employeeData = req.body;
    employeeList.push(employeeData);
    return res.status(201).json(employeeList);
})

// delete an employee base on their id number

app.delete('/employee/delete/:id', (req, res) => {
    const id = req.params.id;
    const employee = employeeList.find((employee) => employee.id === parseInt(id));
    if (!employee) {
        return res.status(400).json({ message: `Employee with id ${id} does not exist` });
    }
    const index = employeeList.indexOf(employee);
    employeeList.splice(index, 1);
    return res.status(200).json({ message: `Employee with id ${id} deleted successfully` });
})

// update an employee base on their id number

app.put('/employee/update/:id', (req, res) => {
    const id = req.params.id;
    const employee = employeeList.find((employee) => employee.id === parseInt(id));
    if (!employee) {
        return res.status(400).json({ message: `Employee with id ${id} does not exist` });
    }
    const index = employeeList.indexOf(employee);
    employeeList[index] = req.body;
    return res.status(200).json({ message: `Employee with id ${id} updated successfully` });
})

// running the server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})