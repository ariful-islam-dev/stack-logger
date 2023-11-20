const {createLogger, format, transports} = require("winston");
const {colorize, json, timestamp, combine} = format;;

// Console Transport
const consoleTransport = new transports.Console({
    level: "info",
    format: combine( timestamp(), json())
})

// File Transport
const fileTransport=(level, filename)=>{
    return new transports.File({
        level: level || "info",
        format: combine(timestamp(), json()),
        filename: `logs/${level}/${filename}`|| "logs/info/info.log"
    })
}
 const infoFileTransport = fileTransport("info", "info.log");
 const errorFileTransport = fileTransport("error", "error.log");
// ElasticSearch transports

const logger = createLogger({
    transports: [
        consoleTransport,
        infoFileTransport,
        errorFileTransport
    ]
})

module.exports = logger;