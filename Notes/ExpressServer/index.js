const express = require('express');
const app = express();
const PORT = 4000;
const employee = [];

// Telling express that the data i am getting is of type JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Employee APIs!");
})

// We are trying to get employees data from the server
app.get('/employee', (req, res) => {
    // For get requests we give 200 success response
    // const data = res.status(200);
    // return data.json(employees);

    return res.status(200).json(employee);
})

// We are trying to post employees data to the server
app.post('/employee', (req, res) => {
    const employeeData = req.body;
    employee.push(employeeData);

    // 201 is used when you are trying to create a resource and send sucess response
    return res.status(201).json(employee);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
