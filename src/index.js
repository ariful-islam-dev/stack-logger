const express = require("express");
const app = express();
const userRouter = require("./routes");
const logger = require("./utils/logger");
const correlationId = require("./middleware/setCorrelationId")

// Default Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Winston Express Logger
const {expressWinstonErrorLogger, expressWinstonInfoLogger}=require("./middleware/winstonExpressLogger")
app.use(correlationId);
app.use(expressWinstonInfoLogger)
//Routers
app.use(userRouter);

app.use(expressWinstonErrorLogger)
// logger.error("This is error log");

// Global Error Handler

app.use((error, req, res, next)=>{
    const errorObj = {
        message:error?.message || "Something wen wrong",
        correlationId: req.headers["x-correlation-id"],
        status: error?.status || 500,
    }
    logger.error(JSON.stringify(errorObj))
    res.status(errorObj.status).json(errorObj)
});

// Server Listen
app.listen(4000, ()=>{
    console.log(`Server is listen on http://localhost:4000`);
})