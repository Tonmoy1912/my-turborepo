export function middleware1(req:any,res:any,next:any){
    console.log("middleware1 called");
    next();
}