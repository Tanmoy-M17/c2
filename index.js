const express= require("express");
const { use } = require("express/lib/application");
const mongoose=require("mongoose");
const app = express();

 const connect=()=>{
     return mongoose.connect("mongodb+srv://tanmoy:tanmoy_124@cluster0.mpwlo.mongodb.net/bank?retryWrites=true&w=majority");
  };

 const userSchema= new mongoose.Schema({
     firstName:{type:String,required:true},
     lastName:{type:String,required:true},
     age:{type:Number,required:true},
     emai:{type:String,required:true},
     gennder:{type:String,required:true},
     type:{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
    );

     const user=mongoose.model("user",userSchema);

     app.get("/user",async(req,res)=>{
        try{
            const users=awit Bank.create(req.body);
            
        }
        catch{

        }
     })

 app.listen(5000,async()=>{
     try{
         await connect();
     }
     catch(err){
            console.log("Err",err);
     }
     console.log("Lisening on port 5000");
 })