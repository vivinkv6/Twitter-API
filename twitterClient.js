const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey : "API KEY",
    appSecret : "API SECRET",
    accessToken : "API ACESS TOKEN",
    accessSecret : "API ACESS SECRET"
});


const rwClient = client.readWrite;

module.exports = rwClient;