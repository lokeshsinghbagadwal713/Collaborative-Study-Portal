import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiError} from '../utils/ApiErrors.js';
import {UserModel} from '../models/User.model.js';
import jwt from 'jsonwebtoken';


export const veryfyJWT =asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if(!token){
            throw new ApiError(404, "unauthorized request")
        }

       // console.log("Token:", token); // for debugging
        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRATE )

        const user = await UserModel.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user){
            throw new ApiError(401, "invalid access token")
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.error("JWY veriyfication error", error.message); //for debuging
        throw new ApiError(401, error?.message || "Invalid access Token")
    }
})