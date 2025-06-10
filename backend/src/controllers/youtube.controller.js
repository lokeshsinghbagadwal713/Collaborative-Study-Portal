import axios from 'axios'
import { youtubeApiKey } from '../config/keys.js'
import { asyncHandler } from '../utils/AsyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'


const searchVedios = asyncHandler(async(req, res) => {
    try {
        const {query} = req.query;
       // console.log(`Received query: ${query}`); // test
       // console.log(`Using YouTube API Key: ${youtubeApiKey}`); //test
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params:{
                part : 'snippet',
                q : query,
                key : youtubeApiKey
            },
        });
        //console.log("youtube api raw response:", response);  // test
       // console.log("youtube api response data", response.data); // test
       // Check if response.data is valid
        if (response && response.data) { 
            res.json(response.data);
         } 
         else {
             res.status(500).json({ error: 'No data received from YouTube API' });
         }
    } catch (error) {
        //console.error("error fetching vedios", error.response ? error.response.data : error.message); // log to debug
        return res.staus(500).json(new ApiResponse(500, "failed to fetch vedios!!!"));
    }
}) ;

export {
    searchVedios
}