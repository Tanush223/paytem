

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
        minLength:6
    },
    firstName:{
        type:String,
        require:true,
        trim:true,
        maxLength:10
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
        maxLength:10
    },
});

const User = mongoose.model('User',userSchema);

module.exports={
    User
};

