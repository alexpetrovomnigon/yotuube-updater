const {sendRequest} = require("./src/api/youtube/yotuube");

const fetchPlaylistItems = async (playlistId) => {
    const response = await sendRequest("playlistItems", {part: "snippet", playlistId});
    console.log(JSON.stringify(response, null, 4));
}

fetchPlaylistItems("PLagUXFJ8tvam4gGiOhzH0wPmSDgUbvrI0");