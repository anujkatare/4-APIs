import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            unique: true,
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            minlength: 10,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please insert correct email address (e.g.: user@gmail.com)"]
        },
        password: {
            type: String,
            required: true,
            minlength: 4,
            trim: true
        }
    }
);

userSchema.pre('save', async function()
{
    if(!this.isModified('password')){
        return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch(error) {
        throw error;
    }
}
);

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {id:this._id,},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '15m'}
    );
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '7d'}
    );
};

export const User = mongoose.model('User', userSchema);