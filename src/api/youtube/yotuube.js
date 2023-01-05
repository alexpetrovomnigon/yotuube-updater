const axios = require("axios");
const {YOUTUBE_API_BASE_URL, YOUTUBE_API_KEY} = require("../../../config.json");

const sendRequest = async (endpoint, params) => {
    console.log(`${YOUTUBE_API_BASE_URL}${endpoint}`);
    console.log(JSON.stringify({
        params: {
            key: YOUTUBE_API_KEY,
            ...params    
        }
    }, null, 4));
    const response = await axios.get(`${YOUTUBE_API_BASE_URL}${endpoint}`, {
        params: {
            key: YOUTUBE_API_KEY,
            json: true,
            ...params    
        }
    });
    return response.data;
}

module.exports = {sendRequest};