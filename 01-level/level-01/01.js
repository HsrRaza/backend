import fs from "fs"
import os from "node:os"
import process from "process";


// console.log("process id :" ,process.pid);
// console.log("Parent Process id", process.ppid);

// console.log("OS end of Line:", JSON.stringify(os.EOL));
 

// fs.readFile("myfile.txt", "utf-8", (err, data)=>{
//     if(err){
//       console.error("Error  reading file :", err.message);
//       return;
//     }
//     console.log("file content :", data);
    
// });

// console.log("done");


// using promise for readfile

async function readingFile(){
    try{
        const  data = await fs.promises.readFile("myfile.txt", "utf-8");
        console.log("file content:", data );
        console.log("file reading is completed");
    } catch(err){
        console.error("error reading file ", err.message)
    }
        
         
}

readingFile()
console.log("program finished");



