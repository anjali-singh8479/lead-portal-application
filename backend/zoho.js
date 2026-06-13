const axios = require("axios");
require("dotenv").config();

async function getAccessToken() {

 const response = await axios.post(
   "https://accounts.zoho.in/oauth/v2/token",
   null,
   {
     params:{
       refresh_token:process.env.refresh_token,
       client_id:process.env.client_id,
       client_secret:process.env.client_secret,
       grant_type:"refresh_token"
     }
   }
 );

 return response.data.access_token;
}

module.exports = { getAccessToken };