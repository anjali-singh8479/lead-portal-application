const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { getAccessToken } = require("./zoho.js");
const app = express();

app.use(cors());
app.use(express.json());

// app.post("/createlead", (req, res) => {

//     console.log("Received Data:");

//     console.log(req.body);

//     res.json({
//         success: true,
//         message: "Data received successfully"
//     });

// });

app.post("/createlead", async (req,res)=>{

 try{

   const token = await getAccessToken();

   
   const leadData = {
     data:[
       {
         Last_Name:req.body.fullName,
         Email:req.body.email,
         Phone:req.body.phone,
         Experience:req.body.experience,
         Skills:req.body.skills
       }
     ]
   };

   const response = await axios.post(
     "https://www.zohoapis.in/crm/v7/Leads",
     leadData,
     {
       headers:{
         Authorization:`Zoho-oauthtoken ${token}`
       }
     }
   );

   res.json({
     success:true,
     zohoResponse:response.data,
     message:"Lead created successfully"
   });

 }catch(error){

   console.error(error.response?.data || error);

   res.status(500).json({
     success:false,
     message:"Zoho CRM Error"
   });

 }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});