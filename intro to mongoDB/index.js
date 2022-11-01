const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const URL = `mongodb+srv://michael:michael1234@user.9rc4mdt.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(URL, (error) => {
    if(error){
        console.error(`there is an error ${error}`);
    } else {
        console.log("connected to mongoDB");
    }
})


app.get("/", (req, res) => {
    res.send("USER ENDPOINTS")
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});