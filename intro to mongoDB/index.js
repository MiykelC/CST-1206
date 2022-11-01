const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const User = require("./models/user");
require(`dotenv`).config();


app.use(express.json());

mongoose.connect(process.env.MONGO_URL, (error) => {
    if(error){
        console.error(`there is an error ${error}`);
    } else {
        console.log("connected to mongoDB");
    }
})


app.get("/", (req, res) => {
    res.send("USER ENDPOINTS")
});

app.get("/users", (req, res) => {
        User.find().then((users) => {
        return res.status(200).json(users);
    })
});

app.post("/users", (req, res) => {
    let newUser = {
        name:req.body.name,
        email:req.body.email ,  
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    }
    // we are making an instance of user model
    const user = new User(newUser);

    user.save().then((data) => {
        return res.status(201).json({
                message: "user created successfully",
                data
            })
    })
})  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});