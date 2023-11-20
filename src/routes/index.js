const {Router}=require("express");

const router = Router();

router.get("/users", (req, res)=>{
    res.json({
        name: "Ariful",
        age: 29
    })
})

router.post("/users", (req, res, next)=>{
    try{
        const {name, age}= req.body;
        if(!name || !age){
            throw new Error("Name and age is required")
        }
        res.json({
            message: "User created Successfully"
        })
    }catch(error){
        next(error)
    }
})

module.exports = Router;