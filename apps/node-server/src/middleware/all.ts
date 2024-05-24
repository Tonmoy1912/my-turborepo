import { Request,Response } from "express";

export function all(req:Request,res:Response,next:any){
    console.log("middleware all called");
    next();
}