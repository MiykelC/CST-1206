const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }, 
        phoneNumber: {  
            type: String,
    }
}
)

const User = mongoose.model("User", UserSchema);
module.exports = User; // here we are using ES5
