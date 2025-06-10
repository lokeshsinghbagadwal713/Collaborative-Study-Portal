import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigin = process.env.CORS_ORIGIN;

app.use(cors({
    origin : allowedOrigin,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

import router from './routes/user.route.js';

app.use("/api/user",router)

export {app};