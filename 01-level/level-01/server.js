import http from "http"

const server = http.createServer((req, res)=>{
    res.write("Hello world")
    res.end();
    console.log("request received");
    
})

server.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
    
})
    
    