const axios = require("axios");
require("dotenv").config();
post(
"https://accounts.zoho.in/oauth/v2/token",
null,
{
 params:{
   grant_type:"authorization_code",
   client_id:process.env.client_id,
   client_secret:process.env.client_secret,
   redirect_uri:"http://localhost:3000/oauth/callback",
   code:"1000.8cf3a125cfa5ddaf32b8fa217a31767f.b5c7591120260d7e46963197ae9a3eed"
 }
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err.response.data));