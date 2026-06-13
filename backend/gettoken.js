const axios = require("axios");

axios.post(
"https://accounts.zoho.in/oauth/v2/token",
null,
{
 params:{
   grant_type:"authorization_code",
   client_id:"1000.18S57M2HRNP7D12OS78A3FU24LTHXJ",
   client_secret:"40059d9a1abb83ef11936f471bf677610b8fcff718",
   redirect_uri:"http://localhost:3000/oauth/callback",
   code:"1000.8cf3a125cfa5ddaf32b8fa217a31767f.b5c7591120260d7e46963197ae9a3eed"
 }
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err.response.data));