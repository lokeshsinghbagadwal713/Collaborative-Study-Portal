import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiError} from '../utils/ApiErrors.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import { UserModel } from '../models/User.model.js';



const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await UserModel.findById(userId)
        if(!user){
            //console.log("user not found:", userId);
            throw new ApiError(404, "user not found")
        }
       // console.log("user found:", user);

        if(!user.generateAccessToken || !user.generateRefreshToken){
           // console.log("user does not have generation methods");
            throw new ApiError(500, "user does not have token generation methods")
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})

        return {accessToken, refreshToken}
        
    } catch (error) {
       // console.log("error during the token generation:", error);
        throw new ApiError(500,"something went wrong while generating access and refresh token")
    }
}



const registerUser = asyncHandler(async(req, res) => {

    const {name, email, userName, password, phNumber} = req.body

    if ([name, email, userName, password, phNumber]
        .some((field) => field?.trim() === " "))
     {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await UserModel.findOne({
        $or : [{userName}, {email}]
    })
    //console.log("existed user check: ", existedUser)

    if(existedUser){
        throw new ApiError(409, "user with email or username already exist.....")
    }

    const user = await UserModel.create({
        name,
        email,
        password,
        phNumber,
        userName: userName.toLowerCase(), 
    })

    const createdUser = await UserModel.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "something went wrong while registering the user...")

    }

    return res
    .status(201)
    .json(
        new ApiResponse(200, createdUser, "user registered successfully..")
    )

})


const loginUser = asyncHandler(async(req, res) => {
    const {email, userName, password} = req.body

    if(!userName && !email){
        throw new ApiError(400, "username or email is required")
    }

    const user = await UserModel.findOne({
        $or : [{userName}, {email}]
    })

    if(!user){
        throw new ApiError(404, "user does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "password is incorrect")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const logedInUser = await UserModel.findById(user._id)
    .select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, {
            user : logedInUser, accessToken, refreshToken
        },
    "user looged in successfully"
   ))
})


const logOutUser = asyncHandler(async(req, res) => {
    await UserModel.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new : true
        }
    )

    const options = {
        httpOnly:true,
        secure:true

    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User loged Out successfully"))
})

export {
    registerUser,
    loginUser,
    logOutUser
}


