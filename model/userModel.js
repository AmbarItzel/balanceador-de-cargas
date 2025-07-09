const mongoose = require("mongoose"); 
//este lo ponemos para decir que lo vamos a utilizar  qu
// -e en este momento es mongo
//const es para declarar la constante
//mongo 
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;