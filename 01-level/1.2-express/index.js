import express from "express"

const app = express();


let users=[]

app.get("/", (req, res)=>{
    res.send("API is running ")
});

app.post("/users", (req, res)=>{
    res.send("User is created ")
    const user = {
        id:Date.now(),
        name:req.body.name
    }
})


app.get("/users" ,(req, res)=>{
    res.json(users)
})


app.put("/users/:id", (req, res)=>{
    const user = users.find(u => u.id == req.params.id);
    if(!user){
        return res.status(404).json({msg:"User not found"})
    }

    user.name = req.body.name;
    req.json(user)
})


app.delete("/users/:id", (req, res)=>{
    const user = users.filter(u => u.id != req.params.id);
     res.json({message:"User deleted" });
})

app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
})
    