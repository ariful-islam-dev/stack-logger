const winstonExpressLogger = require("express-winston");
const logger = require("../utils/logger")


const expressWinstonLogger=(level)=>{ 
    return winstonExpressLogger.logger({
    level: level || "http",
    winstonInstance: logger,
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{res.statusCode}} {{res.responseTime}}ms {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, 
    colorize: false 
})}

const expressWinstonInfoLogger = expressWinstonLogger("error");
const expressWinstonErrorLogger = expressWinstonLogger("error"); 
module.exports = {
    expressWinstonInfoLogger, expressWinstonErrorLogger
}

