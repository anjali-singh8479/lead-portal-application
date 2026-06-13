const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { getAccessToken } = require("./zoho.js");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/createlead", async (req,res)=>{

 try{

   const token = await getAccessToken();

   
   const leadData = {
     data:[
       {
         Last_Name:req.body.fullName,
         Email:req.body.email,
         Phone:req.body.phone,
         No_of_Employees:req.body.experience,
         Twitter:req.body.skills
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

app.get("/getleads",async(req,res)=>{
    try{
       const token = await getAccessToken();
       const response = await axios.get(
           "https://www.zohoapis.in/crm/v7/Leads",
           {
               headers:{
                   Authorization:`Zoho-oauthtoken ${token}`
               },
               params: {
                   fields: "Last_Name,Email,Phone,Created_Time,No_of_Employees,Twitter"
               }
           }
       );
    //    records=response.data.data|| [];
    //    const formatted = records.map((lead) => ({
    //   id: lead.id,
    //   name: lead.Last_Name,
    //   email: lead.Email,
    //   phone: lead.Phone,
    //   experience: lead.Experience,
    //   skills: lead.Skills,
    // }));
       res.json({
           success:true,
           zohoResponse:response.data,
           message:"Leads retrieved successfully"
       });
    }
    catch(error){
        console.error(error.response?.data || error);
        res.status(500).json({
            success:false,
            message:"Zoho CRM Error"
        });
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});