const express = require("express");
const app = express();
const userRouter = require("./routes");

// Default Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Routers
app.use(userRouter);

// Global Error Handler

app.use((error, req, res, next)=>{
    const errorObj = {
        message:error?.message || "Something wen wrong",
        status: error?.status || 500,
    }
    res.status(errorObj.status).json(errorObj)
});

// Server Listen
app.listen(4000, ()=>{
    console.log(`Server is listen on http://localhost:400`);
})