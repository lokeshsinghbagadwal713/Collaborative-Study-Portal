import connectDB from './DB/db.js';
import dotenv from 'dotenv';

import {app} from './app.js';


dotenv.config({
    path:'./.env'
})

const  PORT = 2000;

connectDB()
.then ( () => {
    app.listen(PORT, () => {
        console.log(`server is running at PORT : ${PORT}`);
    })
})
.catch( (err) => {
    console.log("MONGODB connection failed!!!...", err);
});