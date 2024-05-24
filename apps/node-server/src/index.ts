import express,{ Express } from "express";
import { all } from "./middleware/all";
import {middleware1} from "@repo/common/config";

const app=express();

app.use(express.json());
app.use(all);
app.use(middleware1);

app.get("/",function(req,res){
    return res.status(200).json({ok:true,message:"Hello wordl"});
})

app.listen(8000,function(){
    console.log(`Server running on port ${8000}`);
});