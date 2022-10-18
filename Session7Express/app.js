const express = require("express")
const app = express();
const PORT = 4000;
const path = require ('path')


const logger =(req, res, next) => {
    console.log("I am inside this middleware");
    next();
}
app.use(logger);

console.log(__dirname, "Directory Name")

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
