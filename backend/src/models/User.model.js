import mongoos, {Schema} from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
    {
        name :{
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true ,
           
        },
        userName : {
            type : String,
            required : true,
            unique : true,
            lowerCase : true,
            trim : true,
        },
        password : {
            type : String,
            required : [true, "password is required"]

        },
        phNumber : {
            type : String,

        },
        refreshToken :{
            type : String
        }
    },
    {
        timestamps : true
    }
)

userSchema.pre("save", async function (next){
    if(!this.isDirectModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this.id,
            email : this.email,
            userName : this.userName,
            phNumber : this.phNumber 
        },
        process.env.ACCESS_TOKEN_SECRATE,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id : this.id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const UserModel = mongoos.model("UserModel", userSchema);