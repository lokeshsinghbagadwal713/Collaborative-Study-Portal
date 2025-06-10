import dotenv from 'dotenv'

dotenv.config({
    path:'../.env'
})


const youtubeApiKey = process.env.YOUTUBE_API_KEY ;
//console.log(`youtube api key loaded : ${youtubeApiKey}`); // log for debug
export{
    youtubeApiKey
}