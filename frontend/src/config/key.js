import dotenv from 'dotenv'


dotenv.config({
    path:'./.env'
})

const geminiApiKey = process.env.GEMINI_API_KEY;

export{
    geminiApiKey
}